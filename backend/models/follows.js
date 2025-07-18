const { DataTypes } = require("sequelize");
const sequelize = require('../dataBase/configDataBase.js')

const FOLLOWS = sequelize.define(
  "FOLLOWS",
  {
    FOLLOWING_USER_ID: {
      type: DataTypes.INTEGER,
      refences: {
        model: "USERS",
        key: "ID",
      },
    },
    FOLLOWED_USER_ID: {
      type: DataTypes.INTEGER,
      refences: {
        model: "USERS",
        key: "ID",
      },
    },
  },
  { tableName: "FOLLOWS", timestamps: true }
);

module.export = FOLLOWS;