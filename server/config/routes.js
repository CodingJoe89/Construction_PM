const user = require('../controllers/userController.js');


module.exports = function(app){
  app.get( '/users', user.index ),
  app.post( '/user', user.create ),
  app.post( '/user/delete/:user_id', user.destroy ),
  app.post('/user/assignUserToCompany/:user_id')
}
