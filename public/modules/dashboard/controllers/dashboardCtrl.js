"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardController', ['$scope','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','toastService',
	function($scope,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,toastService) {	

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

		/*var data = {
				"user_id":localStorageService.get('user')._id
			};
		var request={
				url:window.__API_PATH.GET_HOTELS,
				method:"POST",
				data:data
			};
		
		dashboardFactory.hotelCRUD(request).then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.result;
			}
		});*/


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.redirectToJot = function(hotelID,hotelName){

			var hotelData  = {
					'hotel_id'   :hotelID,
					'hotel_name' :hotelName
				}
			localStorageService.set('hotel', hotelData);			
			$location.path('/dashboard/jot');
		};


		/*
		* Function
		*
		* Delete hotels
		*
		*/
		
		
		$scope.deleteHotel = function(event,hotelID){

			var storedHotelID = localStorageService.get('hotel');		
			if(storedHotelID && storedHotelID.hotel_id == hotelID)
			{
				localStorageService.remove('hotel');
			}	

			var data = {
				"hotel_id":hotelID
			};
			var request={
					url:window.__API_PATH.delete_hotel,
					method:"POST",
					data:data
				};
			
			/*dashboardFactory.hotelCRUD(request).then(function(response){
				if(response.error){
				} else {				
					if(response.success)
					{
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
					}
				}
			});*/		
		};


	}
]);
