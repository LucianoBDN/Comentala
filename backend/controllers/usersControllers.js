const User = require("../models/users");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const createUser = async (req, res) => {
  try {
    const role = req.body.role || "user"; // Default to "user" if not provided
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      user_name: req.body.user_name,
      role: role,
      email: req.body.email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedFields = {
      user_name: req.body.user_name,
      email: req.body.email,
      password: hashedPassword
    };
    if (req.body.password) {
      updatedFields.password = await bcrypt.hash(req.body.password, 10);
    }
    await user.update(updatedFields);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
