'use strict';
const path                = require('path'),
	  ASYNC				  = require("async"),
	  Jot         		  = require(path.resolve('models/Jot')),
	  AlertDB             = require(path.resolve('models/Alerts')),
	  AlertCtlr           = require(path.resolve('controllers/front/alertController')),
      env                 = require(path.resolve(`./config/env/${process.env.NODE_ENV}`));


var socketUsers = [];

module.exports =  (io) => {

	io.on('connection', (socket) => {


		/**********************************************
		* Create room with hotel id and join the user
		/**********************************************/
		socket.on('web.login', (data) => { 
	  		for(var i = 0; i<data.hotel_id.length;i++)
	  		{
	  			socket.join(data.hotel_id[i]);
	  		}

	    });		
	  
	  	/**********************************************
		* Alert notification
		/**********************************************/

	  	socket.on('notification', (data) => {  
	  		io.sockets.emit('notification', {result:data});
	    });

	  	/**********************************************
		* Jot notification
		/**********************************************/
	     socket.on('jot_create_notification', (data) => { 
	     	
	     	var newjotFound = { 
	     		title: "New "+data.jot_type +" jot :- "+data.jot_title,
	     		description: data.jot_description
	     	};

	  		io.sockets.in(data.hotel_id).emit('jot_create_notification',{result:newjotFound});
	    });
	    
	});
};