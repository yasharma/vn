"use strict";

app.controller('step5Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,toastService) {	

		
		function isEmpty(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }

		    return JSON.stringify(obj) === JSON.stringify({});
		}
		

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};	

		/************************************************
		* Add new employee in list
		*************************************************/
		$scope.addedRooms = [];
		$scope.addNewRoom = function(){

			var errorRestrict = false;
			var errors = '<ul class="mdToast-error-list">';
			if(!$scope.newfield)
			{
				
				errors += '<li>Room name is required.</li>';
				errors += '<li>Room number is required.</li>';
				errorRestrict = true;

			} else {

				if(!$scope.newfield.newfield_room_name)
				{
					
					errors += '<li>Room name is required.</li>';
					errorRestrict = true;
				}

				if(!$scope.newfield.newfield_room_number)
				{
					errors += '<li>Room number is required.</li>';
					errorRestrict = true;
				}				

				
				angular.forEach($scope.addedRooms,function(value,key){
					
					if(value.room_number == $scope.newfield.newfield_room_number)
					{						
						errors += '<li>Room number already exists for this hotel.</li>';
						errorRestrict = true;
					}

				});	
				

			}	

			if(!errorRestrict)
			{					

				$scope.addedRooms.push({
					name          : $scope.newfield.newfield_room_name, 
					room_number   : $scope.newfield.newfield_room_number,
					capacity      : $scope.newfield.newfield_capacity,
					cost          : $scope.newfield.newfield_cost
				});
				
				$scope.newfield.newfield_room_name = '';
				$scope.newfield.newfield_room_number = '';
				$scope.newfield.newfield_capacity = '';
				$scope.newfield.newfield_cost = '';
			} else {
				var popup = {"message":errors,"class":""};
				toastService.errors(popup);
			}

			
		};


		/************************************************
		* Step5 form submit
		*************************************************/

		$scope.step5FormSubmit = function(){
			var selectedRooms = [];

			angular.forEach($scope.stepsCtrl.selected_room,function(value,key){
				if($scope.stepsCtrl.selected_room[key])
				{
					value.hotel_id = $rootScope.newProcessingHotel._id;					
					selectedRooms.push(value);
				}

			});
				
			
			if(selectedRooms.length > 0)
			{					

				 var hotelDataObj = {
				 		hotel_id     	   : $rootScope.newProcessingHotel._id,
				 		room_list 	       : selectedRooms	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_ROOMS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					
					if(response.status == 1)
					{	


						if($rootScope.nextStep)
						{
							var nextStep   = parseInt($routeParams.steps) +1;			
							$location.path('/dashboard/hotel-setup/'+nextStep);

						}	else {
							
							/************************************************
							* Mark steps completed
							*************************************************/

							var hotelrequest={
									url:window.__API_PATH.UPDATE_HOTEL,
									method:"PUT",
									data:{hotel_id : $rootScope.newProcessingHotel._id,step:'completed'}
								};

							globalRequest.jotCRUD(hotelrequest).then(function(hotelresponse){
								if(hotelresponse.status == 1)
								{	
									$location.path('/dashboard/hotel-setup');
								}	
							});
						}												
					}				

				});

			} else {
				
				var popup = {"message":"Please enter at least one employee.","class":""};
				toastService.errors(popup);
			}
			
		};			
			
	}
]);
