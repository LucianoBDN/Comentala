const {DataTypes} = require('sequelize');
const sequelize = require('../dataBase/configDataBase.js')
const COMMENTS = sequelize.define('COMMENTS',{
    ID :{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    USER_ID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'USERS',
            key:'ID'
        }
    },
    POST_ID:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'POST',
            key:'ID'
        }
    },
    COMMENT:{
        allowNull:false,
        type:DataTypes.STRING(700),
    },
    LIKES:{
        type:DataTypes.INTEGER,    
    },
    DISLIKES:{
        type:DataTypes.INTEGER,    
    }
},{
    tableName: 'COMMENTS',timestamps:true
});

module.export = COMMENTS
