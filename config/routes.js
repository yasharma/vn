const  express 			= require('express'),
		path 			= require('path'),
		app         	= express(),
	    router 			= express.Router(),
	    jwt 			= require('express-jwt'),
	    config          = require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
        userRoutes 		= require(path.resolve('./config/user_router'));
		

	app.use(jwt({ secret: config.secret}).unless({path: ['']}));
	/****************************************************************
	* These are our base routes that will call simple prefixed by '/'
	* eg. /login*****************************************************
	****************************************************************/

	userRoutes.routes.forEach(x => {
		switch(x.type){
			case 'GET':
			router.get(x.url, x.method);	
			break;

			case 'POST':
			router.post(x.url, x.method);	
			break;

			case 'PUT':
			router.put(x.url, x.method);	
			break;

			case 'DELETE':
			router.delete(x.url, x.method);	
			break;

			case 'SPECIALPUT': 
			router.put(x.url, x.mwear, x.method);
			break;

			case 'SPECIALPOST': 
			router.post(x.url, x.mwear, x.method);
			break;

			default:
			throw new Error('Invalid method type');
		}	
	});

	module.exports = {
		router: router
	};