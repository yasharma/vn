"use strict";

app.controller('jotController', ['$scope','$location','jotFactory','$rootScope','$mdDialog','localStorageService',
	function($scope,$location,jotFactory,$rootScope,$mdDialog,localStorageService) {


		/**************************************
		* Redirect if hotel not selected
		**************************************/
		
		var hotel = localStorageService.get('hotel');

		if(!hotel || hotel == ""){
			$location.path('/dashboard');
		}

		/**************************************
		* Get jot list
		**************************************/
				
		var request= {
			url:window.__API_PATH.GET_JOT,
			method:"GET",
			params:{hotel_id :hotel.hotel_id}
		};	

		jotFactory.jotCRUD(request)
		.then(function(response){
			$rootScope.jots = response.result;
		});

		
	}
]);

