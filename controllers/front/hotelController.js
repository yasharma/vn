'use strict';

const    express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Hotel       = require(path.resolve('models/Hotel')),
         Jot         = require(path.resolve('models/Jot')),
         Department  = require(path.resolve('models/Department')),
         HotelShift  = require(path.resolve('models/HotelShift')),
         response    = require(path.resolve('./config/lib/response')),
         ObjectId    = mongoose.Types.ObjectId;




/************************************************
*** Function to get New notification for Jots ***
*************************************************/
exports.getJotNotification = (reqst, respe) => {

    var Hotel_id        = reqst.query.hotel_id;
  
    if(!Hotel_id){
        var errors      =    { hotel_id: {'message':'Hotel id is required.'}}
        respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        Jot.aggregate([
                        {$match:    {'hotel_id': ObjectId(Hotel_id),'status': 'open'}},
                        {$group :   {
                                        _id         : "$jot_type",
                                        count       : {  $sum: 1 } 
                                    }
                        }
                        ], function (err, result) {
            if(result){
                respe.json(response.success(result,'Notification Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Jot Listing."));
            }
        });
    }
};



exports.getHotelStatus = (reqst, respe) => {

    var hotel_id                        = reqst.query.hotel_id;

    Hotel.aggregate([
                        {
                            $match:    
                                {
                                    '_id': ObjectId(hotel_id)
                                }
                        },
                        {
                          $lookup:
                            {
                              from: "departments",
                              localField: "_id",
                              foreignField: "hotel_id",
                              as: "departments"
                            }
                       },
                       {
                          $lookup:
                            {
                              from: "users",
                              localField: "_id",
                              foreignField: "hotel_id",
                              as: "members"
                            }
                       },

                        ], function (err, result) {
            if(result){
                respe.json(response.success(result,'Notification Data Found.'));
            }else{
                respe.json(response.errors(err,"Error In Jot Listing."));
            }
        });
};

/********************************
*** Function to add new hotel ***
*********************************/
   
exports.addHotel = (reqst, respe) => {

    if(reqst.body){

        var Hotelsave       =       new Hotel(reqst.body);
        Hotelsave.save(function (err, result) {

            if(result){
                return respe.json(response.success(result,'Hotel has been successfully added.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Hotel Saved.'));
            }
        });
    }else{
        var errors =    { hotel_id: {'message':'Hotel data are required.'}}
        respe.json(response.errors(errors,"Error in hotel data."));
    }
};

/******************************************
**** Function to Update Existing Hotel ****
*******************************************/
                                            
exports.updateHotel = (reqst, respe) => {

    var Hotelid         	= 	reqst.body.hotel_id;

    if(!Hotelid){
        var errors =    { Hotelid: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        
        Hotel.findByIdAndUpdate(Hotelid,{$set:reqst.body}, {new: true, runValidators: true}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Hotel Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Hotel update."));
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
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        Hotel.findByIdAndRemove(Hotelid, function(err, result) {
    		if(result){
                respe.json(response.success(result,'Hotel Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Hotel Deletion."));
            }
        });
    }
};

/********************************
** Function to list all hotels **
*********************************/

exports.listHotel = (reqst, respe) => {

    var user_id         = reqst.query.user_id;
    var hotel_id 		= reqst.query.hotel_id;

    if(!user_id){
        var errors =    { user_id: {'message':'User id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        Hotel.find({
            $or :[{user_id: ObjectId(user_id)}, { _id: ObjectId(hotel_id)}]
        }, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Hotels Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Hotels Listing."));
            }
        });
    }
 };



/*************************************************
** Function to get detail of a particular hotel **
**************************************************/


 exports.HotelDetail = (reqst, respe) => {

    var hotel_id        = reqst.query.hotel_id;

    if(!hotel_id){
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
       return respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
        Hotel.findOne({'_id': ObjectId(hotel_id)}, function (err, result) {
            if(result){
                return respe.json(response.success(result,'Hotel Detail Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Hotel Detail."));
            }
        });
    }
 };


/****************************************************************
*** Function to add Departments at the time of Hotel Setup-ed ***
*****************************************************************/


exports.configureDepartments = (reqst, respe) => {

    
    var departmentdata                  = reqst.body.departments_list;
    var hotel_id                        = reqst.body.hotel_id;

    if(reqst.body){

        Department.findOne({hotel_id: hotel_id}, function(err, departmentData){

            if(departmentData){  

                Department.remove({hotel_id: hotel_id}, function(err, deletedData) {
                    
                    if(deletedData){

                        Department.insertMany(departmentdata, function (err, departmentadded) {
                        
                            if(departmentadded){
                                return respe.json(response.success(departmentadded,'Departments Added Successfully.'));
                            }else{
                                return respe.json(response.errors(err,'Error in Department Saved.'));
                            }
                        });
                    }
                });
            }else{

                Department.insertMany(departmentdata, function (err, resultset) {
                        
                    if(resultset){
                        return respe.json(response.success(resultset,'Departments Added Successfully.'));
                    }else{
                        return respe.json(response.errors(err,'Error in Department Saved.'));
                    }
                });
            }
        });
    }else{
        var errors =    { _id: {'message':'Department data is required.'}}
        return respe.json(response.errors(errors,"Error in Department data."));
    }
};


/*******************************************************

/*********************************************************
*** Function to add new Department After setuped hotel ***
**********************************************************/
   
exports.addDepartment = (reqst, respe) => {

    var Departmentsave       = new Department(reqst.body);
	Departmentsave.save(function (err, result) {
      
        if(result){
            return respe.json(response.success(result,'Department Added Successfully.'));
        }else{
            return respe.json(response.errors(err,'Error in Department Saved.'));
        }
    });
};

/******************************************
**** Function to Update Existing Department ****
*******************************************/
                                            
exports.updateDepartment = (reqst, respe) => {

    var department_id         	= 	reqst.body._id;
    if(!department_id){
       var errors =    { _id: {'message':'Department id is required.'}}
        return respe.json(response.errors(errors,"Error in Department data."));
    }else{
        
        Department.findByIdAndUpdate(department_id,{$set:reqst.body}, {new: true, runValidators: true, context: 'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Department Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Department update."));
            }
        });
    }
};

/***********************************************
**** Function to Delete Existing Department ****
************************************************/

exports.deleteDepartment = (reqst, respe) => {

    var Departmentid         	= reqst.query._id;

    if(!Departmentid){
        var errors =    { _id: {'message':'Department id is required.'}}
        return respe.json(response.errors(errors,"Error in Department data."));
    }else{
        Department.findByIdAndRemove(Departmentid, function(err, result) {
    		if(result){
                return respe.json(response.success(result,'Department Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Department Deletion."));
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
            var errors =    { hotel_id: {'message':'Filter data is required.'}}
            return respe.json(response.errors(errors,"Error in Department data."));
        }else{
           Department.find({'department_name' : new RegExp(department_name, 'i'),hotel_id : hotel_id}, function (err, result) {
                if(result.length > 0){
                    return respe.json(response.success(result,'Department Data Found.'));
                }else{
                    return respe.json(response.errors(err,"Error In Department Listing."));
                }
            });
        }
    }else{
        Department.find({hotel_id : hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Department Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Department Listing."));
            }
        });
    }
};


/**************************************
*** Function to add new hotel shift ***
***************************************/
   
exports.addHotelShift = (reqst, respe) => {

    var Hotelshiftsave       = new HotelShift(reqst.body);
    Hotelshiftsave.save(function (err, result) {
        if(result){
            return respe.json(response.success(result,'Hotel Shift has been successfully added.'));
        }else{
            return respe.json(response.errors(err.errors,'Error in Hotel Shift Saved.'));
        }
    });
};

/******************************************
**** Function to Update Hotel Shift *******
*******************************************/
                                            
exports.updateHotelShift = (reqst, respe) => {

    var Shiftid           =   reqst.body._id;
    if(!Shiftid){
        var errors =    { _id: {'message':'Shift id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel Shift data."));
    }else{
        
        HotelShift.findByIdAndUpdate(Shiftid,{$set:reqst.body}, {new: true, runValidators: true, context: 'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Shift Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Shift update."));
            }
        });
    }
};

/***********************************************
******* Function to Delete Hotel Shift *********
************************************************/

exports.deleteHotelShift = (reqst, respe) => {

    var Shiftid            = reqst.query._id;

    if(!Shiftid){
        var errors =    { _id: {'message':'Shift id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel Shift data."));
    }else{
        HotelShift.findByIdAndRemove(Shiftid, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Shift Deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Shift Deletion."));
            }
        });
    }
};


/***************************************
*** Function to list Hotel Shift *******
****************************************/

exports.listHotelShift = (reqst, respe) => {

    var hotel_id    = reqst.query.hotel_id;
    
    if(!hotel_id){
        var errors =    { hotel_id: {'message':'Hotel id is required.'}}
        return respe.json(response.errors(errors,"Error in Hotel Shift data."));
    }else{
        HotelShift.find({hotel_id : hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Hotel shift Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Hotel-Shift Listing."));
            }
        });
    }
};
