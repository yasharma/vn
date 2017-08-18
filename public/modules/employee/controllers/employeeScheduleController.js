"use strict";

app.controller('employeeScheduleController', ['$scope','localStorageService','globalRequest',
	function($scope,localStorageService,globalRequest) {
		var hotel = localStorageService.get('hotel');

		
		/************************************
		* Get employee list
		*************************************/			
			
			var request = {
			            url:window.__API_PATH.STAFF_SUGGESTION,
			            method:"GET",
			            params:{
			            	hotel_id    :  hotel._id		
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){				
			 	$scope.membersList = response.result;
			 });		
		
	}
]);



