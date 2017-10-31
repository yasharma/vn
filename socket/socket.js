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

	    socket.on('web.logout', function(data) {
			for(var i = 0; i<data.hotel_id.length;i++)
			{
				socket.leave(data.hotel_id[i]);
			}
	    });
		  
	  	/**********************************************
		* Send Notification to all
		/**********************************************/

	  	socket.on('notificationToAll', (data) => {  
	  		io.sockets.emit('notificationToAll', {result:data});
	    });

	  	/**********************************************
		* Send Notification to selected users
		/**********************************************/
	     socket.on('notificationToRoom', (data) => {
	  		io.sockets.in(data.hotel_id).emit('notificationToRoom');
	    });
	    
	});
};