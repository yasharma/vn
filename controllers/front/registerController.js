'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         users       = require(path.resolve('models/User')),
         response    = require(path.resolve('./config/lib/response')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         


/*****************************************
* Register controller
******************************************/

exports.register       = (reqst, respe) => {
	var name           = reqst.body.name;
	var email          = reqst.body.email;
	var password       = reqst.body.password;
    var data           = {};
    
    users.find({email : email}, function (err, res) {
        var usersave = new users(reqst.body);
        usersave.save(function (err, result) {
            if(result){
                respe.json(response.success(result,'You have successfully registered.'));
            }else{
                respe.json(response.errors(err.errors,'Error in Member Registration.'));
            }

        });
    });
};




