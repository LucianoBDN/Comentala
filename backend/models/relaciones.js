const User = require("../models/users.js");
const CommentDisLike = require("../models/commentDisLikes.js");
const CommentLike = require("../models/commentLikes.js");
const Comment = require("../models/comments.js");
const Posts = require("../models/posts.js");
const PostDisLike = require("../models/post_dislike.js");
const PostLike = require("../models/post_likes.js");
const Follows = require("./follows.js");

const models = {
  User,
  CommentDisLike,
  CommentLike,
  Comment,
  Posts,
  PostDisLike,
  PostLike,
  Follows,
};
//Browse all models
// If anyone has an associate function, it executes it and passes all the models to it.
//So inside the User model, for example, you can use models.Post, models.PostLike, etc.
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});


module.exports = {
  User,
  CommentDisLike,
  CommentLike,
  Posts,
  Comment,
  PostLike,
  PostDisLike,
  Follows,
};
