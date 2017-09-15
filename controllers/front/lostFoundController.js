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

    if(reqst.body){

        var LostFoundsave       = new LostFound(reqst.body);
        LostFoundsave.save(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Lost & Found Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Lost & Found Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Lost & Found data is required.'}}
        return respe.json(response.errors(errors,"Error in Lost & Found data."));
    }
};

/***************************************************
**** Function to Update Existing LostFound ****
***************************************************/
                                            
exports.updateLostFound = (reqst, respe) => {

    var LostFoundid         	= 	reqst.body._id;

    if(!LostFoundid){
        var errors =    { _id: {'message':'Lost & Found id is required.'}}
        return respe.json(response.errors(errors,"Error in Lost & Found data."));
    }else{
        
        LostFound.findByIdAndUpdate(LostFoundid,{$set:reqst.body}, {new: true, runValidators: true}, function(err, result) {
            if(result){
               return  respe.json(response.success(result,'Lost & Found Updated successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Lost & Found update."));
            }
        });
    }
};

/***************************************************
**** Function to Delete Existing LostFound ****
****************************************************/

exports.deleteLostFound = (reqst, respe) => {

    var LostFoundid         	=         reqst.query._id;
	if(!LostFoundid){
        var errors =    { _id: {'message':'Lost & Found id is required.'}}
       return  respe.json(response.errors(errors,"Error in Lost & Found data."));
    }else{
        LostFound.findByIdAndRemove(LostFoundid, function(err, result) {
    		if(result){
                return respe.json(response.success(result,'Lost & Found Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Lost & Found Deletion."));
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
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        LostFound.find({hotel_id: hotel_id}, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Lost & Found Listing."));
            }
        });
    }
   
 };

