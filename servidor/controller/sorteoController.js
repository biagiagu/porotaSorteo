// Controller BACKEND para porota

//Conectamos a la BD
var conexiondb = require('../lib/conexiondb');
const bcrypt = require("bcrypt");

var users=[];

function obternerUsuarios(request, response) {

	let query='select * from usuarios where id_Perfil=1';

	conexiondb.query(query, function(error, result){
        if (error) {
            console.log('error!!', error);
            throw error;
        }
        
     	console.log("ya arme la respuesta: ");
		console.log(typeof(result));
		console.log(result)

        // enviamos la respuesta
        response.send(JSON.stringify(result));
    })
};

async function crearUsuario  (request, response) {
	console.log("llego el post! (re) !");
	console.log(request);
	console.log(`el nombre que escribiste es: ${request.body.nombre}`);
	
	let nombre = request.body.nombre;
	let apellido = request.body.apellido;
	let mail = request.body.mail.length!=0 ? request.body.mail : "mail@ejemplo.com";
	let dni =  request.body.dni;
	let telefono = request.body.telefono;
	let sexo = request.body.sexo;
	let fechaNacimiento = request.body.fechaNacimiento;
	let direccionL1 = request.body.direccionL1;
	let direccionL2 = request.body.direccionL2;
	let codigoPostal = request.body.codigoPostal;
	let ciudad = request.body.ciudad;
	let idPais = request.body.pais;
	let idProvincia = request.body.provincia;
	let idPerfil = 1;
	
	// Hashing Password
	const semilla = await bcrypt.genSalt();
	let password = await bcrypt.hash("1234", semilla);
	
	let queryInsert=`INSERT INTO porota.usuarios (nombre, apellido, password, mail, id_perfil) 
	VALUES ("${nombre}", "${apellido}", "${password}", "${mail}", "${idPerfil}");`;

	conexiondb.query(queryInsert, function(error, result){
		if (error) {
			throw error;
		}
		response.send("Usuario Creado");
	});


	// try {
	// 	const semilla = await bcrypt.genSalt();
	// 	const hashedPassword = await bcrypt.hash(password, semilla);
	// 	let user = {"name": request.body.name, "pass": hashedPassword};
	// 	users.push(user);
	// 	console.log(users);
	// 	response.status(201).send();
	// } catch {
	// 	response.status(500).send();
	// }
}

function cargarPaises (request, response) {

	$.getJSON("https://restcountries.eu/rest/v2/all?fields=name;flag", listaDePaises,
		function (listaDePaises) {
			response.send(JSON.stringify(listaDePaises));
		}
	);
}


module.exports = {
	obternerUsuarios: obternerUsuarios,
	crearUsuario: crearUsuario,
	cargarPaises: cargarPaises
}