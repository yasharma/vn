'use strict';

require('dotenv').config({silent: true});
const express 		= require('express'),
	fs 				= require('fs'),
	path 			= require('path'),
	bodyParser 		= require('body-parser'),
	app 			= express(),
	server 			= require('http').createServer(app),
	io 				= require('socket.io')(server),
	mongoose 		= require('mongoose'),
	routes 		    = require(path.resolve('./config/routes')),
	config      	= require(path.resolve(`./config/env/${process.env.NODE_ENV}`));
	
	/*require database file to connect mongoDB*/
	mongoose.connect(config.db.URL);
	/*Socket Init*/
	require('./socket/socket.js')(io);
	/*Listen on Server Port*/
	server.listen(8020, function(){
		console.log('Socket listening on', server.address().port);
	});