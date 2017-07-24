'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         User       = require(path.resolve('models/User')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         



/************************************************
***Function to check login credentials of user***
*************************************************/
   
exports.login           = (request, response) => {

	var email           = request.body.email;
	var password        = request.body.password;
    let token           = jwt.sign(request.body, config.secret, {expiresIn: '1 day'});
    var data            = {};

    if(!email || !password) {
        console.log("Email/Password not found.");
        data =  {
                    result: {
                                message: 'Email and password are required',
                                success: false,
                                class: 'Autherror'
                    } 
                };

        response.json(data);

    }else{

    	User.findOne({email : email}, function (err, res) {
            if( err ){
                console.log("Email address not found.");
                data =  {
                            result: {
                                        message: 'Authentication failed.',
                                        success: false,
                                        class: 'Autherror'
                            }
                        };
            } else {
                if(res){
                    // Check for valid password and email address
                    if(res.comparePassword(config.salt, password)){ // check for valid password
                        console.log("Login Successfull");
                        data = {
                                    result:{
                                                user:res,
                                                token:token,
                                                success: true,
                                                class: 'Authsuccess'
                                    } 
                                };
                    } else {
                        console.log("Password doesn't matched.");
                        data =  {
                                    result: {
                                                message: 'Authentication failed. Wrong password.',
                                                success: false,
                                                class: 'Autherror'
                                    } 
                                };
                    }
                }else{ // Email address and password combination not found in DB
                    console.log("User not found with this information.");
                    data =  {
                                result: {
                                            message: 'Authentication failed. You are not registered with HotelJot.',
                                            success: false,
                                            class: 'Autherror'
                                } 
                            };
                }
            }
        response.json(data);

        });
    }
	
};

/*****************************************
******************************************
* Function to verify email address by user.
******************************************
******************************************/
/*exports.verifyEmail = (req, res, next) => {
    User.findOneAndUpdate(
        { "salt": req.params.salt, "email_verified": false },
        { "email_verified": true, "salt": null, "status": true },
        { new: true, runValidators: true, setDefaultsOnInsert: true, fields: {email: 1} },
        function(err, user){
            if(err || !user){
                // to-do should be redirect on expired or invalid link page
                if(process.env.NODE_ENV === 'test'){
                    return res.sendStatus(400);
                }
                res.redirect('/#/invalid-email-link');
            } else {
                if(process.env.NODE_ENV === 'test'){
                    return res.sendStatus(200);
                }
                // to-do should be redirect on user dashboard with success message
                res.redirect('/#/login?emailVerified=true');
            }
        }
    );
};*/

/*****************************************
******************************************
* Function to find user By id.
******************************************
******************************************/
/*exports.profileById = function (req, res, next) {
    let userid = '596ddc14eca457246c49bc1c';
    User.findById(userid,'-reset_password -salt -auth -i -password -last_edited_by',(error, profileUser) => {
        if(profileUser){
            res.json({ 
                record: profileUser, 
                success: true, 
                message: 'success'
            });
              
        } else {
            res.json({
                message: 'No user found.',
                success: false  
            });
        }
        console.log(profileUser); 
    });
};*/