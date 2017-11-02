"use strict";

app.controller("featureController",['$scope','$rootScope','globalRequest','localStorageService','$mdDialog',
	function($scope,$rootScope,globalRequest,localStorageService,$mdDialog){

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;


		/**************************************
		* Update item list
		**************************************/

		$scope.updateItemList = function(item){

			var itemIndex = $scope.boards.indexOf(item);

			if(itemIndex > -1)
			{
				$scope.boards.splice(itemIndex, 1);
			} else {
				$scope.boards.push(item);
			}

			var hotelDataObj = {
				 		hotel_id     	   : $rootScope.activeHotelData._id,
				 		jot_types 		   : $scope.boards
				};

			var request={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:hotelDataObj
				};

			globalRequest.jotCRUD(request).then(function(response){	
				localStorageService.set('hotel',response.result);
				$scope.$digest();
				$scope.$apply();
				/*window.location.reload();*/
			});


		};
		
	}
]);