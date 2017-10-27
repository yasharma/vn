"use strict";

app.controller('step3Controller', ['$scope','$rootScope','$routeParams','$location','localStorageService','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,localStorageService,globalRequest,toastService) {	


		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};


		/************************************************************	
		* Default department list
		************************************************************/
		if($scope.selectedDepartment)
		{
			if($scope.selectedDepartment.length > 0)
			{
				$scope.defaultDepartment = $scope.selectedDepartment;
			} else {
				$scope.defaultDepartment = window.__API_PATH.DEFAULT_DEPARTMENT;
			}

		} else {
			$scope.defaultDepartment = window.__API_PATH.DEFAULT_DEPARTMENT;
		}		
		

		/************************************************
		* Add new department into default list
		*************************************************/

		$scope.addNewDepartment = function(){

			var errors = '<ul class="mdToast-error-list">';
			var errorRestrict = false;

			/************** Check empty field  **************/

			if(!$scope.new_department_name)
			{
				
				errors += '<li>Department name is required.</li>';
				errorRestrict = true;
			}

			if(!$scope.new_abbreviation)
			{
				errors += '<li>Abbreviation is required.</li>';
				errorRestrict = true;
			}

			/************** Check deplicate value  **************/

			angular.forEach($scope.defaultDepartment,function(value,key){
				if(value.department_name == $scope.new_department_name)
				{
					
					errors += '<li>Department name already exists.</li>';
					errorRestrict = true;
				}

				if(value.abbreviation == $scope.new_abbreviation)
				{					
					errors += '<li>Abbreviation already exists.</li>';
					errorRestrict = true;
				}
			});

			/************** Create array  **************/

			if(!errorRestrict)
			{
				$scope.defaultDepartment.push({
					department_name : $scope.new_department_name,
					abbreviation : $scope.new_abbreviation,
					checked:true
				});
				$scope.new_department_name = '';
				$scope.new_abbreviation = '';
			} else {
				var popup = {"message":errors,"class":""};
				toastService.errors(popup);
			}

		};


		/************************************************
		* Step3 form submit
		*************************************************/

		$scope.step3FormSubmit = function(){
			$rootScope.hoteljotLoader = true;

			var removeKeyFromArray = [];
			for (var key in $scope.step3Ctlr.department_select) {
				if($scope.step3Ctlr.department_select[key])
				{
					$scope.step3Ctlr.department_select[key].hotel_id =  $rootScope.newProcessingHotel._id;
					removeKeyFromArray.push($scope.step3Ctlr.department_select[key]);
				}
								
			}				

			if(removeKeyFromArray.length > 0)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		hotel_id     	       : $rootScope.newProcessingHotel._id,
				 		departments_list 	   : removeKeyFromArray	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_DEPARTMENTS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){				
					$rootScope.hoteljotLoader = false;						
					if(response.status == 1)
					{
						var nextStep   = parseInt($routeParams.steps) +1;					
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$rootScope.hoteljotLoader = false;				
				var popup = {"message":"Please select at least one department.","class":""};
				toastService.errors(popup);
			}
		};
			
				
	}
]);