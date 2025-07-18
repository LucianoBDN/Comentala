const {DataTypes} = require('sequelize')
const sequelize = require('../dataBase/configDataBase.js')

const COMMENT_DISLIKES = sequelize.define('COMMENT_DISLIKES',{
    USER_ID:{
        type: DataTypes.INTEGER,
        allowNull: false,
        refences:{
            model:'USERS',
            key:'ID'
        }

    },
    COMMENT_ID:{
        type: DataTypes.INTEGER,
        allowNull:false,
        refences:{
            model:'COMMENTS',
            key:'ID'
        }
    }
},{tableName:'COMMENT_DISLIKES',timestamps:true})

module.exports =COMMENT_DISLIKES;