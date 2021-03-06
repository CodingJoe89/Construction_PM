const user = require('./../controllers/userController.js');
const projects = require('./../controllers/projectController.js');
const companies = require('./../controllers/companyController.js');
const task = require('./../controllers/taskController.js');


module.exports = function(app){
  app.get( '/users', user.index ),
  app.post( '/users', user.getUser ),
  app.post( '/user', user.create ),
  app.post( '/user/delete/:user_id', user.destroy ),
  app.post('/user/assignUserToCompany/:user_id')
  app.post('/task', task.create),
  app.get('/projects', projects.index);
  app.post('/user/assignUserToCompany',user.assignUserToCompany)
  app.post('/projects', projects.create);
  // app.post('/projects/delete/:project_id', projects.destroy)
  //
  // app.get( '/companies', companies.index ),
  app.post( '/companies', companies.create );
  // app.post( '/companies/delete/:companies_id', companies.destroy)
}
