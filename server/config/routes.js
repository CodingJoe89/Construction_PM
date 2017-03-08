/*
Routes the get and post methods on server side.
 */

/*
EXAMPLE:
 app.get('/angular_html.html', function(req, res){
 res.sendFile(__dirname + '/' + 'angular_html.html');
 console.log("----------------");
 });
 app.post("/postFormAngular", function (req, res) {
 console.log(req.body.fName);
 res.send(req.body.fName);
 });
 */

const user = require('../controllers/userController.js');


module.exports = function(app){
  app.get( '/users', user.index ),
  app.post( '/user', user.create ),
  app.post( '/user/delete/:user_id', user.destroy ),
  app.post('/user/assignUserToCompany/:user_id')
}

