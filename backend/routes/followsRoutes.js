const express = require("express");
const router = express.Router();

const followsControllers = require("../controllers/followsControllers");

router.get("/", followsControllers.getAllFollows);
router.get("/:id", followsControllers.getfollowById);
router.post("/", followsControllers.createFollow);
router.delete("/:id", followsControllers.deleteFollow);

module.exports = router;
