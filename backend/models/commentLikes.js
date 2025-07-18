const {DataTypes} = require('sequelize')
const sequelize = require('../dataBase/configDataBase.js')

const COMMENT_LIKES = sequelize.define('COMMENT_LIKES',{
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
},{tableName:'COMMENT_LIKES',timestamps:true})

module.export = COMMENT_LIKES