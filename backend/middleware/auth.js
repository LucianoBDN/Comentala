const jwt = require("jsonwebtoken");

/**
 * Middleware that verifies the validity of the JWT token in the Authorization header.
 * Extracts the token, verifies it, and if valid, attaches the user data to the request.
 * Responds with 401 if there's no token, or 403 if the token is invalid.
 * @param {Object} req - HTTP request object.
 * @param {Object} res - HTTP response object.
 * @param {Function} next - Function to pass control to the next middleware.
 */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token required" });

  jwt.verify(token, process.env.JWT_SECRET || "secret", (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

/**
 * Middleware that allows access only to users with specific roles.
 * Checks if the user's role (attached in req.user) is among the allowed roles.
 * Responds with 403 if the user doesn't have permissions.
 * @param {...string} allowedRoles - List of authorized roles.
 * @returns {Function} Middleware for role-based access control.
 */
const allowRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

module.exports = { verifyToken, allowRoles };
