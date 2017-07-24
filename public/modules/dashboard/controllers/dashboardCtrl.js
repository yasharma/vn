"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,AuthSrv,$mdDialog) {	

		/*
		* Function
		*
		* Open popup to add new hotel.
		*
		*/

		$scope.openAddHotelPopup = function(){
			$mdDialog.show({
				controller:'dashboardPopupController',	          
				templateUrl: '/modules/dashboard/views/add-new-hotel.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
			})
			.then(function(answer) {
			}, function() {

			});

		};



		/*
		* Factory method
		*
		* Display hotels
		*
		*/
		
		dashboardFactory.get(GET_HOTELS_API_URL,'').then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.data;
			}
		});


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.redirectToJot = function(){
			
			$location.path('/dashboard/jot');
		};


	}
]);
