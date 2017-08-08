'use strict';

const    express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Hotel       = require(path.resolve('models/Hotel')),
         Department  = require(path.resolve('models/Department')),
         response    = require(path.resolve('./config/lib/response')),
         ObjectId    = mongoose.Types.ObjectId;


/********************************
*** Function to add new hotel ***
*********************************/
   
exports.addHotel = (reqst, respe) => {

    var Hotelsave       = new Hotel(reqst.body);
    Hotelsave.save(function (err, result) {
        if(result){
            respe.json(response.success(result,'Hotel has been successfully added.'));
        }else{
            respe.json(response.errors(err.errors,'Error in Hotel Saved.'));
        }
    });
};

/******************************************
**** Function to Update Existing Hotel ****
*******************************************/
                                            
exports.updateHotel = (reqst, respe) => {

    var Hotelid         	= 	reqst.query.hotel_id;
    if(!Hotelid){
        return respe.json(response.errors({},'Hotel Id Is Required.'));
    }else{
        
        Hotel.findByIdAndUpdate(Hotelid,{$set:reqst.query}, {new: true}, function(err, result) {
            if(result){
                respe.json(response.success(result,'Hotel Updated successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Hotel update."));
            }
        });
    }
};

/******************************************
**** Function to Delete Existing Hotel ****
*******************************************/

exports.deleteHotel = (reqst, respe) => {

    var Hotelid         	= reqst.query.hotel_id;
	if(!Hotelid){
        return respe.json(response.errors({},'Hotel Id Is Required.'));
    }else{
        Hotel.findByIdAndRemove(Hotelid, function(err, result) {
    		if(result){
                respe.json(response.success(result,'Hotel Deleted successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Hotel Deletion."));
            }
        });
    }
};

/********************************
** Function to list all hotels **
*********************************/

exports.listHotel = (reqst, respe) => {

    var user_id 		= reqst.query.user_id;
    if(!user_id){
        return respe.json(response.errors({},'User Id is Required.'));
    }else{
        Hotel.find({user_id: ObjectId(user_id)}, function (err, result) {
            if(result){
                respe.json(response.success(result,'Hotels Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Hotels Listing."));
            }
        });
    }
 };

/************************************
*** Function to add new Department***
*************************************/
   
exports.addDepartment = (reqst, respe) => {

    var Departmentsave       = new Department(reqst.body);

	Departmentsave.save(function (err, result) {
      
        if(result){
            respe.json(response.success(result,'Department Added Successfully.'));
        }else{
            respe.json(response.errors(err.errors,'Error in Department Saved.'));
        }
    });
};

/******************************************
**** Function to Update Existing Department ****
*******************************************/
                                            
exports.updateDepartment = (reqst, respe) => {

    var department_id         	= 	reqst.query.department_id;
    if(!department_id){
        return respe.json(response.errors({},'Department Id Is Required.'));
    }else{
        
        Department.findByIdAndUpdate(department_id,{$set:reqst.query}, {new: true}, function(err, result) {
            if(result){
                respe.json(response.success(result,'Department Updated successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Department update."));
            }
        });
    }
};

/***********************************************
**** Function to Delete Existing Department ****
************************************************/

exports.deleteDepartment = (reqst, respe) => {

    var department_id         	= reqst.query.department_id;

    if(!department_id){
        return respe.json(response.errors({},'Department Id Is Required.'));
    }else{
        Department.findByIdAndRemove(Departmentid, function(err, result) {
    		if(result){
                respe.json(response.success(result,'Department Deleted successfully.'));
            }else{
                respe.json(response.errors(err,"Error in Department Deletion."));
            }
        });
    }
};
/***************************************
*** Function to list all Departments ***
****************************************/

exports.listDepartment = (reqst, respe) => {

    var department_name        = reqst.query.department_name;
    var hotel_id 		       = reqst.query.hotel_id;
    var filter                 = reqst.query.filter;

    if(filter == 1){

        if(!hotel_id || !department_name){
            return respe.json(response.errors({},'Filter data is required.'));
        }else{
           Department.find({'department_name' : new RegExp(department_name, 'i'),hotel_id : hotel_id}, function (err, result) {
                if(result.length > 0){
                    respe.json(response.success(result,'Department Data Found.'));
                }else{
                    respe.json(response.errors(err,"Error In Department Listing."));
                }
            });
        }
    }else{
        Department.find({hotel_id : hotel_id}, function (err, result) {
            if(result.length > 0){
                respe.json(response.success(result,'Department Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Department Listing."));
            }
        });
    }
 
};
