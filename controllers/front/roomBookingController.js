'use strict';

const    express            = require('express'),
         app                = express(),
         path               = require('path'),
         crypto             = require('crypto'),
         mongoose           = require('mongoose'),
          _                 = require('lodash'),
         bodyParser         = require('body-parser'),
         RoomBooking        = require(path.resolve('models/RoomBooking')),
         response           = require(path.resolve('./config/lib/response')),
         config             = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
         ObjectId           = mongoose.Types.ObjectId, 
         dateFormat         = require('dateformat');      





/***********************************************
*** Function to add new booking room detail ***
***********************************************/

exports.addBookDetail = (reqst, respe) => {

    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    if(reqst.body){

        var hotel_id     =   reqst.body.hotel_id;       
        var room_number  =   reqst.body.room_number;
        var range        =   reqst.body.reserved;
        var rfrom        =   range.from;
        var rto          =   range.to;

        RoomBooking.find( {          

            $or:[
                {
                    $and: [ 
                     { "reserved.from"     : { $lte: rfrom } }, 
                     { "reserved.to"       : { $gte: rfrom }},
                     { "hotel_id"          : { $eq: hotel_id }},            
                     { "status"            : { $eq: 'booked' }},                           
                     { "room_number"       : { $eq: room_number }}                           
                    ]
                },
                {
                    $and: [ 
                     { "reserved.from"     : { $lte: rto } }, 
                     { "reserved.to"       : { $gte: rto }},
                     { "hotel_id"          : { $eq: hotel_id }},            
                     { "status"            : { $eq: 'booked' }},
                     { "room_number"       : { $eq: room_number }}                            
                    ]
                }
            ]
        },function (err, result) {

             if(result && result.length > 0){
                var bookFrom    = new Date(result[0].reserved.from);
                    bookFrom    = dateFormat(bookFrom, "ddd dd mm, yyyy, hh:MM:ss TT");
                var bookto      = result[0].reserved.to;
                    bookto      = dateFormat(bookto, "ddd dd mm, yyyy, hh:MM:ss TT");

                var errors =    { _id: {'message':'Room is already booked between '+bookFrom+' to '+bookto }}
                return respe.json(response.errors(errors,"Error in room booking"));

             } else {

                var RoomBookingSave    = new RoomBooking(reqst.body);
                RoomBookingSave.save(function (err, Roomdata) {
                    if(Roomdata){
                        return respe.json(response.success(Roomdata,'Room has been booked.'));
                    }else{
                        return respe.json(response.errors(err.errors,'Error in room booking.'));
                    }
                });
             }

        });

    }else{
        var errors =    { _id: {'message':'Booking data is required.'}}
        return respe.json(response.errors(errors,"Error in room booking data."));
    }
};



/************************************************
******* Function to cancel room booking**********
*************************************************/


exports.cancelBooking =  (reqst, respe) => {
 
    var bookingID           = reqst.body._id;

    if(!bookingID){
        var errors =    { _id: {'message':'Booking id is required.'}}
        return respe.json(response.errors(errors,"Booking id is required."));
    }else{

        RoomBooking.findByIdAndUpdate(bookingID,{status:'cancelled'},{new: true}, function(err, result) {
            if(result){
                return respe.json(response.success(result,'Booking has been cancelled.'));
            }else{
                return respe.json(response.errors(err.errors,"Error in booking cancellation."));
            }
        });
    }
};