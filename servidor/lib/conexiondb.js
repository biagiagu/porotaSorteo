var mysql = require('mysql');

var conexiondb = mysql.createConnection({
    host: 'rds-mysql-10mintutorial.cjub9oocoi8n.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'masterUsername',
    password: 'P0r0t4W3b',
    database: 'porota'
});

//debemos exportar la variable de conexion definida antes
module.exports=conexiondb;