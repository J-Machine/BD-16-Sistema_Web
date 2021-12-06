var express = require("express");
var mysql = require("mysql");
var app = express();
var connection = require('./database');

app.get('/', function(req, res){
    res.send("Mírame, sin manos!");
})

app.listen(3000, function(){

    console.log("Te escucho en el puerto 3000")
    connection.connect(function(err){
        if(err) throw err;
        console.log('DB conectada!');
    });
})