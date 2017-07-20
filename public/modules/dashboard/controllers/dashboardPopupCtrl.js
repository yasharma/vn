"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardPopupController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,AuthSrv,$mdDialog) {	

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/

		$scope.close = function(){
			 $mdDialog.cancel();
		};

		/*
		* Factory method
		*
		* Add new hotel data
		*
		*/

		var hotelDataObj  =  $scope;

		dashboardFactory.addNewHotel('/api/add_hotel',hotelDataObj).then(function(response){
			console.log(response);
			if(response.error){

			} else {

			}

		});


		/*
		* Factory method
		*
		* Display hotels
		*
		*/

		dashboardFactory.hotelView('/api/display_hotel','').then(function(response){
			if(response.error){

			} else {

			}

		});
	}
]);


