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
		
		dashboardFactory.get('/api/get_hotels','').then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.data;
			}
		});
	}
]);


