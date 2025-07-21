const { DataTypes } = require("sequelize");
const sequelize = require("../dataBase/configDataBase.js");

const User = sequelize.define(
  "user",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    
  }
);

User.associate = (models) => {
  User.belongsToMany(models.User, {
    through: "follows", // real name of the table
    as: "following", // Users I follow
    foreignKey: "following_user_id",
    otherKey: "followed_user_id",
  });

  User.belongsToMany(models.User, {
    through: "follows",
    as: "followers", // Users who follow me
    foreignKey: "followed_user_id",
    otherKey: "following_user_id",
  });

  // A user has many posts
  User.hasMany(models.Posts, {
    foreignKey: "user_id",
  });

  // A user has many comments
  User.hasMany(models.Comment, {
    foreignKey: "user_id",
  });

  //A user can give many likes to a post.
  User.hasMany(models.PostLike, {
    foreignKey: "user_id",
  });

  //A user can give many dislikes to a post.
  User.hasMany(models.PostDisLike, {
    foreignKey: "user_id",
  });

    //A user can give many likes to a comment
  User.hasMany(models.CommentLike, {
    foreignKey: "user_id",
  });
  
  //A user can give many dislikes to a comment
  User.hasMany(models.CommentDisLike, {
    foreignKey: "user_id",
  });
};

module.exports = User;
