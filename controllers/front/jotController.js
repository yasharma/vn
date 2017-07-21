'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Jot         = require(path.resolve('models/Jot')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         



/********************************
*** Function to add new Jot ***
*********************************/
   
exports.addJot = (request, response) => {

	    var data            = {};
        var Jotsave         = new Jot(request.body);

        Jotsave.save(function (err, resp) {
                
                var issaved         = false;
                var message1        = '';
                var classmsg        = '';
                var completeerror   = '';

                if(err){

                    if(err.errors.jot_title){
                        completeerror += err.errors.jot_title.message+"\n";
                    }
                     
                    console.log('Error in Jot Saved');
                    issaved   = false;
                    message1  = completeerror;
                    classmsg  = 'Autherror';
                    data      = {result: {message: message1, success: issaved,class: classmsg } };

                }else{

                    console.log('Jot Saved');
                    issaved   = true;
                    message1  = 'Jot Successfully Added';
                    classmsg  = 'Authsuccess';
                    data      = {result: {message: message1, success: issaved,class: classmsg } };
                }
                
                response.json(data);
        });

};

/********************************
** Function to list all Jots **
*********************************/

exports.listJot = (request, response) => {

        var data            = {};
        var hotel_id        = request.body.hotel_id;
        
        Jot.aggregate([
                        /*{ $match: {'hotel_id': hotel_id,} 
                        },*/
                        { $group: 
                            { _id: '$jot_type',
                                jot_data: {
                                    $push: {
                                        jot_title: '$jot_title',
                                        priprity: '$priority',
                                        status: '$status'
                                    }
                                } 
                            } 
                        }
                    ], function (err, resp) {
                
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

                    console.log('Get all Jots');
                    data      = resp;
                }
                
                response.json(data);
        });

};