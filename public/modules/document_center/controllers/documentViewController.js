"use strict";

app.controller('documentViewController', ['$scope','Detail',
	function($scope,Detail) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(Detail.detail,function (value,key) {
		    $scope[key] = value;
		});	
		console.log($scope);
	}
]);



