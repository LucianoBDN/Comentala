const conexionBaseDeDatos = require('./dataBase/conecction.js')
const cors = require('cors')
db = require("./models/relaciones.js")


const express = require('express')
const app = express()

app.use(cors())

const port =  3030;
app.listen(port,async ()=>{
    await conexionBaseDeDatos();
})