const { DataTypes } = require("sequelize");
const sequelize = require("../dataBase/configDataBase.js");

const Posts = sequelize.define(
  "posts",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true, // it is optional
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    dislikes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "posts",
    timestamps: true,
  }
);

// A post belongs to a user"
Posts.associate = (models) => {
  Posts.belongsTo(models.User, {
    foreignKey: "user_id",
  });
  // A post has many comments
  Posts.hasMany(models.Comment, {
    foreignKey: "post_id",
  });

  //A post has many likes
  Posts.hasMany(models.PostLike, {
    foreignKey: "post_id",
  });

  //A post has many dislikes
  Posts.hasMany(models.PostDisLike, {
    foreignKey: "post_id",
  });
};

module.exports = Posts;
