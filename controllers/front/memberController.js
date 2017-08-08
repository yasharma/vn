'use strict';

const    express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Member      = require(path.resolve('models/Member')),
         response    = require(path.resolve('./config/lib/response')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         



/********************************
*** Function to add new Member ***
*********************************/
   
exports.addMember = (reqst, respe) => {

    var Membersave       = new Member(reqst.body);
    Membersave.save(function (err, result) {
        if(result){
            respe.json(response.success(result,'Member Added Successfully.'));
        }else{
            respe.json(response.errors(err.errors,'Error in Member Saved.'));
        }
    });
};

/******************************************
**** Function to Update Existing Member ****
*******************************************/
exports.updateMember =  (reqst, respe) => {

    var Memberid         	= reqst.query.member_id;
    if(!Memberid){
        return respe.json(response.errors({},'Member Id Is Required.'));
    }else{
        
        Member.findByIdAndUpdate(Memberid,{$set:reqst.query}, {new: true}, function(err, result) {
            if(result){
                respe.json(response.success(result,'Member Updated successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Member update."));
            }
        });
    }
};

/******************************************
**** Function to Delete Existing Member ****
*******************************************/

exports.deleteMember = (reqst, respe) => {

    var Memberid         	= reqst.query.member_id;
    if(!Memberid){
        return respe.json(response.errors({},'Member Id Is Required.'));
    }else{
        Member.findByIdAndRemove(Memberid, function(err, result) {
            if(result){
                respe.json(response.success(result,'Member Deleted successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Member Deletion."));
            }
        });
    }
};

/********************************
** Function to list all Members **
*********************************/

exports.listMember = (reqst, respe) => {

    var user_name         = reqst.query.user_name;
    var hotel_id          = reqst.query.hotel_id;
    var filter            = reqst.query.filter;
    
    
    if(filter == 1){
       Member.find({'user_name' : new RegExp(user_name, 'i'),hotel_id:hotel_id}, function (err, result) {
            if(result.length > 0){
                respe.json(response.success(result,'Member Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Member Listing."));
            }
        });
    }else{
        Member.find({hotel_id:hotel_id}, function (err, result) {
            if(result.length > 0){
                respe.json(response.success(result,'Member Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Member Listing."));
            }
        });
    }
};