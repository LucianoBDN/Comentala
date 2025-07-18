const conexionBaseDeDatos = require('./dataBase/conecction.js')

const express = require('express')
const app = express()
const port =  3030;
app.listen(port,async ()=>{
    await conexionBaseDeDatos();
})