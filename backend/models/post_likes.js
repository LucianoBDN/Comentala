const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js');

const PostLike = sequelize.define('postlike', {
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
  tableName: 'postlikes',
  timestamps: true,
 
});

module.exports = PostLike;
