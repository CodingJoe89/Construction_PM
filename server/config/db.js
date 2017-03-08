
/*
 *  database configuration
 */

var mysql = require('mysql');
/*
DB information
 */
var connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: 'databaseName'
});
/*
Connection to Database
 */

connection.connect(function(err){
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

