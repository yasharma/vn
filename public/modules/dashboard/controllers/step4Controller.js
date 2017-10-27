"use strict";

app.controller('step4Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','toastService',
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
		//$scope.addedEmployee = [];
		$scope.addNewEmp = function(){

			var errorRestrict = false;
			var errors = '<ul class="mdToast-error-list">';
			if(!$scope.newfield)
			{
				
				errors += '<li>First name is required.</li>';
				errors += '<li>Last name is required.</li>';
				errors += '<li>Contact number is required.</li>';
				errors += '<li>Please select department.</li>';
				errorRestrict = true;

			} else {

				if(!$scope.newfield.newfield_first_name)
				{
					
					errors += '<li>First name is required.</li>';
					errorRestrict = true;
				}

				if(!$scope.newfield.newfield_last_name)
				{
					errors += '<li>Last name is required.</li>';
					errorRestrict = true;
				}				

				if(!$scope.newfield.newfield_contact_number)
				{
					errors += '<li>Contact number is required.</li>';
					errorRestrict = true;
				}

				if(!$scope.newfield.newDepartment)
				{
					errors += '<li>Please select department.</li>';
					errorRestrict = true;
				}

				
				angular.forEach($scope.addedEmployee,function(value,key){
					
					if(value.email == $scope.newfield.newfield_email)
					{						
						errors += '<li>Email address already exists for this hotel.</li>';
						errorRestrict = true;
					}

					if(value.contact_number == $scope.newfield.newfield_contact_number)
					{						
						errors += '<li>Contact Number already exists for this hotel.</li>';
						errorRestrict = true;
					}

				});	
				

			}	

			if(!errorRestrict)
			{					

				$scope.addedEmployee.push({
					first_name     : $scope.newfield.newfield_first_name, 
					last_name      : $scope.newfield.newfield_last_name,
					department     : $scope.newfield.newDepartment,
					email          : $scope.newfield.newfield_email,
					contact_number : $scope.newfield.newfield_contact_number, 
				});
				
				$scope.newfield.newfield_first_name = '';
				$scope.newfield.newfield_last_name = '';
				$scope.newfield.newDepartment = '';
				$scope.newfield.newfield_email = '';
				$scope.newfield.newfield_contact_number = '';
			} else {
				var popup = {"message":errors,"class":""};
				toastService.errors(popup);
			}

			
		};


		/************************************************
		* Step4 form submit
		*************************************************/

		$scope.step4FormSubmit = function(){
			console.log($rootScope.nextStep);
			var selectedEmployee = [];
			angular.forEach($scope.stepsCtrl.selected_emp,function(value,key){
				if($scope.stepsCtrl.selected_emp[key])
				{
					value.hotel_id = $rootScope.newProcessingHotel._id;
					var departmentlist = [];
					angular.forEach(value.department,function(depValue,deptKey){
						departmentlist.push(depValue.abbreviation);
					});
					value.department   = departmentlist;
					selectedEmployee.push(value);
				}

			});
		
			
			if(selectedEmployee.length > 0)
			{					

				 var hotelDataObj = {
				 		hotel_id     	       : $rootScope.newProcessingHotel._id,
				 		member_list 	       : selectedEmployee	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_MEMBERS,
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
