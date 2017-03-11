// const mysql = require('mysql');

// var process.connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'CMA'
// });
//
// process.connection.connect(function(error){
//   if (!!error){
//     console.log('error');
//   } else {
//     console.log('connected');
//   }
// });


function taskController(){
  this.index = function(req,res){
    // process.connection.query('select * from CMA', function(err, result){
    //   if (err) {
    //     console.log('error');
    //   } else {
    //     console.log('insert success');
    //     console.log(result);
    //   }
    // });
  }
  this.create = function(req, res){
    console.log(req.body);
    process.connection.query('INSERT INTO `tasks` set ?', req.body, function(err, result){
      if (err) {
        console.log(err);
      } else {
        res.json(result);
        console.log('insert success');
        console.log(result);
      }
    });

  }
  this.destroy = function(req, res){

  }
  this.assignUserToCompany = function(req, res){

  }
  this.assignUserToTask  = function(req, res){

  }
}

var user = new taskController();

module.exports = user
