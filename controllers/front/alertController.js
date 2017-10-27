'use strict';

const    express            = require('express'),
         app                = express(),
         path               = require('path'),
         crypto             = require('crypto'),
         mongoose           = require('mongoose'),
          _                 = require('lodash'),
         bodyParser         = require('body-parser'),
         AlertDB            = require(path.resolve('models/Alerts')),
         response           = require(path.resolve('./config/lib/response')),
         
         config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
         ObjectId           = mongoose.Types.ObjectId;         





/**************************************
*** Function to add new MeetingRoom ***
***************************************/

exports.addAlert = (reqst, respe) => {

    if(reqst.body){
       
        var alertSave    = new AlertDB(reqst.body);
        alertSave.save(function (err, alertdata) {
            if(alertdata){   

                return respe.json(response.success(alertdata,'Alert Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in alert saved.'));
            }
        });
    } else {
        var errors =    { _id: {'message':'Alert data is required.'}}
        return respe.json(response.errors(errors,"Error in alert data."));
    }
};



/******************************************
** Function to list all Contact ***********
*******************************************/

exports.listAlerts = (reqst, respe) => {
    var uid                =   reqst.query.user_id;
        AlertDB.find(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Alert Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Alert Listing."));
            }
        });    
};



/******************************************
** Function to list all Contact ***********
*******************************************/

exports.updateAlerts = (reqst, respe) => {      


        var alertId            =   reqst.body._id;
        var uid                =   reqst.body.user_id;

        if(!alertId){
            var errors =    { _id: {'message':'Alert id is required.'}}
            return respe.json(response.errors(errors,"Error in Alert data."));
        }else{

            AlertDB.update(
               { _id: alertId },
               { $push: { read_status: uid } } , function(err, result) {
                if(result){
                    return respe.json(response.success(result,'Alert Deleted successfully.'));
                }else{
                    return respe.json(response.errors(err.errors,"Error in Alert Data."));
                }
            });
        }  
};




/******************************************
** Function to list all Contact ***********
*******************************************/

exports.listNotification = (reqst, respe) => {
    var uid                =   reqst.query.user_id;
        AlertDB.find( { read_status: { $nin: [uid] } },function (err, result) {
            if(result){
                return respe.json(response.success(result,'Alert Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Alert Listing."));
            }
        });    
};