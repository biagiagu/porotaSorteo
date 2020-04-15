// Controller BACKEND para porota

//Conectamos a la BD
var conexiondb = require('../lib/conexiondb');

function obternerUsuarios(request, response) {

	let query='select * from usuarios where idPerfil=1';

	conexiondb.query(query, function(error, results){
        if (error) {
            console.log('error!!', error);
            throw error;
        }
        
        // creamos un objeto literal para pasar en la respuesta
        let respuesta = {
            usuarios: results
        };
		console.log("ya arme la respuesta: ");
		console.log(respuesta);

        // enviamos la respuesta
        response.send(JSON.stringify(results));
    })


};

module.exports = {
    obternerUsuarios: obternerUsuarios
}