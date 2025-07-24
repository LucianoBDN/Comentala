const { or } = require("sequelize");
const Follows = require("../models/follows");

const Posts = require("../models/posts");

const getAllFollows = async (req, res) => {
  try {
    const follows = await Follows.findAll();
    res.json(follows);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const getfollowById = async (req, res) => {
  try {
    const follow = await Follows.findByPk(req.params.id);
    res.json(follow);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const createFollow = async (req, res) => {
  try {
    const followed_user_id = req.body.followed_user_id;
    const following_user_id = req.body.following_user_id;

    if (!following_user_id || !followed_user_id || following_user_id === followed_user_id){
      return res.status(400).json({ message: "Invalid IDs for follow" });
    }
    const newFollow = await Follows.create({
      following_user_id: req.body.following_user_id,
      followed_user_id: req.body.followed_user_id,
    });
    res.status(201).json(newFollow);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const deleteFollow = async (req, res) => {
  try {
    const follow = await Follows.findByPk(req.params.id);
    if (!follow) {
      return res.status(404).json({ message: "follow not found" });
    }
    await follow.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

module.exports = {
  getAllFollows,
  getfollowById,
  createFollow,
  deleteFollow,
};
