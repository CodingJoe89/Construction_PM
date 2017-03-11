/**
 * Created by navia on 3/9/2017.
 */

var express    = require("express");
const path = require('path');

var mysql      = require('mysql');
var jasmine_node = require('jasmine-node');

var jasmine = require('jasmine');

var app = express();

//configure application
app.use(express.static(path.join(__dirname, './../node_modules')));

var r = require('requestah')(8000); // Set the port for future requests


//const userController = require('../../server/controllers/companyController.js');

describe('testing index function in users',function(){

    r.get('/users', function(res) {
        if (res.statusCode === 200) { console.log(res.body); }
    });
})
