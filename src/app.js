var express = require("express");
var path = require('path');
var morgan = require('morgan');
var mysql = require("mysql");
var myConnection = require("express-myconnection");

var app = express();
var connection = require('./database');

// Importando rutas
var listaLibroRoute = require('./routes/lista_libro');

// Setings
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleweres
app.use(morgan('dev'));

// routes
app.use('/', listaLibroRoute);


// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(3000, function(){
    console.log("Te escucho en el puerto 3000");
})

