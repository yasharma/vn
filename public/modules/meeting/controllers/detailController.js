"use strict";

app.controller('detailController', ['$scope','infoDetail','globalRequest',
	function($scope,infoDetail,globalRequest) {


		/************************************
		* Get facilities
		*************************************/

		$scope.roomStyleList = window.__API_PATH.ROOM_STYLE;

		/************************************
		* Get facilities
		*************************************/			
		
		globalRequest.getFacilityList();
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(infoDetail,function (value,key) {
		    $scope[key] = value;
		});	

		console.log($scope);
	}
]);



