const {DataTypes} = require('sequelize')
const sequelize = require('../dataBase/configDataBase.js')

const POST_DISLIKES = sequelize.define('POST_DISLIKES',{
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
},{tableName:'POST_DISLIKE',timestamps:true})

module.export= POST_DISLIKES