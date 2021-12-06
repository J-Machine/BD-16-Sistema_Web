const controller = {};

controller.list = function(req, res){
    res.send("Hello Jenny");
    
};

// connection. (function(err){
//     if(err) throw err;
//     console.log('DB conectada!');
// });


// app.get('/', function(req, res){
//     let sql = 'CALL Buscar_Libro("a");'; // Comando SQL

//     connection.query(sql, function(err , results){
//         if(err) throw err;
//         // console.log(results);
//         res.send(results);
        
//     })
// })

module.exports = controller;