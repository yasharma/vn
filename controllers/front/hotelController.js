'use strict';

const    express                = require('express'),
         app                    = express(),
         path                   = require('path'),
         mongoose               = require('mongoose'),
         bodyParser             = require('body-parser'),
         _                      = require('lodash'),
         ASYNC                  = require('async'),
         Hotel                  = require(path.resolve('models/Hotel')),
         Jot                    = require(path.resolve('models/Jot')),
         User                   = require(path.resolve('models/User')),
         Department             = require(path.resolve('models/Department')),
         Employee               = require(path.resolve('models/Employee')),
         DepartmentPosition     = require(path.resolve('models/DepartmentPosition')),
         HotelShift             = require(path.resolve('models/HotelShift')),
         response               = require(path.resolve('./config/lib/response')),
         ObjectId               = mongoose.Types.ObjectId;




/************************************************
*** Function to get New notification for Jots ***
*************************************************/
/*exports.getJotNotification = (reqst, respe) => {

    var hotel_id         = reqst.query.hotel_id;
    var contact_number   = reqst.query.contact_number;


    var userRole         = '';
    
    if(!hotel_id){
        var errors      =    { hotel_id: {'message':'Hotel id is required.'}}
        respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
           
            User.findOne({contact_number: contact_number}, {role: 1}, function(err, userresult){
                    
                if(userresult){

                    //console.log(userresult);
                    //console.log('--------------');
            
                    userRole = userresult.role;
                    var match = '';
                                    
                    if(userRole === 'staff'){

                        Employee.findOne({contact_number: contact_number,hotel_id: ObjectId(hotel_id) },{user_name: 1, contact_number: 1}, function (err, employee){
                            
                            if(employee){

                                var loggedinuser        = employee.user_name;
                                match = {
                                            'hotel_id': ObjectId(hotel_id),
                                            'status': 'open',
                                            "assigned_members" :   { $in :  [loggedinuser] }
                                        };
                                Jot.aggregate([
                                            {$match:    match},
                                            {$group :   {
                                                            _id         : "$jot_type",
                                                            count       : {  $sum: 1 } 
                                                        }
                                            }
                                            ], function (err, jotresult) {
                                        if(jotresult){

                                            respe.json(response.success(jotresult,'Notification Data Found.'));
                                        }else{
                                            respe.json(response.errors(err,"Error In Jot Listing."));
                                        }
                                    });        
                                }
                        });   
                    
                    }else{
                        match = {
                                            'hotel_id': ObjectId(hotel_id),
                                            'status': 'open',
                                        };
                        Jot.aggregate([
                            {$match:    match},
                            {$group :   {
                                            _id         : "$jot_type",
                                            count       : {  $sum: 1 } 
                                        }
                            }
                            ], function (err, jotresult) {
                            if(jotresult){

                                respe.json(response.success(jotresult,'Notification Data Found.'));
                            }else{
                                respe.json(response.errors(err,"Error In Jot Listing."));
                            }
                        });                
                            
                    }
                  
                }
        });
    }
};
*/

