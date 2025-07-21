const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js');

const Comment = sequelize.define('comment', {
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
  comment: {
    allowNull: false,
    type: DataTypes.STRING(700),
  },
  likes: {
    type: DataTypes.INTEGER,
  },
  dislikes: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: 'comments',
  timestamps: true,
});


Comment.associate = (models) => {
  Comment.belongsTo(models.Posts, {foreignKey: 'post_id'})
  Comment.belongsTo(models.User, {foreignKey: 'user_id'})
  
}

module.exports = Comment;
