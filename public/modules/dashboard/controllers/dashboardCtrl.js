"use strict";

app.controller('dashboardController', ['$scope','$location','localStorageService','$rootScope','$mdDialog','toastService','globalRequest',
	function($scope,$location, localStorageService,$rootScope,$mdDialog,toastService,globalRequest) {


		/*
		*
		* Get hotels list
		*
		*/
		
		globalRequest.getHotels();



		/*
		* Function
		*
		* Open popup to add new hotel.
		*
		*/


		$scope.openHotelSetupWizard = function(){
			localStorageService.remove('processingHotel');
			$location.path('/dashboard/hotel-setup/1');	
		};		


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.redirectToJot = function(hotel){
			
			globalRequest.getHotelStatus(hotel._id).then(function(response){				

				var completedStep;	

				if(response[0].step != 'completed')
				{
					if(response[0].jot_types.length == 0)
					{
						completedStep = 2;

					} else if(response[0].departments.length == 0) {
						completedStep = 3;

					} else if(response[0].members.length == 0) {
						completedStep = 4;
					} else {
						completedStep = 'completed';
					}
				} else {
					completedStep = 'completed';
				}



				if(completedStep == 'completed')
				{
					localStorageService.set('hotel', hotel);			
					$location.path('/dashboard/hotelboard');
				} else {
					localStorageService.set('processingHotel',hotel);
					$location.path('/dashboard/hotel-setup');
				}


			});
		};


		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openHotelEditForm = function($event, detail){
			$event.stopPropagation();			
			$mdDialog.show({
				controller: 'hotelEditController',
				templateUrl: '/modules/dashboard/views/edit_hotel.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{hotelDetail: detail}				
			}).then(function(answer) {}, function() {});

		};


		/*
		* Function
		*
		* Delete hotels
		*
		*/
		
		
		$scope.deleteHotel = function(hotelID,index){
			
				
			if($rootScope.activeHotelData && $rootScope.activeHotelData._id == hotelID)
			{
				localStorageService.remove('hotel');
			}	

			var data = {
				"hotel_id":hotelID
			};
			var request={
					url:window.__API_PATH.DELETE_HOTEL,
					method:"DELETE",
					params:data
				};
			
			globalRequest.jotCRUD(request).then(function(response){
				if(response.status == 1)
				{
					$scope.hotels.splice(index, 1);
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
				}
			});		


		};


	}
]);
