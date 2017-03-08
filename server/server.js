const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// NOTE: Add Body Parser at some point
// .urlencoded parses out the form data
// .json will parse out the JSON information from the AJAX call
app.use(bodyParser.json());

require('../server/config/routes.js')(app);

app.listen(8000, function(){
  console.log('==========');
  console.log('===8000===');
  console.log('==========');
})
