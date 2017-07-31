'use strict';
const path 	 	= require('path'),
      emailUnsubscription = require(path.resolve('./models/emailUnsubscription'));
function checkEmailSubscription(email,type,cb){
    	let critera = {};
    	critera[type] = true;
    	critera.email = email;
    	let returnObj = {};
    	 emailUnsubscription.findOne(critera,function(err,userObj){
    		console.log('userObj--- '+JSON.stringify(userObj));
    		if(err){
    			returnObj = {status:true};
    			cb(returnObj);
    		}else{
				if(userObj){
					returnObj = {status:true};
					 cb(returnObj);
				}else{
					returnObj = {status:false};
					cb(returnObj);
				}
    		}
    	});
    	 //cb(returnObj);
}
module.exports = {
    checkEmailSubscription: checkEmailSubscription
};