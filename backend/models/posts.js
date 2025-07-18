const { DataTypes } = require("sequelize");
const sequelize = require('../dataBase/configDataBase.js')

const Posts = sequelize.define(
  "posts",
  {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TITLE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    BODY: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "USERS",
        key: "ID",
      },
    },
    STATUS: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    LIKES:{
        type: DataTypes.INTEGER,
    },
    DISLIKES:{
        type: DataTypes.INTEGER,
    }
  },
  { tableName: "COMMENT_DISLIKES", timestamps: true }
);

module.exports = Posts;