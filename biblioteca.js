var express = require("express");
var mysql = require("mysql");
var app = express();
var connection = require('./database');

app.get('/', function(req, res){
    let sql = 'CALL Buscar_Libro("a");'; // Comando SQL

    connection.query(sql, function(err , results){
        if(err) throw err;
        // console.log(results);
        res.send(results);
        
    })
})

app.listen(3000, function(){
    console.log("Te escucho en el puerto 3000")
    connection.connect(function(err){
        if(err) throw err;
        console.log('DB conectada!');
    });
})