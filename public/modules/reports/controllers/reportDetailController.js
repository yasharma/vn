"use strict";

app.controller('reportDetailController', ['$scope','$rootScope','globalRequest','$mdDialog','reportDetail',
	function($scope,$rootScope,globalRequest,$mdDialog,reportDetail) {
		
		/*******************************************
		* Redirect user if vending machine is disabled
		********************************************/
		$rootScope.redirectSettingsPage('vending_machine');
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(reportDetail,function (value,key) {
		    $scope[key] = value;
		});	
	}
]);



