
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

const companies = require('../controllers/companiesController.js');
module.exports = function(app){
    app.get( '/players', companies.index ),
        app.post( '/players', companies.create ),
        app.post( '/players/delete/:player_id', companies.destroy)
}