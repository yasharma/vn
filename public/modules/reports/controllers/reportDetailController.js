"use strict";

app.controller('reportDetailController', ['$scope','$rootScope','globalRequest','$mdDialog','reportDetail',
	function($scope,$rootScope,globalRequest,$mdDialog,reportDetail) {
		
		console.log(reportDetail);
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(reportDetail,function (value,key) {
		    $scope[key] = value;
		});	
	}
]);



