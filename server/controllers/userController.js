const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'CMA'
});

connection.connect(function(error){
  if (!!error){
    console.log('error');
  } else {
    console.log('connected');
  }
});


function userController(){
  this.index = function(req,res){
    connection.query('select * from CMA', function(err, result){
      if (err) {
        console.log('error');
      } else {
        console.log('insert success');
        console.log(result);
      }
    });
  }
  this.create = function(req, res){
    connection.query('insert into CMA set ?', user, function(err, result){
      if (err) {
        console.log('error');
      } else {
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

module.exports = new userController();
