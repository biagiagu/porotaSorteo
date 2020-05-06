// Controller BACKEND para porota

//Conectamos a la BD
var conexiondb = require('../lib/conexiondb');
const bcrypt = require("bcrypt");

var users=[];

function obternerUsuarios(request, response) {

	let query='select * from usuarios where idPerfil=1';

	conexiondb.query(query, function(error, result){
        if (error) {
            console.log('error!!', error);
            throw error;
        }
        
     	console.log("ya arme la respuesta: ");
		console.log(typeof(result));
		console.log(users);

        // enviamos la respuesta
        response.send(JSON.stringify(result));
    })
};

async function crearUsuario  (request, response) {
	try {
		const semilla = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(request.body.password, semilla);
		console.log(semilla);
		console.log(hashedPassword);
		let user = {"name": request.body.name, "pass": hashedPassword};
		users.push(user);
		console.log(users);
		response.status(201).send();
	} catch {
		response.status(500).send();
	}
	
	
}

module.exports = {
	obternerUsuarios: obternerUsuarios,
	crearUsuario: crearUsuario
}