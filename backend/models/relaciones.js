const USERS = require('../models/users.js')
const COMMENT_DISLIKES = require('../models/commentDisLikes.js')
const COMMENT_LIKES = require('../models/commentLikes.js')
const COMMENT = require('../models/comments.js')
const POST = require('../models/posts.js')
const POST_DISLIKE = require('../models/post_dislike.js')
const POST_LIKE = require('../models/post_likes.js')
const FOLLOWS = require('../models/follows.js')
const { FOREIGNKEYS } = require('sequelize/lib/query-types')


//Relacion USUARIO POSTEO --> UNO A MUCHOS 

USERS.hasMany(POST,{foreignKey:'USER_ID'})
POST.belongsTo(USERS,{foreignKey:'USERS_ID'})

//RELACION USUARIO FOLLOW --> 
USERS.associate({USERS})