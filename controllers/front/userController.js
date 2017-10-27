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
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
         ObjectId    = mongoose.Types.ObjectId;       


/****************************************************************
***Function to check login credentials of Hotel owner/Members ***
*****************************************************************/
   
exports.login           = (reqst, respe) => {

    var email           = reqst.body.email;
    var password        = reqst.body.password;
    
    if(!email || !password) {
        var errors      =    { email: {'message':'Email/contact-number and password are required.'}}
        respe.json(response.errors(errors,"Email/contact-number and password are required."));
    }
    
    User.findOne({ $or:[{email : {$regex: new RegExp(`^${email}`), $options:"im"}},{contact_number: email}]},
                { user_name:1, email:1, password:1, profile_image:1, password:1, status:1, email_verify:1, department:1, position:1, role:1, hotel_id:1, contact_number:1, first_name:1, last_name:1},(err, user) => {
        
                    if(err){
                        respe.json(response.errors(err.errors,"Error in login."));                                          
                    } else {
                        let errors = {}, error = false;
                        switch(_.isNull(user) || !_.isNull(user)){
                            // 1. IF User Not Found in Database
                            case _.isNull(user):
                                errors = { user: 'nodata', message: 'Authentication failed, User details not found.', success: false};
                                error = true;
                                break;
                            // 2.  if used email is not verified
                            case (user.email_verify !== 'verified'):
                                errors = { email_verify: 'not_verified', message: 'Your email address is not verified', success: false};
                                error = true;
                                break;  
                            // 3. IF User Account is not active
                            case (user.status !== 'active'):
                                errors = { status: 'inactive', message: 'It seems your account is Inactive. Please contact Admin for further assistance.', success: false};
                                error = true;
                                break;
                            default: 
                                error = false;
                        }

                        if(error){
                            respe.json(response.errors(errors,errors.message));
                        } else {

                            if(user.comparePassword(config.salt, password)){
                                                
                                user.password   = undefined;
                                let token       = jwt.sign(user, new Buffer(config.secret).toString('base64'),{expiresIn: '1 day'});

                                var logged_in_data  = {token : token, user  : user };
                                return respe.json(response.success(logged_in_data,'Member Logged-In successfully.'));

                            } else {
                                return respe.json(response.errors({},"Authentication failed. Wrong password."));
                            }
                        }
                    }
    });
};


/*****************************************
* Function to Register a hotel owner *****
******************************************/

exports.register       = (reqst, respe) => {

    if(!_.isEmpty(reqst.body)){
            
            async.waterfall([
                function (callback) {

                      let firstname                   = reqst.body.first_name;
                      let lastname                    = reqst.body.last_name;
                      let random                      = Math.floor(10 + Math.random() * 90);
                      reqst.body.user_name            = firstname.charAt(0) + lastname + random;
                      reqst.body.role                 = 'hotelowner';

                    let usersave        = new User(reqst.body);
                    usersave.save(function(err, user) {
                        callback(err, user);
                    });
                },
                function (user, callback) {
                    
                    let baseUrl     = hostPath.host(reqst),
                    //signupLink      = baseUrl + 'api/verify/' + user.emailVerificationKey; //Saved in model Pre.save()
                    signupLink      = '';
                    let result      = {'verifyUrl': signupLink};
                    /*mail.send({
                        user:user,
                        subject: 'Welcome to HotelJot!',
                        html: 'SignUp',
                        from: emailFrom,
                        to: user.email,
                        emailData : {
                           email: reqst.body.email,
                           signupLink: signupLink,
                           url: url
                        }
                    }, function(err, success){
                        if(err){ User.remove({email: reqData.email}).exec();  }
                        callback(err, user);
                    }); */
                    callback(null, result);
                }
            ],function(err, result) {

                

                if(err){
                    return respe.json(response.errors(err.errors,'Error in Registration process.'));
                }else{

                    return respe.json(response.success(result,'Thank you for signing up with HotelJot! The verification email has been sent to your email address.!'));
                }
            });
    }else{
            var errors =    { 
                                first_name:         {'message'      : 'First name is required.'},
                                last_name:          {'message'      : 'Last name is required.'},
                                contact_number:     {'message'      : 'Contact number is required.'},
                                email:              {'message'      : 'Email address is required.'},
                                password:           {'message'      : 'Password is required.'},
                            };
                return respe.json(response.errors(errors,"Registration data is required."));
        }
};


