const  express 			= require('express'),
		path 			= require('path'),
	    router 			= express.Router(),
        userRoutes 		= require(path.resolve('./config/user_router'));
		


/*
* These are our base routes that will call simple prefixed by '/'
* eg. /login
*/

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