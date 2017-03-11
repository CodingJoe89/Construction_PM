
var express    = require("express");
const path = require('path');
var mysql      = require('mysql');
var jasmine_node = require('jasmine-node');
var jasmine = require('jasmine');

var app = express();

//configure application
app.use(express.static(path.join(__dirname, './../node_modules')));

var r = require('requestah')(8000); // Set the port for requests

describe('testing index function in users',function(){


    r.post('/user', {first_name: "John",
        last_name : "Doe",
        profile : "gen user",
        username : "JohnD@xyz.com",
        email :"JohnD@xyz.com",
        password : "1234"
    }, function(res) {
        if (res.statusCode === 200) {
            console.log(res.body);
         }
    });
})