/************************************************************
* Function to verify the email address after registration ***
*************************************************************/


exports.verify = function (reqst, respe, next) {
    
    let emailVerificationKey    = reqst.params.hashkey,
    userdata                    = {
                                    email_verify: 'verified',
                                    emailVerificationKey: null,
                                    status: 'active',
                                };
    
    User.findOneAndUpdate({ emailVerificationKey: emailVerificationKey },userdata,
        { new: true, fields:{ _id: 1 } },
        function(err, result){
            if(err){
                next(err);
            }else{
                if (result) {
                    respe.redirect('/?verify=true');
                } else {
                    respe.redirect('/');
                }
            }
        }
    );
};

/**************************************************************
***************************************************************
*** Function to validate email address at forgot password  ****
***************************************************************
**************************************************************/

exports.forgotPassword = function(reqst,respe,next){

    if(!reqst.body.email) {
        var errors =    { email: {'message':'Email Address/Contact number is required.'}}
        return respe.json(response.errors(errors,"Email Address/Contact number is required."));
    }

    let email   = reqst.body.email,
    tmpEmail    = _.escapeRegExp(reqst.body.email);

    async.waterfall([
 
        function (done) {

            User.findOne({ $or:[{email : {$regex: new RegExp(`^${tmpEmail}`), $options:"im"}},{contact_number: email}]},{email_verify: 1, status: 1, user_name: 1}, function (err, user) {
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
                            errors = {name:'Authentication failed', message:'Your email address is not verified, kindly verify your email.'};
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

        function (user, done) {
            crypto.randomBytes(20, function (err, buffer) {
                let token = buffer.toString('hex');
                done(err, user, token);
            });
        },
  
        function (user, token, done) {
            User.update({_id: user._id},{ passwordReset: { token: token, timestamp: Date.now() + 86400000, status: true} },{ runValidators: true, setDefaultsOnInsert: true },function(err, result){
                    done(err, token, user, result);
                });
        },
 
        function (token, user, done) {

            let baseUrl         = hostPath.host(reqst),
            changePasswordLink  = baseUrl + "api/resetpassword/" + token;
            //url = config.SETTING.STATIC_URL_EMAILTEMP;
            respe.json(response.success(changePasswordLink ,"Mail Has been successfully sent, Please check your email address."));
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
                    respe.json(response.success(success.response ,message));
                }
            });*/
        }
    ], function (err, result) {
        if(err){
            return respe.json(response.errors(err, err.message)); 
        }
        return respe.json(response.success(result, 'success')); 
    });
};



/************************************************************************
*************************************************************************
*** Function to validate link(token) at the time of forgot password  ****
*************************************************************************
*************************************************************************/


exports.validateResetToken = (reqst, respe, next) => {
    
    User.count({ "passwordReset.token": reqst.params.token, "passwordReset.timestamp": { $gt: Date.now() }, "passwordReset.status": true } , function(err, user){
        
        if(user === 0){

            respe.redirect(`/resetpassword/${reqst.params.token}?expired=true`);    
        } else {            
            respe.redirect(`/resetpassword/${reqst.params.token}`);
        }

    });

};

/*****************************************************************
******************************************************************
*** Function to Reset password at the time of forgot password  ***
************************************************************
******************************************************************/

