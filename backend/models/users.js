const { DataTypes } = require("sequelize");
const sequelize = require('../dataBase/configDataBase.js')

const USERS = sequelize.define(
  "users",
  {
    ID: {
      primaryKey:true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true
    },
    USER_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ROLE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "USERS", timestamps: true }
);

USERS.associate = (models) =>{
  USERS.belongsToMany(models.USERS,{
    through: 'FOLLOWS',
    as:'FOLLOWING',
    foreignKey:'FOLLOWING_USER_ID',
    otherKey:'FOLLOWED_USER_ID'
  });

  USERS.belongsToMany(models.USERS,{
    through: 'FOLLOWS',
    as:'FOLLOWED',
    foreignKey:'FOLLOWED_USER_ID',
    otherKey:'FOLLOWING_USER_ID'   
  })
  
}


module.exports = USERS;