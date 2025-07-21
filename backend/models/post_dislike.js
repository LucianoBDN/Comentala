const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js');

const PostDisLike = sequelize.define('postdislike', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    }
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'posts',
      key: 'id',
    }
  },
}, {
  tableName: 'postdislikes',
  timestamps: true,

});

module.exports = PostDisLike;