exports.resetPassword = function (reqst, respe, next) {

    if( !reqst.body.token )   {
        var errors =    { token: {'message':'Password reset link is invalid or has been expired.'}}
        return respe.json(response.errors(errors,"Password reset link is invalid or has been expired."));
    }

    let token = reqst.body.token;

    User.findOne(
        { "passwordReset.token": token, "passwordReset.timestamp": { $gt: Date.now() }, "passwordReset.status": true }, 
        { email: 1, password: 1, passwordReset: 1, name:1}, function(err, user){

            if(!err && user){

                user.password       = reqst.body.password;
                user.passwordReset  = { status: false };

                user.save(function(err, saved){
                    
                    if(err){
                        return next(err);
                    } else {
                        // send user a confirmation mail
                        user.password = undefined;
                        respe.json(response.success(saved,'Password has been reset successfully.') );
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
                                respe.json(response.errors(err, 'Failure sending email'));
                            }else{
                                // Remove sensitive data before return authenticated user
                                user.password = undefined;
                                respe.json(response.success(saved,'Password has been reset successfully.') );
                            }
                        });*/
                    }
                });
            } else {
                return respe.json(response.errors(err,'Password reset link is invalid or has been expired.') );
            }   
        }
    );  
};



/***********************************************************
************************************************************
*** Function to change the password from user dashboard  ***
************************************************************
************************************************************/

exports.changePassword = function (reqst, respe, next) {

    if(!reqst.body.oldpassword || !reqst.body.newpassword) {
        
        var errors =    { oldpassword: {'message':'Oldpassword and Newpassword is required.'}}
        return respe.json(response.errors(errors,"Oldpassword and Newpassword is required."));
    }
    
    let user        = new User(),
    oldpassword     = user.hashPassword(config.salt, reqst.body.oldpassword);
    let userId      = reqst.body._id;


    User.findOne({ $and: [{ _id: userId},{ password: oldpassword }]}, {first_name: 1,last_name: 1, email: 1,contact_number: 1},(err, finaluser) => {
        if(err){
            return respe.json(response.errors({},'User data not found. Wrong password.'));
        }else{

            if(!_.isNull(finaluser)){

                finaluser.password      = reqst.body.newpassword;
                finaluser.save(function(err, saveduser){

                if(err){
                    return respe.json(response.errors(err.errors,'Error in password change.'));
                }else{

                    return respe.json(response.success(saveduser,'Your password has been updated successfully.'));
                    /*mail.send({
                        subject: 'HotelJot - Password Changed Successfully',
                        html: 'ChangePassword',
                        from: config.emailsettings.EMAIL_AUTH_USER,
                        to: finaluser.email,
                        emailData : {
                           email: saveduser.email,
                           username: finaluser.username,
                           url:  config.SETTING.STATIC_URL_EMAILTEMP
                        }
                    }, function(err, success){
                        if(err){
                            respe.json(response.errors(err, 'Failure sending email'));
                        }else{
                            respe.json(
                                response.success({"passwordChange":true} ,'Your password has been updated successfully')
                            );
                        }
                    });*/
                }
              });
            }else{
                return respe.json(response.errors({},'Your current password is incorrect!'));
            }
        }
    });
};
/************************************************************
*************************************************************
******* Function to edit profile from user dashboard  *******
*************************************************************
*************************************************************/


exports.editProfile = function (reqst, respe, next){

    var userData        = reqst.body;

    if(!userData._id){
        var errors =    { _id: {'message':'user id is required.'}}
        return respe.json(response.errors(errors,"user id is required."));
    }
  
    User.findOneAndUpdate(
        { _id: userData._id, "status": 'active' }, userData,
        { new: true, runValidators: true, setDefaultsOnInsert: true, context:'query', fields:{ _id: 1, first_name: 1, last_name: 1,email: 1} },
        function(err, userdata){
            if( err ){
                next(err);
            } else {
                if(!_.isNull(userdata)){
                    respe.json(response.success(userdata ,'Profile has been updated'));  
                }else{
                    respe.json(response.errors({},'user details not found'));
                }
            }   
        }
    );
}

