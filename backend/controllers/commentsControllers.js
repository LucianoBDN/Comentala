const Comments = require("../models/comments");



const getAllComments = async (req, res) => {
  try {
    const comments = await Comments.findAll();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getCommentById = async (req, res) => {
  try {
    const Comment = await Comments.findByPk(req.params.id);
    res.json(Comment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = await Comments.create({
      user_id: req.body.user_id,
      post_id: req.body.post_id,
      comment: req.body.comment,   
    });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updateComment = async (req, res) => {
  try {
    const Comment = await Comments.findByPk(req.params.id);
    if (!Comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    const updatedFields = {
      comment: req.body.comment, 
    };
    res.status(200).json(await Comment.update(updatedFields));
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteComment = async (req, res) => {
  try {
    const Comment = await Comments.findByPk(req.params.id);
    if (!Comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    await Comment.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
    getAllComments,
    getCommentById,
    createComment,
    updateComment,
    deleteComment,
}
