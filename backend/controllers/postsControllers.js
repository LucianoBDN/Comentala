const Posts = require("../models/posts");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getPostById = async (req, res) => {
  try {
    const posts = await Posts.findByPk(req.params.id);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await Posts.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.body.user_id,
      image: req.body.image || null, // Optional field
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Posts.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const updatedFields = {
      title: req.body.title,
      body: req.body.body,
      image: req.body.image || null, // Optional field
    };
    res.status(200).json(await post.update(updatedFields));
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Posts.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    await post.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
