var mysql = require("mysql");
const { userInfo } = require("os");

var connection = mysql.createConnection({
    host: 'localhost',
    database:'biblioteca',
    user: 'root',
    password: 'root'
});

module.exports = connection;