'use strict';

const    jwt         = require('jsonwebtoken'),
         express     = require('express'),
         app         = express(),
         path        = require('path'),
         mongoose    = require('mongoose'),
         bodyParser  = require('body-parser'),
         Member      = require(path.resolve('models/Member')),
         config      = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));         



/********************************
*** Function to add new Member ***
*********************************/
   
exports.addMember = (request, response) => {

	    var data            = {};
        var Membersave       = new Member(request.body);

        Membersave.save(function (err, result) {
                
                var completeerror   = [];

                if(err){

                    if(err.errors.first_name){
                        completeerror.push(err.errors.first_name.message);
                    }
                    if(err.errors.last_name){
                        completeerror.push(err.errors.last_name.message);
                    }
                    if(err.errors.user_name){
                        completeerror.push(err.errors.user_name.message);
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
                    				message: 'Member Successfully Added.',
        							success: true,
        							class: 'Authsuccess',
        							result: result
                    			};
                }
            response.json(data);
        });

};


/******************************************
**** Function to Update Existing Member ****
*******************************************/
exports.updateMember = (request, response) => {

	    var data            	= {};
        var Memberid         	= request.body.member_id;

        Member.findByIdAndUpdate(Memberid,{$set:request.body}, {new: true}, function(err, result) {
			if(err){
	            
	            data = {
	        				message: "Error in Member update.",
    						success: false,
    						class: 'Autherror',
    						result: err
	        				
	        	};
	        }else{
	        	
	        	data = {
	        				message: "Member Updated successfully.",
    						success: true,
    						class: 'Authsuccess',
    						result: result
	        			
	        	};
	        	response.json(data);
	        }
	        
		});
};

/******************************************
**** Function to Delete Existing Member ****
*******************************************/

exports.deleteMember = (request, response) => {

	    var data            	= {};
        var Memberid         	= request.body.member_id;

        Member.findByIdAndRemove(Memberid, function(err, result) {
			if(err){

	            data = {
	        				message: "Error in Member deletion.",
    						success: false,
    						class: 'Autherror',
    						result: err
	        			
	        	};
	        }else{

	        	data = {
	        				message: "Member Deleted successfully.",
    						success: true,
    						class: 'Authsuccess',
    						result: result
	        			
	        	};
	        	response.json(data);
	        }
	        
		});
};

/********************************
** Function to list all Members **
*********************************/

exports.listMember = (request, response) => {

        var data            = {};
        Member.find({}, function (err, result) {
                
                if(err){
                	
                    data      = {
                    				
        							message: 'No Data found.',
        							success: false,
        							class: 'Autherror',
                                    result: err
                    			};

                }else{

                    data      = {
                    				message: 'Members Data found',
        							success: true,
        							class: 'Authsuccess',
        							result: result
                    			};
                }
            response.json(data);
        });

};