exports.getJotNotification = (reqst, respe) => {

    var hotel_id         = reqst.query.hotel_id;
    var contact_number   = reqst.query.contact_number;


    var userRole         = '';
    
    if(!hotel_id){
        var errors      =    { hotel_id: {'message':'Hotel id is required.'}}
        respe.json(response.errors(errors,"Error in Hotel data."));
    }else{
           
        ASYNC.waterfall([
            
                function userDetails(callback) {
                        
                    User.findOne({contact_number: contact_number}, {role: 1}, function(err, userresult){
                    
                        if(userresult){
                             callback(null, userresult);
                        }else{
                            callback(err, null);
                        }
                    });    
                },
                function saveDocument(userRole, callback) {

                    if(!_.isEmpty(userRole)){
                       
                        userRole = userRole.role;
                        var matchcondition = '';
                                        
                        if(userRole === 'staff'){
                            Employee.findOne({contact_number: contact_number,hotel_id: ObjectId(hotel_id) },{user_name: 1, contact_number: 1}, function (err, employee){
                            
                                if(employee){

                                    var loggedinuser        = employee.user_name;
                                    matchcondition = {
                                                'hotel_id': ObjectId(hotel_id),
                                                'status': 'open',
                                                "assigned_members" :   { $in :  [loggedinuser] }
                                            };
                                    callback(null, matchcondition);        
                                }else{
                                    callback(err, null);
                                }
                            });   
                        }else{
                            matchcondition = {
                                            'hotel_id': ObjectId(hotel_id),
                                            'status': 'open',
                                        };
                            callback(null, matchcondition);
                        }

                    }else{
                        callback("Something went wrong with user details",null);
                    }
                },
                function getalljot(jotcondition, callback) {

                    if(!_.isEmpty(jotcondition)){
                        Jot.aggregate([
                                {$match:    jotcondition},
                                {$group :   {
                                                _id         : "$jot_type",
                                                count       : {  $sum: 1 } 
                                            }
                                }
                                ], function (err, jotresult) {
                                if(jotresult){

                                    callback(null, jotresult);
                                }else{
                                    callback(err, null);
                                }
                            });
                    }
                }
            ], function (err, result) {
                if(err){
                    return respe.json(response.errors(err, err.message)); 
                }
                return respe.json(response.success(result, 'Jot data found successfully.')); 
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
                              from: "employees",
                              localField: "_id",
                              foreignField: "hotel_id",
                              as: "members"
                            }
                        },
                        {
                          $lookup:
                            {
                              from: "meetingrooms",
                              localField: "_id",
                              foreignField: "hotel_id",
                              as: "rooms"
                            }
                        }], function (err, result) {
            
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

    if(!_.isEmpty(reqst.body)){

        var Hotelsave       =       new Hotel(reqst.body);
        Hotelsave.save(function (err, result) {

            if(result){

                var newhotel            = result._id.toString();

                if(!_.isNull(reqst.body.user_id)){

                    var userid = reqst.body.user_id;

                    User.findOne({_id: ObjectId(userid)},(err, userdata) => {
                        if(err){
                             next(err);
                        }else{
                            if (!_.isNull(userdata)) {

                                let userhotelarr    = [];
                                userhotelarr        = userdata.hotel_id;
                                userhotelarr.push(newhotel);
                                
                                User.findByIdAndUpdate({_id: ObjectId(userid)},{hotel_id: userhotelarr},{new: true}, function(err, member){
                                    return respe.json(response.success(result,'User & Hotel have been update successfully'));
                                });
                            } else {
                                return respe.json(response.success({},"User's detail not found."));
                            }
                        }
                     });
                }else{
                    return respe.json(response.success(result,'Hotel has been successfully added.'));
                }
                
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
        
        Hotel.findByIdAndUpdate(ObjectId(Hotelid),{$set:reqst.body}, {new: true, runValidators: true}, function(err, result) {

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
    
    if(_.isEmpty(user_id)){
        var errors =    { user_id: {'message':'User id is required.'}}
        return respe.json(response.errors(errors,"User id is required."));
    }else{

        User.findOne({_id: ObjectId(user_id)},{hotel_id: 1}, function(err, userdata){
            
            if(!_.isNull(userdata)){
                
                Hotel.find({_id: {$in: userdata.hotel_id}}, function(err, hoteldata){
                    if(!_.isNull(hoteldata)){
                        respe.json(response.success(hoteldata,'Hotel data found successfully.'));
                    }else{
                        return respe.json(response.errors(err.errors,"Hotel data not found."));
                    }
                });
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
            return respe.json(response.errors(err.errors,'Error in Department Saved.'));
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
                return respe.json(response.errors(err.errors,"Error in Department Deletion."));
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
            if(result && result.length > 0){
                return respe.json(response.success(result,'Department Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Department Listing."));
            }
        });
    }
};



/*****************************************************************
*** Function to add new DepartmentPosition After setuped hotel ***
******************************************************************/
   
exports.addDepartmentPosition = (reqst, respe) => {

    var Departmentpositionsave       = new DepartmentPosition(reqst.body);
    Departmentpositionsave.save(function (err, result) {
      
        if(result){
            return respe.json(response.success(result,'Position Added Successfully.'));
        }else{
            return respe.json(response.errors(err.errors,'Error in Position Saved.'));
        }
    });
};

/******************************************
**** Function to Update Existing Department ****
*******************************************/
                                            
exports.updateDepartmentPosition = (reqst, respe) => {

    var position_id           =   reqst.body._id;
    if(!position_id){
       var errors =    { _id: {'message':'Position id is required.'}}
        return respe.json(response.errors(errors,"Position id is required."));
    }else{
        
        DepartmentPosition.findByIdAndUpdate(position_id,{$set:reqst.body}, {new: true, runValidators: true, context: 'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Position Updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Position update."));
            }
        });
    }
};

/********************************************************
**** Function to Delete Existing Department Position ****
*********************************************************/

exports.deleteDepartmentPosition = (reqst, respe) => {

    var positionid            = reqst.query._id;

    if(!positionid){
        var errors =    { _id: {'message':'Position id is required.'}}
        return respe.json(response.errors(errors,"Error in Position data."));
    }else{
        DepartmentPosition.findByIdAndRemove(positionid, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Position Deleted successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Position Deletion."));
            }
        });
    }
};


/*************************************************
*** Function to list all Departments Positions ***
**************************************************/

exports.listDepartmentPosition = (reqst, respe) => {

    var hotel_id                    = reqst.query.hotel_id;
    var department_id               = reqst.query.department_id;
    
    DepartmentPosition.find({hotel_id : hotel_id}, function (err, result) {
        if(result){
            return respe.json(response.success(result,'Position Data Found.'));
        }else{
            return respe.json(response.errors(err.errors,"Error In Position Listing."));
        }
    });
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