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
* Login controller
******************************************/
   
exports.login           = (request, response) => {


	var email           = request.body.email;
	var password        = request.body.password;
    let token           = jwt.sign(request.body, config.secret, {expiresIn: '1 day'});
    var data            = {};

	users.findOne({email : email}, function (err, res) {
        if( err ){
            data =  {errors: {message: 'Authentication failed', success: false } };
        } else {
           
             if(res.comparePassword(config.salt, password)){
                data = {result:{user:res, token:token, success: true } };
            } else {
                data =  {errors: {message: 'Password incorrect', success: false } };
            }
            

        }

        response.json(data);

    });
	
};

