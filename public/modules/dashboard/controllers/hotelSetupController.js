"use strict";

app.controller('hotelSetupController', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService) {	

		/*********   Get hotel setup wizard current hotel  ************/

		var hotelData   = localStorageService.get('processingHotel');

		if(!hotelData)	
		{			
			/*********   Redirect if no hotel is in wizard  ************/

			$location.path('/dashboard/hotel-setup/1');
			//return false;

		} else {						

			/**************************************************
			* Check hotel blank steps
			***************************************************/

			globalRequest.getHotelStatus(hotelData._id).then(function(response){
				
				$rootScope.hotelStatus = response[0];

				$scope.selectedDepartment = response[0].departments;
				
				var completedStep = 1;
				var redirectPath = '/dashboard';

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

				$scope.ActiveStep = $routeParams.steps;

				if(completedStep != 'completed')
				{			

					/**************************************************
					* Redirect on step from where user left the process
					***************************************************/

					if($scope.ActiveStep)
					{
						if($scope.ActiveStep > completedStep)
						{						
							redirectPath = '/dashboard/hotel-setup/'+completedStep;
						} else if($scope.ActiveStep <= completedStep){

							redirectPath = '/dashboard/hotel-setup/'+$scope.ActiveStep;
						}
					} else {					
						redirectPath = '/dashboard/hotel-setup/'+completedStep;
					}
				} else {

					/***********************************************************			
					* Clear the wizard procession data from localStorageService
					* Redirect on dashboard if all steps completed
					***********************************************************/

				   localStorageService.remove('processingHotel');
				   redirectPath = '/dashboard';
				}


				$location.path(redirectPath);

				if(redirectPath == '/dashboard')
				{
					return false;
				}

			});
			
		}

		/*********   Get setup steps  ************/

		$scope.hotelStepList = window.__API_PATH.Hotel_STEPS;

		/***********************************************************			
		* Render page template according to step in route url			
		***********************************************************/
		$scope.ActiveStep = $routeParams.steps;

		if($scope.ActiveStep)
		{
			$scope.stepsTemplate = '/modules/dashboard/views/step'+$routeParams.steps+'.html';
		}
				
	}
]);
