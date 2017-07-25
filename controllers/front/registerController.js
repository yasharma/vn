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
		usersave.save(function (err, result) {
            
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
                   
                    
                    message1  = completeerror;
                    data = {
                    				result: {
	                    					message: message1,
	                    					success: false,
	                    					class: 'Autherror',
	                    					result: err
                    				} 
                    		};

                }else{

                    data = {
                    			result: {
                    						message: 'User Successfully registered.',
                    						success: true,
                    						class: 'Authsuccess',
                    						result: result
                    					} 
                    		};
                }
                
            response.json(data);
		});
    });
	
};




