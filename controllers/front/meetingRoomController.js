'use strict';

const    express            = require('express'),
         app                = express(),
         path               = require('path'),
         crypto             = require('crypto'),
         mongoose           = require('mongoose'),
          _                 = require('lodash'),
         bodyParser         = require('body-parser'),
         MeetingRoom        = require(path.resolve('models/MeetingRoom')),
         BookingReport      = require(path.resolve('models/RoomBooking')),
         response           = require(path.resolve('./config/lib/response')),
         config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
         ObjectId           = mongoose.Types.ObjectId;         





/**************************************
*** Function to add new MeetingRoom ***
***************************************/

exports.addMeetingRoom = (reqst, respe) => {

    if(reqst.body){
       
        var MeetingRoomsave              = new MeetingRoom(reqst.body);
        MeetingRoomsave.save(function (err, MeetingRoomdata) {
            if(MeetingRoomdata){
                return respe.json(response.success(MeetingRoomdata,'Meeting Room Added Successfully.'));
            }else{
                return respe.json(response.errors(err.errors,'Error in Meeting Room Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'MeetingRoom data is required.'}}
        return respe.json(response.errors(errors,"Error in MeetingRoom data."));
    }
};

/************************************************
**** Function to Update Existing MeetingRoom ****
*************************************************/


exports.updateMeetingRoom =  (reqst, respe) => {
 
    var MeetingRoomid         	= reqst.body._id;
    if(!MeetingRoomid){
        var errors =    { _id: {'message':'Meeting Room id is required.'}}
        return respe.json(response.errors(errors,"Meeting Room id is required."));
    }else{

        MeetingRoom.findByIdAndUpdate(MeetingRoomid,{$set:reqst.body}, {new: true, runValidators: true, context:'query'}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Meeting Room updated successfully.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in Meeting Room update."));
            }
        });
    }
};

/***********************************************
**** Function to Delete Existing MeetingRoom ***
************************************************/

exports.deleteMeetingRoom = (reqst, respe) => {

    var MeetingRoomid         	= reqst.query._id;
    if(!MeetingRoomid){

        var errors =    { _id: {'message':'MeetingRoom id is required.'}}
        return respe.json(response.errors(errors,"Error in MeetingRoom Deletion."));

    }else{
        MeetingRoom.findByIdAndRemove(MeetingRoomid, function(err, result) {

            if(result){
                return respe.json(response.success(result,'Meeting Room deleted successfully.'));
            }else{
                return respe.json(response.errors(err,"Error in Meeting Room Deletion."));
            }
            
        });
    }
};




/***********************************************
** Function to list all MeetingRooms ***********
************************************************/

exports.listMeetingRoom = (reqst, respe) => {

    var hotel_id            = reqst.query.hotel_id;
    var range               = reqst.query.range;
   
    if(range)
    {
        range      = JSON.parse(reqst.query.range);
         var rfrom = range.from;
         var rto   = range.to;

         BookingReport.find( { 
            $or:[
                {
                    $and: [ 
                     { "reserved.from"     : { $lte: rfrom } }, 
                     { "reserved.to"       : { $gte: rfrom }},
                     { "hotel_id"          : { $eq: hotel_id }},            
                     { "status"            : { $eq: 'booked' }}                           
                    ]
                },
                {
                    $and: [ 
                     { "reserved.from"     : { $lte: rto } }, 
                     { "reserved.to"       : { $gte: rto }},
                     { "hotel_id"          : { $eq: hotel_id }},            
                     { "status"            : { $eq: 'booked' }}                           
                    ]
                }
            ]
        },   
        function (err, result) {

            if(result && result.length > 0){
                var roomIDs = [];
                for(var i=0; i < result.length;i++)
                {
                    roomIDs.push(result[i].room_number);
                }
                MeetingRoom.find( { 
                    $and: [ 
                     { "room_number"   : { $nin: roomIDs } }, 
                     { "hotel_id"      : { $eq: hotel_id } } 
                    ]
                }, function (meetingerr, mettingresult) {
                    if(mettingresult.length > 0){
                        return respe.json(response.success(mettingresult,'Meeting Room Data Found.'));
                    }else{
                        return respe.json(response.errors(meetingerr,"Error In Meeting Room Listing."));
                    }
                });

            }else{

                MeetingRoom.find({hotel_id: hotel_id}, function (meetingerr, mettingresult) {
                    if(mettingresult.length > 0){
                        return respe.json(response.success(mettingresult,'Meeting Room Data Found.'));
                    }else{
                        return respe.json(response.errors(meetingerr,"Error In Meeting Room Listing."));
                    }
                });
            }
            
        });
    } else {

        MeetingRoom.find({hotel_id: hotel_id}, function (err, result) {
            if(result.length > 0){
                return respe.json(response.success(result,'Meeting Room Data Found.'));
            }else{
                return respe.json(response.errors(err,"Error In Meeting Room Listing."));
            }
        });
    }   

    
    
};





/****************************************************************
*** Function to add Bulk Members at the time of Hotel Set-up ****
*****************************************************************/
   
exports.configureHotelRooms = (reqst, respe) => {

    if(reqst.body.room_list){

        var roomdata             = reqst.body.room_list;
        var UpdatedData          =  [];




        /* manipulate user data beforesaving as  bulk record */
        _.map(roomdata, function(room){
            
            UpdatedData.push({

                'name'            : room.name,
                'room_number'     : room.room_number,
                'capacity'        : room.capacity,
                'cost'            : room.cost,
                'hotel_id'        : room.hotel_id,
            });

        });
        
        MeetingRoom.insertMany(UpdatedData, function (err, result) {
        
            if(!_.isNull(result)){

              return respe.json(response.success(result,'Rooms Added Successfully.'));
                
            }else{
                return respe.json(response.errors(err.errors,'Error in User Saved.'));
            }
        });
    }else{
        var errors =    { _id: {'message':'Room data is required.'}}
        return respe.json(response.errors(errors,"Error in Room data."));
    }
    
};




/************************************************
** Function to list all booking repor ***********
************************************************/

exports.bookingReport = (reqst, respe) => {

    var hotel_id            = reqst.query.hotel_id;


    BookingReport.aggregate([
                        {
                            $match:    
                                {
                                    'hotel_id': ObjectId(hotel_id)
                                }
                        },
                        {
                          $lookup:
                            {
                              from: "meetingrooms",
                              localField: "room_number",
                              foreignField: "room_number",
                              as: "room_detail"
                            }
                        },
                        {
                          $lookup:
                            {
                              from: "users",
                              localField: "user_id",
                              foreignField: "_id",
                              as: "seller_detail"
                            }
                        },
                        { 
                            $project : {                            
                                "seller_detail.password" : 0,                           
                                "seller_detail.user_name" : 0,                           
                                "seller_detail.updated" : 0,                           
                                "seller_detail.created" : 0,                           
                                "seller_detail.hotel_id" : 0,                           
                                "seller_detail.__v" : 0,                           
                                "seller_detail.passwordReset" : 0,                          
                                "seller_detail.salt" : 0,                          
                            } 
                        }
                        ], function (err, result) {
            
            if(result && result.length > 0){
                return respe.json(response.success(result,'Report found.'));
            }else{
                return respe.json(response.errors(err,"Error in booking report."));
            }
        });
    
};





