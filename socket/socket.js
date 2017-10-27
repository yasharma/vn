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
	  
	  	socket.on('notification', (data) => {  
	  		io.sockets.emit('notification', {result:data});
	    });
	    
	});
};