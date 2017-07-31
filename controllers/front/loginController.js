'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         User        = require(path.resolve('models/User')),
         response    = require(path.resolve('./config/lib/response')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         



/************************************************
***Function to check login credentials of user***
*************************************************/
   
exports.login           = (reqst, respe) => {

    var email           = reqst.body.email;
    var password        = reqst.body.password;
    let token           = jwt.sign(reqst.body, config.secret, {expiresIn: '1 day'});
    var logged_in_data  = {};

    if(!email || !password) {
        return respe.json(response.errors({},'Email and password are required.'));
    }else{
        
        User.findOne({email : email}, function (err, result) {
            if(result){
                if(result.comparePassword(config.salt, password)){
                    result.password = '';
                    logged_in_data = {
                                token : token,
                                user  : result
                            };
                    respe.json(response.success(logged_in_data,'Member Logged-In successfully.'));
                }else{
                    respe.json(response.errors({},"Authentication failed. Wrong password."));
                }
                
            }else{
                respe.json(response.errors(err,"Authentication failed. You are not registered with HotelJot."));
            }
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