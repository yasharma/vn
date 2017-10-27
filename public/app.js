// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	,
			'ngFileUpload',
			'angularjs-datetime-picker',	
			'ui.bootstrap',	
			'ngSanitize',
			'angular-nicescroll',
			'cp.ngConfirm',
			'vAccordion',
			'ngCookies',
			//'rzModule',
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