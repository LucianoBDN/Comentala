const { DataTypes } = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js');

const Follows = sequelize.define('follows', {
  following_user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    }
  },
  followed_user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    }
  },
}, {
  tableName: 'follows',
  timestamps: true,
});

module.exports = Follows;
