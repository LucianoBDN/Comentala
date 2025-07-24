const express = require("express");
const router = express.Router();

const commentsControllers = require("../controllers/commentsControllers");

router.get("/", commentsControllers.getAllComments);
router.get("/:id", commentsControllers.getCommentById);
router.post("/", commentsControllers.createComment);
router.put("/:id", commentsControllers.updateComment);
router.delete("/:id", commentsControllers.deleteComment);

module.exports = router;
