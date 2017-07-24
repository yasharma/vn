// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	
			])

.config(['localStorageServiceProvider',
	function (localStorageServiceProvider) {
	  	localStorageServiceProvider
	    .setPrefix('hoteljotApp');
	}
]);

app.run(['$log',function($log){
	$log.info("Application is running");
}]);



/********************************************************************
* Global variable and api url
********************************************************************/

/*
* Login 
*/

var LOGIN_API_URL   = '/api/login';


/*
* Register 
*/

var REGISTER_API_URL   = '/api/register';

/*
* Hotels 
*/
var GET_HOTELS_API_URL  = '/api/get_hotels';
var ADD_HOTEL_API_URL   = '/api/add_hotel';

/*
* Jot 
*/

var JOT_TYPES 	   = [{name:'issue',class:'active'},{name:'message',class:''},{name:'task',class:''},{name:'note',class:''},{name:'lost & found',class:''},{name:'meeting room',class:''},{name:'vending',class:''}]; 

var CREATE_JOT_API_URL = '/api/create_jot';
var GET_JOT_URL	       = '/api/get_jot';



