const express = require ('express');
const app = express();

const Tarea=require('./model/tarea');
const tareas = require('./model/tarea');

// CONVERTIR MIS DATOS EN JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// cREAR UNA NUEVA TAREA
app.post('/create', async(req ,res )=>{

    const Nuevatarea =new Tarea ({
        Tarea:req.body.Tarea,
        Descripcion:req.body.Descripcion})

    await Nuevatarea. save();
    res.send("recibido");

})

//Archivos estaticos

app.use(express.static(__dirname + '/public'));


module.exports=app;