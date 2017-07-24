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

        Hotelsave.save(function (err, result) {
                
                var completeerror   = [];

                if(err){

                    if(err.errors.hotelname){
                        completeerror.push(err.errors.hotelname.message);
                    }

                    if(err.errors.ownername){
                        completeerror.push(err.errors.ownername.message);
                    }                   
                
                    if(err.errors.email){
                        completeerror.push(err.errors.email.message);
                    }
                    
                    console.log('Error in Hotel Saved');
                    data      = {
                    				result: {
                    							message: completeerror,
                    							success: false,
                    							class: 'Autherror',
                    							result: err
                    				} 
                    			};

                }else{

                    console.log('Hotel Saved');
                    data      = {
                    				result: {
                    							message: 'Hotel Successfully Added',
                    							success: true,
                    							class: 'Authsuccess',
                    							result: result
                    				} 
                    			};
                }
            response.json(data);
        });

};


/******************************************
**** Function to Update Existing Hotel ****
*******************************************/
exports.updateHotel = (request, response) => {

	    var data            	= {};
        var hotelid         	= request.body.hotel_id;

        Hotel.findByIdAndUpdate(hotelid,{$set:request.body}, {new: true}, function(err, result) {
			if(err){
	            console.log("Error in Hotel update");
	            data = {
	        				result: {
	        						message: "Error in Hotel update",
	        						success: false,
	        						class: 'Autherror',
	        						result: err
	        						
	        				}
	        	};
	        }else{
	        	console.log("Hotel Updated successfully");
	        	data = {
	        				result: {
	        						message: "Hotel Updated successfully",
	        						success: true,
	        						class: 'Authsuccess',
	        						result: result
	        						
	        				}
	        	};
	        	response.json(data);
	        }
	        
		});
};

/******************************************
**** Function to Delete Existing Hotel ****
*******************************************/

exports.deleteHotel = (request, response) => {

	    var data            	= {};
        var hotelid         	= request.body.hotel_id;

        Hotel.findByIdAndRemove(hotelid, function(err, result) {
			if(err){

	            console.log("Error in Hotel deletion");
	            data = {
	        				result: {
	        						message: "Error in Hotel deletion",
	        						success: false,
	        						class: 'Autherror',
	        						result: err
	        						
	        				}
	        	};
	        }else{

	        	console.log("Hotel Deleted successfully");
	        	data = {
	        				result: {
	        						message: "Hotel Deleted successfully",
	        						success: true,
	        						class: 'Authsuccess',
	        						result: result
	        						
	        				}
	        	};
	        	response.json(data);
	        }
	        
		});
};

/********************************
** Function to list all hotels **
*********************************/

exports.listHotel = (request, response) => {

        var data            = {};
        Hotel.find({}, function (err, result) {
                
                if(err){
                	console.log('Error: No data found.');
                    data      = {
                    				result: {
                    							message: 'No Data found.',
                    							success: false,
                    							class: 'Autherror'
                    				} 
                    			};

                }else{

                    console.log('Get all Hotels');
                    data      = {
                    				result: {
                    							message: 'Hotels Data found',
                    							success: true,
                    							class: 'Authsuccess',
                    							result: result
                    				} 
                    			};
                }
            response.json(data);
        });

};