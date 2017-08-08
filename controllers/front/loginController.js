'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         async       = require('async'),
         _           = require('lodash'),
         bodyParser  = require('body-parser'),
         crypto      = require('crypto'),
         User        = require(path.resolve('models/User')),
         response    = require(path.resolve('./config/lib/response')),
         //mail        = require(path.resolve('./config/lib/mail')),
         hostPath    = require(path.resolve('./config/lib/hostPath')),
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


exports.forgotPassword = function(req,res,next){

    if(!req.body.email) {
        return res.json(response.errors({},'Email address is required'));
    }

    let email   = req.body.email,
    tmpEmail    = _.escapeRegExp(req.body.email);

    async.waterfall([
//0     
        function (done) {

            User.findOne({ email: {$regex: new RegExp(`^${tmpEmail}`), $options:"im"}},{email_verify: 1, status: 1, name: 1}, function (err, user) {
                if( err ){
                    done(err, null);
                } else {
                    let errors = null, error = false;
                    switch(_.isNull(user) || !_.isNull(user)){
                        // 1. IF User Not Found in Database
                        case _.isNull(user):
                            errors = {name:'Authentication failed', message:'Sorry! We weren\'t able to identify you by the information provided.'};
                            error = true;
                            break;

                        // 2. IF User Email is Not Verified
                        case (user.email_verify !== 'verified'):
                            errors = {name:'Authentication failed', message:'Your email is not verified, kindly verify your email.'};
                            error = true;
                            break;

                        // 3. IF Admin has Deactivate User Account
                        case (user.status !== 'active'):
                            errors = {name:'Authentication failed', message:'It seems your account is deleted or inactive. Please contact Admin for further assistance.'};
                            error = true;
                            break;
                            
                        default: 
                            error = false;  
                    }
                    done(errors, user);
                }
            });
        },
// 1    
        function (user, done) {
            crypto.randomBytes(20, function (err, buffer) {
                let token = buffer.toString('hex');
                done(err, user, token);
            });
        },
// 2    
        function (user, token, done) {
            User.update(
                {_id: user._id},
                { passwordReset: { token: token, timestamp: Date.now() + 86400000, status: true} }, 
                { runValidators: true, setDefaultsOnInsert: true },
                function(err, result){
                    done(err, token, user, result);
                }
            );
        },
// 3    
        function (token, user, done) {

            let baseUrl = hostPath.host(req),
            changePasswordLink = baseUrl + "api/resetpassword/" + token;
            //url = config.SETTING.STATIC_URL_EMAILTEMP;

            res.json(response.success(changePasswordLink ,"Mail Has been successfully sent, Please check your email address."));
            /*mail.send({
                subject: 'HotelJot - Forgot Password.',
                html: 'forgotPassword',
                from: config.emailsettings.EMAIL_AUTH_USER,
                to: email,
                emailData : {
                   changePasswordLink: changePasswordLink,
                   username: user.name,
                   url: url
                }
            }, function(err, success){
                if(err){
                    next(err);
                }else{
                    let message = 'You will receive an email from us now with instructions for resetting your password. If you don’t receive this email in your Inbox, please check your junk mail or spam folder. If any problems, please contact us at info@hoteljot.com';
                    res.json(response.success(success.response ,message));
                }
            });*/
        }
    ], function (err, result) {
        if(err){
            return res.json(response.errors(err, err.message)); 
        }
        return res.json(response.success(result, 'success')); 
    });
};


/**
 * Reset password GET from email token
 */
exports.validateResetToken = (req, res, next) => {
    User.count({ "passwordReset.token": req.params.token, "passwordReset.timestamp": { $gt: Date.now() }, "passwordReset.status": true } , function(err, user){
        if(user === 0){
            res.redirect(`/resetpassword/${req.params.token}?expired=true`);    
        } else {
            res.redirect(`/resetpassword/${req.params.token}`); 
        }
    });
};

// Reset your password
exports.resetPassword = function (req, res, next) {
    if( !req.body.token )   {
        return res.json(response.errors({},'Your link has been expired'));  
    }
    let token = req.body.token;

    User.findOne(
        { "passwordReset.token": token, "passwordReset.timestamp": { $gt: Date.now() }, "passwordReset.status": true }, 
        {email: 1, password: 1, passwordReset: 1, name:1}, function(err, user){

            if(!err && user){

                user.password = req.body.password;
                user.passwordReset = { status: false };

                user.save(function(err, saved){
                    
                    if(err){
                        return next(err);
                    } else {
                        // send user a confirmation mail
                        user.password = undefined;
                        res.json(response.success(saved,'Password has been reset successfully.') );
                        /*mail.send({
                            subject: 'HotelJot - Password Changed Successfully',
                            html: 'changePassword',
                            from: config.emailsettings.EMAIL_AUTH_USER,
                            to: saved.email,
                            emailData : {
                               email: saved.email,
                               username: saved.username,
                               url:  config.SETTING.STATIC_URL_EMAILTEMP
                            }
                        }, function(err, success){
                            if(err){
                                res.json(response.errors(err, 'Failure sending email'));
                            }else{
                                // Remove sensitive data before return authenticated user
                                user.password = undefined;
                                res.json(response.success(saved,'Password has been reset successfully.') );
                            }
                        });*/
                    }
                });
            } else {
                res.json(response.errors(err,'Password reset link is invalid or has been expired.') );
            }   
        }
    );  
};