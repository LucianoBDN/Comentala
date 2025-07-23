const conexionBaseDeDatos = require('./dataBase/conecction.js')
const cors = require('cors')
db = require("./models/relaciones.js")


const express = require('express')
const app = express()
app.use(cors())
app.use(express.json())

// Api routes
const usersRoutes = require("./routes/usersRouter.js");
const postsRoutes = require("./routes/postsRouter.js");

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);




const PORT =  3030;
app.listen(PORT,async ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
    await conexionBaseDeDatos();
})