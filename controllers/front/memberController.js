'use strict';

const    express            = require('express'),
         app                = express(),
         path               = require('path'),
         mongoose           = require('mongoose'),
          _                 = require('lodash'),
         bodyParser         = require('body-parser'),
         User               = require(path.resolve('models/User')),
         MemberSchedule     = require(path.resolve('models/MemberSchedule')),
         response           = require(path.resolve('./config/lib/response')),
         config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
         ObjectId           = mongoose.Types.ObjectId;         



/****************************************************************
*** Function to add Bulk Members at the time of Hotel Set-up ****
*****************************************************************/
   
exports.configureHotelMember = (reqst, respe) => {

    if(reqst.body.member_list){

        var memberdata                      = reqst.body.member_list;
        var UpdatedData                     =  [];

        /* manipulate user data beforesaving as  bulk record */
        _.map(memberdata, function(member){
            
            /* Create password for user */

            let user                    =   new User();
            let hashpassword            =   user.hashPassword(config.salt, member.password);

            /* Create username for user */

            let firstname               = member.first_name;
            let lastname                = member.last_name;
            let random                  = Math.floor(10 + Math.random() * 90);
            let userName                = firstname.charAt(0) + lastname + random;
            
            UpdatedData.push({

                'first_name'    : member.first_name,
                'last_name'     : member.last_name,
                'email'         : member.email,
                'password'      : hashpassword,
                'user_name'     : userName,
                'contact_number': member.contact_number,
                'department'    : member.department,
                'hotel_id'      : member.hotel_id,
            });

        });
        
        User.insertMany(UpdatedData, function (err, result) {
        
            if(result){
                return respe.json(response.success(result,'Members Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in User Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Member data is required.'}}
        return respe.json(response.errors(errors,"Error in Member data."));
    }
    
};


/*********************************
*** Function to add new Member ***
**********************************/

exports.addMember = (reqst, respe) => {

    if(reqst.body){

        var Membersave          = new User(reqst.body);
        Membersave.save(function (err, result) {
            if(result){
                return respe.json(response.success(result,'Member Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Member Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Member data is required.'}}
        return respe.json(response.errors(errors,"Error in Member data."));
    }
};


/*******************************************
**** Function to Update Existing Member ****
********************************************/


exports.updateMember =  (reqst, respe) => {
 
    var Memberid         	= reqst.body._id;

    if(!Memberid){
        var errors =    { _id: {'message':'Member id is required.'}}
        return respe.json(response.errors(errors,"Error in Member Update."));
    }else{
        
        User.findByIdAndUpdate(Memberid,{$set:reqst.body}, {new: true, runValidators: true, context:'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Member updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Member update."));
            }
        });
    }
};

/******************************************
**** Function to Delete Existing Member ***
*******************************************/

exports.deleteMember = (reqst, respe) => {

    var Memberid         	= reqst.query._id;
    if(!Memberid){

        var errors =    { _id: {'message':'Member id is required.'}}
        return respe.json(response.errors(errors,"Error in Member Deletion."));

    }else{
        User.findByIdAndRemove(Memberid, function(err, result) {

            if(result){
                return respe.json(response.success(result,'Member deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Member Deletion."));
            }
            
        });
    }
};

/*********************************
** Function to list all Members **
**********************************/

exports.listMember = (reqst, respe) => {

    var user_name         = reqst.query.user_name;
    var hotel_id          = reqst.query.hotel_id;
    var filter            = reqst.query.filter;
    
    
    if(filter == 1){
       User.find({'user_name' : new RegExp(user_name, 'i'),hotel_id:hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Member Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Member Listing."));
            }
        });
    }else{
        User.find({hotel_id:hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Member Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Member Listing."));
            }
        });
    }
};

/****************************************
**** Function to Add Member Schedule ****
*****************************************/
exports.addSchedule = (reqst, respe) => {

    var MemberSchedulesave          = new MemberSchedule(reqst.body);
    var hotel_id                    = reqst.body.hotel_id;
    var user_id                     = reqst.body.user_id;
    var shift_date                  = reqst.body.shift_date;
    var scheduledata                = [];


    if(reqst.body.schedule_data){
            
        MemberSchedule.findOne({'hotel_id': ObjectId(hotel_id),'user_id': ObjectId(user_id),'shift_date': shift_date}, function(err, result){
            
            if(result){
                    
                    scheduledata            = reqst.body.schedule_data;
                    var scheduleid          = mongoose.Types.ObjectId(result._id);

                    MemberSchedule.findOneAndUpdate({'_id': scheduleid},{$set:{'schedule_data': scheduledata }},{ new: true }, function(errs, results) {

                        if(results){
                            return respe.json(response.success(results,'Member schedule has been successfully Updated.'));
                        } else {
                            return respe.json(response.errors(err.errors,'Error in Member schedule Update.'));
                        }

                    });
            }else{
                MemberSchedulesave.save(function (err, result) {
                    if(result){
                        return respe.json(response.success(result,'Member schedule has been successfully added.'));
                    }else{
                        return respe.json(response.errors(err.errors,'Error in Member schedule Saved.'));
                    }
                });
            }
        });
    }
};

exports.MemberScheduleData = (reqst, respe) => {

    var Hotel_id            = reqst.query.hotel_id;
    var from_date           = parseInt(reqst.query.from_date);
    var to_date             = parseInt(reqst.query.to_date);
 
    User.aggregate(
                [
                    {$match: {'hotel_id': ObjectId(Hotel_id)}},
                    {$lookup :  {
                                    from: "memberschedules",
                                    localField: "_id",
                                    foreignField: "user_id", 
                                    as: "ScheduleData" 
                                }
                    },
                    {$project: {
                                    "email": 1, "first_name": 1, "last_name": 1, "department": 1, "position": 1, "profile_image": 1, "hotel_id": 1, "status": 1, "address": 1,
                                    "Scheduledata": {
                                       "$filter": {
                                           "input": "$ScheduleData",
                                           "as": "subdata",
                                           "cond":{ $and: [
                                                { $gte: [ "$$subdata.shift_date",from_date ] },
                                                { $lte: [ "$$subdata.shift_date",to_date ] }
                                            ] }
                                        },
                                    }
                                }
                    }
                ], function (err, result) {

            if(result){

                return respe.json(response.success(result,'Member Schedule Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Member Schedule Listing."));
            }
        });
   
};