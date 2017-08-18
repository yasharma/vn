'use strict';

const    express            =   require('express'),
         app                =   express(),
         path               =   require('path'),
         mongoose           =   require('mongoose'),
         bodyParser         =   require('body-parser'),
         formidable         =   require('formidable'),
         fs                 =   require('fs'),
         LostFound          =   require(path.resolve('models/LostFound')),
         response           =   require(path.resolve('./config/lib/response')),
         ObjectId           =   mongoose.Types.ObjectId;



/************************************
*** Function to add new LostFound ***
************************************/
   
exports.addLostFound = (reqst, respe) => {

    var LostFoundsave       = new LostFound(reqst.body);
    LostFoundsave.save(function (err, result) {
        if(result){
            respe.json(response.success(result,'Lost & Found Added Successfully.'));
        }else{
            respe.json(response.errors(err.errors,'Error in Lost & Found Saved.'));
        }
    });
};

/***************************************************
**** Function to Update Existing LostFound ****
***************************************************/
                                            
exports.updateLostFound = (reqst, respe) => {

    var LostFoundid         	= 	reqst.query.LostFound_id;

    if(!LostFoundid){
        return respe.json(response.errors({},'Lost & Found Id Is Required.'));
    }else{
        
        LostFound.findByIdAndUpdate(LostFoundid,{$set:reqst.query}, {new: true, runValidators: true}, function(err, result) {
            if(result){
                respe.json(response.success(result,'Lost & Found Updated successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Lost & Found update."));
            }
        });
    }
};

/***************************************************
**** Function to Delete Existing LostFound ****
****************************************************/

exports.deleteLostFound = (reqst, respe) => {

    var LostFoundid         	=         reqst.query.LostFound_id;
	if(!LostFoundid){
        return respe.json(response.errors({},'Lost & Found Id Is Required.'));
    }else{
        LostFound.findByIdAndRemove(LostFoundid, function(err, result) {
    		if(result){
                respe.json(response.success(result,'Lost & Found Deleted successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Lost & Found Deletion."));
            }
        });
    }
};

/******************************************
** Function to list all LostFounds ***
*******************************************/

exports.listLostFound = (reqst, respe) => {
   
   var hotel_id          =         reqst.query.hotel_id;
   
    if(!hotel_id){
        return respe.json(response.errors({},'Hotel Id Is Required.'));
    }else{
        LostFound.find({hotel_id: hotel_id}, function (err, result) {
            if(result){
                respe.json(response.success(result,'Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Lost & Found Listing."));
            }
        });
    }
   
 };

