'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Hotel       = require(path.resolve('models/Hotel')),
         ObjectId    = mongoose.Types.ObjectId,
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
                    
                    data      = {
                    				message: completeerror,
        							success: false,
        							class: 'Autherror',
        							result: err
                    				
                    			};

                }else{
                    
                    data      = {
                    				
        							message: 'Hotel Successfully Added.',
        							success: true,
        							class: 'Authsuccess',
        							result: result
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
	            
	            data = {
	        				
    						message: "Error in Hotel update.",
    						success: false,
    						class: 'Autherror',
    						result: err
	        				
	        	};
	        }else{
	        	
	        	data = {
	        				
    						message: "Hotel Updated successfully.",
    						success: true,
    						class: 'Authsuccess',
    						result: result
	        				
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
	            
	            data = {
	        				message: "Error in Hotel deletion.",
    						success: false,
    						class: 'Autherror',
    						result: err
	        				
	        	};
	        }else{
	        	
	        	data = {
	        				
    						message: "Hotel Deleted successfully.",
    						success: true,
    						class: 'Authsuccess',
    						result: result
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
        var user_id 		= request.body.user_id;

        Hotel.find({user_id: ObjectId(user_id)}, function (err, result) {
                
                if(err){
                	
                    data      = {
                    				message: 'No Data found.',
        							success: false,
        							class: 'Autherror',
        							result: err
                    			};

                }else{

                    data      = {
                    				
        							message: 'Hotels Data found',
        							success: true,
        							class: 'Authsuccess',
        							result: result
                    			};
                }
            response.json(data);
        });

};