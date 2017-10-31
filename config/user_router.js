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
	  	{ url: '/register', 				method: ctrls.userController.register, 							type: 'POST'	},
	  	{ url: '/verify/:hashkey', 			method: ctrls.userController.verify, 							type: 'GET'		},
	  	{ url: '/login', 					method: ctrls.userController.login, 							type: 'POST'	},
	  	{ url: '/edit_profile', 			method: ctrls.userController.editProfile, 							type: 'PUT'	},
	  	{ url: '/forgot_password', 			method: ctrls.userController.forgotPassword, 					type: 'POST'	},
	  	{ url: '/resetpassword/:token', 	method: ctrls.userController.validateResetToken, 				type: 'GET'		},
	  	{ url: '/resetpassword',        	method: ctrls.userController.resetPassword, 					type: 'POST'	},
	  	{ url: '/changePassword',        	method: ctrls.userController.changePassword, 					type: 'POST'	},
	  	
	  	/* Hotel's Route*/
	  	{ url: '/hotel_notifications', 		method: ctrls.hotelController.getJotNotification, 				type: 'GET'		},
	  	{ url: '/add_hotel',    	 		method: ctrls.hotelController.addHotel, 						type: 'POST'	},
	  	{ url: '/update_hotel', 	 		method: ctrls.hotelController.updateHotel,						type: 'PUT'		},
	  	{ url: '/delete_hotel',		 		method: ctrls.hotelController.deleteHotel, 						type: 'DELETE'	},
	  	{ url: '/get_hotels',   	 		method: ctrls.hotelController.listHotel, 						type: 'GET'		},
	  	{ url: '/hotel_detail',   	 		method: ctrls.hotelController.HotelDetail, 						type: 'GET'		},
	  	
	  	{ url: '/add_hotelshift',   		method: ctrls.hotelController.addHotelShift, 					type: 'POST'	},
	  	{ url: '/update_hotelshift', 		method: ctrls.hotelController.updateHotelShift,					type: 'PUT'		},
	  	{ url: '/delete_hotelshift', 		method: ctrls.hotelController.deleteHotelShift,					type: 'DELETE'	},
	  	{ url: '/get_hotelshifts',   		method: ctrls.hotelController.listHotelShift,					type: 'GET'		},
	  	
	  	/* Hotel's Department Route*/
	  	{ url: '/configure_departments',   	method: ctrls.hotelController.configureDepartments, 			type: 'POST'	},
	  	{ url: '/getHotelStatus',   		method: ctrls.hotelController.getHotelStatus, 					type: 'GET'		},
	  	{ url: '/add_department',    		method: ctrls.hotelController.addDepartment, 					type: 'POST'	},
	  	{ url: '/update_department', 		method: ctrls.hotelController.updateDepartment,					type: 'PUT'		},
	  	{ url: '/delete_department', 		method: ctrls.hotelController.deleteDepartment,					type: 'DELETE'	},
	  	{ url: '/get_departments',   		method: ctrls.hotelController.listDepartment, 					type: 'GET'		},
	  	

	  	/* Hotel's Department Positions Route*/
	  	{ url: '/add_position',   			method: ctrls.hotelController.addDepartmentPosition, 			type: 'POST'	},
	  	{ url: '/update_position', 			method: ctrls.hotelController.updateDepartmentPosition,			type: 'PUT'		},
	  	{ url: '/delete_position', 			method: ctrls.hotelController.deleteDepartmentPosition,			type: 'DELETE'	},
	  	{ url: '/get_position',   			method: ctrls.hotelController.listDepartmentPosition, 			type: 'GET'		},
	  	
	  	/* Jot's Route*/

	  	{ url: '/add_jotactivity', 			method: ctrls.jotController.addJotActivity, 					type: 'POST'	},
	  	{ url: '/create_jot', 				method: ctrls.jotController.addJot, 							type: 'POST'	},
	  	{ url: '/update_jot', 				method: ctrls.jotController.updateJot,							type: 'PUT'		},
	  	{ url: '/delete_jot', 				method: ctrls.jotController.deleteJot,							type: 'DELETE'	},
	  	{ url: '/get_jot',    				method: ctrls.jotController.listJot, 							type: 'GET'		},
	  	{ url: '/get_jotactivity',    		method: ctrls.jotController.listJotActivity, 					type: 'GET'		},
	  	{ url: '/move_document',   			method: ctrls.jotController.moveDocument, 						type: 'POST'	},
	  	/* Lost & Found */
	  	
	  	{ url: '/add_lost_found',    		method: ctrls.lostFoundController.addLostFound, 				type: 'POST'	},
	  	{ url: '/update_lost_found', 		method: ctrls.lostFoundController.updateLostFound, 				type: 'PUT'		},
	  	{ url: '/delete_lost_found', 		method: ctrls.lostFoundController.deleteLostFound, 				type: 'DELETE'	},
	  	{ url: '/get_lost_found',    		method: ctrls.lostFoundController.listLostFound, 				type: 'GET'		},
		  	
	  	
	  	/* Member's Route*/
	  	{ url: '/configure_members',    	method: ctrls.memberController.configureHotelMember, 			type: 'POST'	},

	  	{ url: '/configure_rooms',    	method: ctrls.meetingRoomController.configureHotelRooms, 			type: 'POST'	},

	  	{ url: '/get_booking_report',    	method: ctrls.meetingRoomController.bookingReport, 			type: 'GET'	},

	  	{ url: '/add_member',    			method: ctrls.memberController.addMember, 						type: 'POST'	},
	  	{ url: '/update_member', 			method: ctrls.memberController.updateMember, 					type: 'PUT'		},
	  	{ url: '/delete_member', 			method: ctrls.memberController.deleteMember, 					type: 'DELETE'	},
	  	{ url: '/get_members', 	 			method: ctrls.memberController.listMember, 						type: 'GET'		},
	  	{ url: '/checkusercontact',        	method: ctrls.memberController.checkUsercontact, 				type: 'POST'	},
	  	{ url: '/updateuserhotels',        	method: ctrls.memberController.UpdateUserHotelDetails, 			type: 'POST'	},
	  	{ url: '/member_signup',       		method: ctrls.memberController.memberSignUp, 					type: 'POST'	},
	  	
	  	/* Vending Routes */

	  	{ url: '/add_item',    				method: ctrls.vendingController.addItem, 						type: 'POST'	},
	  	{ url: '/update_item', 				method: ctrls.vendingController.updateItem,  					type: 'PUT'		},
	  	{ url: '/delete_item', 				method: ctrls.vendingController.deleteItem,  					type: 'DELETE'	},
	  	{ url: '/get_item',    				method: ctrls.vendingController.listItem, 						type: 'GET'		},
	  	{ url: '/add_to_cart', 				method: ctrls.vendingController.addCart, 						type: 'POST'	},

	  	/* Phone Directory Route  */
	  	
	  	{ url: '/add_contact',    			method: ctrls.phoneDirectoryController.addPhoneDirectory, 		type: 'POST'	},
	  	{ url: '/update_contact', 			method: ctrls.phoneDirectoryController.updatePhoneDirectory, 	type: 'PUT'		},
	  	{ url: '/delete_contact', 			method: ctrls.phoneDirectoryController.deletePhoneDirectory, 	type: 'DELETE'	},
	  	{ url: '/get_contact',    			method: ctrls.phoneDirectoryController.listPhoneDirectory, 		type: 'GET'		},
		
		/* Document Center Route  */
	  	
	  	{ url: '/add_document',    			 method: ctrls.documentCenterController.addDocument, 			type: 'POST'	},
	  	{ url: '/update_document', 			 method: ctrls.documentCenterController.updateDocument, 		type: 'PUT'		},
	  	{ url: '/delete_document', 			 method: ctrls.documentCenterController.deleteDocument, 		type: 'DELETE'	},
	  	{ url: '/get_document',    			 method: ctrls.documentCenterController.listDocument, 			type: 'GET'		},

	  	{ url: '/add_inventory_category',    method: ctrls.vendingController.addCategory, 					type: 'POST'	},
	  	{ url: '/update_inventory_category', method: ctrls.vendingController.updateCategory,  				type: 'PUT'		},
	  	{ url: '/delete_inventory_category', method: ctrls.vendingController.deleteCategory,  				type: 'DELETE'	},
	  	{ url: '/get_inventory_category',    method: ctrls.vendingController.listCategory, 					type: 'GET'		},
	  	
	  	{ url: '/add_member_schedule',  	 method: ctrls.memberController.addSchedule, 					type: 'POST'	},
	  	{ url: '/add_multipleschedule',  	 method: ctrls.memberController.addMultipleSchedule, 			type: 'POST'	},
		{ url: '/member_schedule_data',  	 method: ctrls.memberController.MemberScheduleData, 			type: 'GET'		},
	  	{ url: '/uploadfiledata',   		 method: ctrls.uploadFilesController.uploadfiledata ,			type: 'POST'	},
	  		

	  	/* Hotel's Meeting Room Routes */
	  	
	  	{ url: '/add_meetingroom',   		method: ctrls.meetingRoomController.addMeetingRoom, 					type: 'POST'	},
	  	{ url: '/update_meetingroom', 		method: ctrls.meetingRoomController.updateMeetingRoom,					type: 'PUT'		},
	  	{ url: '/delete_meetingroom', 		method: ctrls.meetingRoomController.deleteMeetingRoom,					type: 'DELETE'	},
	  	{ url: '/get_meetingrooms',   		method: ctrls.meetingRoomController.listMeetingRoom,					type: 'GET'		},


	  	  	/* Hotel's Meeting Room Routes */
	  	
	  	{ url: '/add_booking', method: ctrls.roomBookingController.addBookDetail, type: 'POST'	},


	  	{ url: '/get_mysale', method: ctrls.vendingController.vendingSale,type: 'GET'		},

	  	{ url: '/cancle_sale', method: ctrls.vendingController.vendingCancleSale,type: 'PUT'		},
	  	
	  	{ url: '/change_paymentstatus',method: ctrls.vendingController.vendingPaymentStatus, 					type: 'PUT'},
	 
	 	{ url: '/cancel_booking',  method: ctrls.roomBookingController.cancelBooking, 					type: 'PUT'},

	 	{ url: '/add_alert', method: ctrls.alertController.addAlert, type: 'POST'},
	 	{ url: '/get_alerts', method: ctrls.alertController.listAlerts, type: 'GET'},
	 	{ url: '/update_notification', method: ctrls.alertController.updateNotification, type: 'PUT'},

	 	{ url: '/get_notification', method: ctrls.alertController.listNotification, type: 'GET'},
	  	
	]
};