'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Hotel       = require(path.resolve('models/Hotel')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         



/********************************
*** Function to add new hotel ***
*********************************/
   
exports.addHotel = (request, response) => {

	    var data            = {};
        var Hotelsave       = new Hotel(request.body);

        Hotelsave.save(function (err, resp) {
                
                var issaved         = false;
                var message1        = '';
                var classmsg        = '';
                var completeerror   = '';

                if(err){

                    if(err.errors.hotelname){
                        completeerror += err.errors.hotelname.message+"\n";
                    }
                     
                    if(err.errors.ownername){
                        completeerror += err.errors.ownername.message+"\n";
                    }

                    if(err.errors.email){
                        completeerror += err.errors.email.message;
                    }
                    
                    console.log('Error in Hotel Saved');
                    issaved   = false;
                    message1  = completeerror;
                    classmsg  = 'Autherror';
                    data      = {result: {message: message1, success: issaved,class: classmsg } };

                }else{

                    console.log('Hotel Saved');
                    issaved   = true;
                    message1  = 'Hotel Successfully Added';
                    classmsg  = 'Authsuccess';
                    data      = {result: {message: message1, success: issaved,class: classmsg } };
                }
                
                response.json(data);
        });

};

/********************************
** Function to list all hotels **
*********************************/

exports.listHotel = (request, response) => {

        var data            = {};
        Hotel.find({}, function (err, resp) {
                
                var issaved         = false;
                var message1        = '';
                var classmsg        = '';
                var completeerror   = '';

                if(err){

                    issaved   = false;
                    message1  = 'Error: Something went wrong.';
                    classmsg  = 'Autherror';
                    data      = {result: {message: 'No Data found.', success: issaved,class: classmsg } };

                }else{

                    console.log('Get all Hotels');
                    data      = resp;
                }
                
                response.json(data);
        });

};