"use strict";

app.controller('headerController', ['$scope','$location','localStorageService','headerFactory','$rootScope','$mdDialog','$route',
	function($scope,$location,localStorageService,headerFactory,$rootScope,$mdDialog,$route) {	


		/*
		* Factory method
		*
		* Display hotels
		*
		*/
		
		var data = {
				"user_id":localStorageService.get('user')._id
			};
		var request={
				url:window.__API_PATH.GET_HOTELS,
				method:"POST",
				data:data
			};
		
		

		headerFactory.get(request).then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.result;				
			}
		});


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		$scope.hotel = localStorageService.get('hotel');
		$scope.changeJotView = function(hotelID,hotelName){
			var hotelData  = {
				'hotel_id':hotelID,
				'hotel_name':hotelName
			};
			localStorageService.set('hotel', hotelData);
			$scope.hotel = hotelData;
			$route.reload();
		};




		/**************************************
		* Open jot popup
		**************************************/

		$scope.quickTaskPopup = function(){
			$mdDialog.show({
				controller: 'createJotCtrl',
				templateUrl: '/modules/jot/views/hotel-quick-task.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
			}).then(function(answer) {}, function() {});

		};


	}
]);
