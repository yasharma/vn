'use strict';

const path 	= require('path'),
multer      = require('multer'),
_ 			= require('lodash'),
config 		= require(path.resolve(`./config/env/${process.env.NODE_ENV}`)),
fs 			= require('fs');



/*******************************************
******************************************** 
Function to upload attached image for jot 
********************************************/
 
/* Require All the controllers */
let ctrls   = {};

fs.readdirSync(path.resolve('./controllers/front')).forEach(file => {
	let name    = file.substr(0,file.indexOf('.'));
	ctrls[name] = require(path.resolve(`./controllers/front/${name}`));
});


module.exports = {
  	
  	routes: [
  		
  		/* User's Route*/
	  	{ url: '/register', method: ctrls.registerController.register, type: 'POST'},
	  	{ url: '/login', method: ctrls.loginController.login, type: 'POST'},
	  	{ url: '/forgot_password', 			method: ctrls.loginController.forgotPassword, 						type: 'POST'},
	  	{ url: '/resetpassword/:token',     method: ctrls.loginController.validateResetToken, 					type: 'GET'},
	  	{ url: '/resetpassword',            method: ctrls.loginController.resetPassword, 						type: 'POST'},
	  	
	  	/* Hotel's Route*/
	  	{ url: '/add_hotel', method: ctrls.hotelController.addHotel, type: 'POST'},
	  	{ url: '/update_hotel', method: ctrls.hotelController.updateHotel,type: 'PUT'},
	  	{ url: '/delete_hotel',	method: ctrls.hotelController.deleteHotel, 	type: 'DELETE'},
	  	{ url: '/get_hotels', method: ctrls.hotelController.listHotel, type: 'GET'},
	  	
	  	/* Hotel's Department Route*/
	  	{ url: '/add_department', method: ctrls.hotelController.addDepartment, type: 'POST'},
	  	{ url: '/update_department', method: ctrls.hotelController.updateDepartment, 		type: 'PUT'},
	  	{ url: '/delete_department',method: ctrls.hotelController.deleteDepartment, 		type: 'DELETE'},
	  	{ url: '/get_departments', method: ctrls.hotelController.listDepartment, 			type: 'GET'},
	  	
	  	/* Jot's Route*/
	  	//{ url: '/create_jot', mwear: uploadPhoto,method: ctrls.jotController.addJot, 			type: 'SPECIALPOST'},
	  	{ url: '/uploadfile', method: ctrls.jotController.uploadfile, type: 'POST'},
	  	{ url: '/create_jot', method: ctrls.jotController.addJot, type: 'POST'},
	  	{ url: '/update_jot', method: ctrls.jotController.updateJot, type: 'PUT'},
	  	{ url: '/delete_jot', method: ctrls.jotController.deleteJot, type: 'DELETE'},
	  	{ url: '/get_jot', method: ctrls.jotController.listJot, type: 'GET'},
	  	
	  	/* Member's Route*/
	  	{ url: '/add_member', method: ctrls.memberController.addMember, type: 'POST'},
	  	{ url: '/update_member', method: ctrls.memberController.updateMember, type: 'PUT'},
	  	{ url: '/delete_member', method: ctrls.memberController.deleteMember, type: 'DELETE'},
	  	{ url: '/get_members', 	method: ctrls.memberController.listMember, type: 'GET'}
	  	
	]
};