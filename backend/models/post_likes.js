const {DataTypes} = require('sequelize')
const sequelize = require('../dataBase/configDataBase.js')
const POST_LIKES = sequelize.define('POST_LIKES',{
    USER_ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        refences:{
            model:'USERS',
            key:'ID'
        }
        
    },
    POST_ID:{
        type: DataTypes.INTEGER,
        allowNull:false,
        refences:{
            model:'POST',
            key:'ID'
        }
    }
},{tableName:'POST_LIKE',timestamps:true})

module.exports = POST_LIKES;