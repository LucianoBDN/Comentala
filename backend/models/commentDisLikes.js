const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js');

const CommentDisLike = sequelize.define('commentdislike', {
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
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'comments',
      key: 'id',
    }
  },
}, {
  tableName: 'commentdislikes',
  timestamps: true,
});

module.exports = CommentDisLike;
