"use strict";

app.controller('detailViewController', ['$scope','viewDetail',
	function($scope,viewDetail) {
		
		/***********************************************
		* Pass report detail value in current scope
		***********************************************/
		angular.forEach(viewDetail,function (value,key) {
		    $scope[key] = value;
		});	


	}
]);



