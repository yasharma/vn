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
*** Function to add new Jot *****
*********************************/
   
exports.addJot = (request, response) => {

	    var data            = {};
        var Jotsave         = new Jot(request.body);

        Jotsave.save(function (err, result) {
                
                var issaved         = false;
                var message1        = '';
                var classmsg        = '';
                var completeerror   = '';

                if(err){

                    if(err.errors.jot_title){
                        completeerror += err.errors.jot_title.message+"\n";
                    }
                     
                    console.log('Error in Jot Saved');
                    data      = {
                    				result: {
	                    						message: 'Error in Jot Saved',
	                    						success: true,
	                    						class: 'Autherror',
	                    						result:  err
	                    						
                    				} 
                    			};

                }else{

                    console.log('Jot Saved Successfully');
                    data      = {
                    				result: {
	                    						message: 'Jot Successfully Added',
	                    						success: true,
	                    						class: 'Authsuccess',
	                    						result:  result
	                    						
                    				} 
                    			};
                }
                
                response.json(data);
        });

};

/****************************************
**** Function to Update Existing Jot ****
*****************************************/
exports.updateJot = (request, response) => {

	    var data            = {};
        var Jotid         	= request.body.jot_id;

        Jot.findByIdAndUpdate(Jotid,{$set:request.body}, {new: true}, function(err, result) {
			if(err){
	            console.log("Error in jot update");
	            data = {
	        				result: {
	        						message: "Error in jot update",
	        						success: false,
	        						class: 'Autherror',
	        						result: err
	        						
	        				}
	        	};
	        }else{
	        	console.log("Jot Updated successfully");
	        	data = {
	        				result: {
	        						message: "Jot Updated successfully",
	        						success: true,
	        						class: 'Authsuccess',
	        						result: result
	        						
	        				}
	        	};
	        	response.json(data);
	        }
	        
		});
};

/****************************************
**** Function to Delete Existing Jot ****
*****************************************/
exports.deleteJot = (request, response) => {

	    var data            = {};
        var Jotid         	= request.body.jot_id;

        Jot.findByIdAndRemove(Jotid, function(err, result) {
			if(err){

	            console.log("Error in jot deletion");
	            data = {
	        				result: {
	        						message: "Error in jot deletion",
	        						success: false,
	        						class: 'Autherror',
	        						result: err
	        						
	        				}
	        	};
	        }else{

	        	console.log("Jot Deleted successfully");
	        	data = {
	        				result: {
	        						message: "Jot Deleted successfully",
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
                                        priority: '$priority',
                                        status: '$status'
                                    }
                                } 
                            } 
                        }
                    ], function (err, ressult) {
                
                if(err){

                   console.log("Error: No data found");
                    data      = {
                    				result: {
		                    				message: 'Error: Something went wrong.',
		                    				success: false,
		                    				class: 'Autherror',
		                    				result: err
		                    				
		                    		} 
                    			};

                }else{

                    console.log('Get all Jots');
                   data      = {
                    				result: {
		                    				message: 'data found related to condition.',
		                    				success: true,
		                    				class: 'Authsuccess',
		                    				result: ressult
		                    				
		                    		} 
                    			};
                }
                
                response.json(data);
        });

};