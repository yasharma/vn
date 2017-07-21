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
    var data           = {};
    

	users.find({email : email}, function (err, res) {
       
        var usersave = new users(request.body);
		usersave.save(function (err, resp) {
            
                var issaved   = false;
                var message1  = '';
                var classmsg  = '';
                var completeerror = [];

                if(err){

                    if(err.errors.name){
                        completeerror.push(err.errors.name.message);
                    }                   
                    

                    if(err.errors.email){
                        completeerror.push(err.errors.email.message);
                    }

                    if(err.errors.password){
                        completeerror.push(err.errors.password.message);
                    }
                   
                    issaved   = false;
                    message1  = completeerror;
                    classmsg  = 'Autherror';
                    data = {result: {message: message1, success: issaved,class: classmsg } };

                }else{

                    console.log('Saved');
                    issaved  = true;
                    message1  = 'Successfully registered';
                    classmsg = 'Authsuccess';
                    data = {result: {message: message1, success: issaved,class: classmsg } };
                }
                
            	response.json(data);
		});
    });
	
};




