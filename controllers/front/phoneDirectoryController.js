'use strict';

const    express            =   require('express'),
         app                =   express(),
         path               =   require('path'),
         mongoose           =   require('mongoose'),
         bodyParser         =   require('body-parser'),
         PhoneDirectory     =   require(path.resolve('models/PhoneDirectory')),
         response           =   require(path.resolve('./config/lib/response')),
         ObjectId           =   mongoose.Types.ObjectId;



/*****************************************
*** Function to add new PhoneDirectory ***
******************************************/
   
exports.addPhoneDirectory = (reqst, respe) => {

    if(reqst.body){
        var PhoneDirectorysave       = new PhoneDirectory(reqst.body);
        PhoneDirectorysave.save(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Contact has been Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Contact Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Contact data is required.'}}
        return respe.json(response.errors(errors,"Error in Contact data."));
    }
};

/***************************************************
**** Function to Update Existing PhoneDirectory ****
****************************************************/
                                            
exports.updatePhoneDirectory = (reqst, respe) => {

    var PhoneDirectoryid         	= 	reqst.body._id;

    if(!PhoneDirectoryid){
        var errors =    { _id: {'message':'Contact id is required.'}}
        return respe.json(response.errors(errors,"Error in Contact data."));
    }else{
        PhoneDirectory.findByIdAndUpdate(PhoneDirectoryid,{$set:reqst.body}, {new: true, runValidators: true, context: 'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Contact Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Contact update."));
            }
        });
    }
};


/***************************************************
**** Function to Delete Existing Contact ***********
****************************************************/

exports.deletePhoneDirectory = (reqst, respe) => {

    var PhoneDirectoryid         	=         reqst.query._id;
	if(!PhoneDirectoryid){
        var errors =    { _id: {'message':'Contact id is required.'}}
        return respe.json(response.errors(errors,"Error in Contact data."));
    }else{
        PhoneDirectory.findByIdAndRemove(PhoneDirectoryid, function(err, result) {
    		if(result){
                return respe.json(response.success(result,'Contact Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Contact Deletion."));
            }
        });
    }
};

/******************************************
** Function to list all Contact ***********
*******************************************/

exports.listPhoneDirectory = (reqst, respe) => {
   
   var hotel_id             =         reqst.query.hotel_id;
   
    if(!hotel_id){
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        PhoneDirectory.find({hotel_id: hotel_id}, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Contact Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Contact Listing."));
            }
        });
    }
};

