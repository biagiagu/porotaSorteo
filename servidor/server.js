//llamamos a las librerias que necesitemos
//creamos la App Express
const express = require("express");
let app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

//armamos la conexion a la BD
var conexiondb = require('./lib/conexiondb');



app.use(bodyParser.urlencoded({
    extended:true
}));

//para que pueda recibir json
app.use(bodyParser.json());

app.use(cors());

// //llamamos al controlador
// var competenciaController=require('./controlador/competenciasController')


// //definimos una ruta para competencias
// app.get('/competencias', competenciaController.obternerCompetencia);
// app.get('/competencias/:id/peliculas', competenciaController.obtenerOpciones);
// app.post('/competencias/:id/voto', competenciaController.guardarVoto);



// este es el puerto donde vamos a estar escuchando la app y activamos la app
let puerto = 8080;

app.listen(
    puerto, 
    ()=>{
        console.log(`Estamos escuchando en el puerto ${puerto}`);
        //conectamos a la BD
        conexiondb.connect();
    }
);