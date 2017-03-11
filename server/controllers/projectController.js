// const mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : '',
//   password : '',
//   database : 'my_db'
// });
//
// connection.connect();

function ProjectController(){
    this.index= function(req,res){
      process.connection.query('SELECT * from `projects`', function(error, results, fields){
        if(error) res.json(error);
        else {
          res.json(results);
        }
      });

    }
    this.create=function(req,res){
         if (err){

        }
        else{

        }


    }
    this.destroy=function(req,res){
         if (err){

        }
        else{

        }


    }
}

module.exports= new ProjectController();
