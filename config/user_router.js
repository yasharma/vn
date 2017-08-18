'use strict';

const path 	= require('path'),
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
	  	{ url: '/register', 			method: ctrls.registerController.register, 			type: 'POST'},
	  	{ url: '/login', 				method: ctrls.loginController.login, 				type: 'POST'},
	  	{ url: '/forgot_password', 		method: ctrls.loginController.forgotPassword, 		type: 'POST'},
	  	{ url: '/resetpassword/:token', method: ctrls.loginController.validateResetToken, 	type: 'GET'},
	  	{ url: '/resetpassword',        method: ctrls.loginController.resetPassword, 		type: 'POST'},
	  	
	  	/* Hotel's Route*/
	  	{ url: '/add_hotel',    method: ctrls.hotelController.addHotel, 	type: 'POST'},
	  	{ url: '/update_hotel', method: ctrls.hotelController.updateHotel,	type: 'PUT'},
	  	{ url: '/delete_hotel',	method: ctrls.hotelController.deleteHotel, 	type: 'DELETE'},
	  	{ url: '/get_hotels',   method: ctrls.hotelController.listHotel, 	type: 'GET'},
	  	
	  	/* Hotel's Department Route*/
	  	{ url: '/add_department',    method: ctrls.hotelController.addDepartment, 			type: 'POST'},
	  	{ url: '/update_department', method: ctrls.hotelController.updateDepartment, 		type: 'PUT'},
	  	{ url: '/delete_department', method: ctrls.hotelController.deleteDepartment, 		type: 'DELETE'},
	  	{ url: '/get_departments',   method: ctrls.hotelController.listDepartment, 			type: 'GET'},
	  	
	  	/* Jot's Route*/

	  	{ url: '/create_jot', method: ctrls.jotController.addJot, 			type: 'POST'},
	  	{ url: '/update_jot', method: ctrls.jotController.updateJot, 		type: 'PUT'},
	  	{ url: '/delete_jot', method: ctrls.jotController.deleteJot, 		type: 'DELETE'},
	  	{ url: '/get_jot',    method: ctrls.jotController.listJot, 			type: 'GET'},
	  	
	  	/* Lost & Found */
	  	
	  	{ url: '/add_lost_found',    method: ctrls.lostFoundController.addLostFound, 	type: 'POST'},
	  	{ url: '/update_lost_found', method: ctrls.lostFoundController.updateLostFound, type: 'PUT'},
	  	{ url: '/delete_lost_found', method: ctrls.lostFoundController.deleteLostFound, type: 'DELETE'},
	  	{ url: '/get_lost_found',    method: ctrls.lostFoundController.listLostFound, 	type: 'GET'},

	  	/* Vending Routes */

	  	{ url: '/add_item',    method: ctrls.vendingController.addItem, 	type: 'POST'},
	  	{ url: '/update_item', method: ctrls.vendingController.updateItem,  type: 'PUT'},
	  	{ url: '/delete_item', method: ctrls.vendingController.deleteItem,  type: 'DELETE'},
	  	{ url: '/get_item',    method: ctrls.vendingController.listItem, 	type: 'GET'},
	  	{ url: '/add_to_cart',    method: ctrls.vendingController.addCart, 	type: 'POST'},

	  	{ url: '/add_inventory_category',    method: ctrls.vendingController.addCategory, 	type: 'POST'},
	  	{ url: '/update_inventory_category', method: ctrls.vendingController.updateCategory,  type: 'PUT'},
	  	{ url: '/delete_inventory_category', method: ctrls.vendingController.deleteCategory,  type: 'DELETE'},
	  	{ url: '/get_inventory_category',    method: ctrls.vendingController.listCategory, 	type: 'GET'},
	  	
	  	/* Member's Route*/
	  	{ url: '/add_member',    method: ctrls.memberController.addMember, 		type: 'POST'},
	  	{ url: '/update_member', method: ctrls.memberController.updateMember, 	type: 'PUT'},
	  	{ url: '/delete_member', method: ctrls.memberController.deleteMember, 	type: 'DELETE'},
	  	{ url: '/get_members', 	 method: ctrls.memberController.listMember, 	type: 'GET'},

	  	/* Global file upload through out the APP( parameter: foldername and hotel_id) */
	  	{ url: '/uploadfiledata',   method: ctrls.uploadFilesController.uploadfiledata ,type: 'POST'},


	  	
	]
};