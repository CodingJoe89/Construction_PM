/**
 * NODE SERVER
 *
 */

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
//configure application
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// .json will parse out the JSON information from the AJAX call
app.use(bodyParser.json());

//require the database files and the server side routes here
require('./server/config/db.js');
require('./server/config/routes.js')(app);


//set up server , open port
app.listen(8000, function(){
  console.log("    ");
  console.log("=========== SERVER LISTENING ON PORT 8000 ================");
  console.log("    ");
})
