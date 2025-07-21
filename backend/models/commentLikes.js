const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js');

const CommentLike = sequelize.define('commentlike', {
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
  tableName: 'commentlikes',
  timestamps: true,

});

module.exports = CommentLike;
