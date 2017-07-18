'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         users       = require(path.resolve('models/User')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         


/*****************************************
* Register controller
******************************************/

exports.register       = (request, response) => {	
	var name           = request.body.name;
	var email          = request.body.email;
	var password       = request.body.password;

	users.find({email : email}, function (err, docs) {
        if (docs.length){
        	response.send('This email address is already registered.');            
        }else{
            var usersave = new users(request.body);	
				usersave.save(function (err, response) {
				console.log('saved');		
			});
			response.send('You have successfully registered in HotelJot. Please login to your dashboard.');
        }
    });
	
};




