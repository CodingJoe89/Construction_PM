

const projects = require('../controllers/projectController.js');
module.exports = function(app){
    app.get('/projects', projects.index),
    app.post('/projects', projects.create),
    app.post('/projects/delete/:project_id', projects.destroy)
}