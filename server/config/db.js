
/*
 *  database configuration
 */

var mysql = require('mysql');
/*
DB information
 */
process.connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'CMA'
});
/*
Connection to Database
 */

process.connection.connect(function(err){
    if(!err){
        console.log("Database Connection SUCCESSFUL.")
    }
    else{
        /*
         *  If the connection throws an error
         */
        console.log("ERROR connecting to Database.")
    }
});

/*
 *  When the connection is disconnected
 */

/*
 *  If the Node process ends, close the Mongoose connection
 */
