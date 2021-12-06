var mysql = require("mysql");
var myConnection = require("express-myconnection");

const { userInfo } = require("os");

var connection = myConnection(mysql, {
    host: 'localhost',
    database:'biblioteca',
    user: 'root',
    password: 'root',
    port: 3306
}, 'single');

module.exports = connection;