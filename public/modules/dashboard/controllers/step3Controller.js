"use strict";

app.controller('step3Controller', ['$scope','$routeParams','$location','localStorageService','globalRequest',
	function($scope,$routeParams,$location,localStorageService,globalRequest) {	

		var processingHotel = localStorageService.get('processingHotel');

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
		if($scope.selectedDepartment.length > 0)
		{
			$scope.defaultDepartment = $scope.selectedDepartment;
		} else {
			$scope.defaultDepartment = window.__API_PATH.DEFAULT_DEPARTMENT;
		}
		


		/*****************************************************
		* Append new blank field
		*****************************************************/

		$scope.blankFieldCount = [];		
		$scope.addmore = function(){			
			$scope.blankFieldCount.push({department_name:"",abbreviation:""});		
		};

		/************************************************
		* Delte Last element
		*************************************************/

		$scope.deleteDeptRow = function(dept,iterationList,ind){

			$scope[iterationList].splice(ind, 1);

			if(iterationList == 'defaultDepartment'){
				delete $scope.step3Ctlr.department_name[dept.department_name]; 
				delete $scope.step3Ctlr.abbreviation[dept.department_name]; 
			}

			if(iterationList == 'blankFieldCount'){
				delete $scope.step3Ctlr.department_name[ind]; 
				delete $scope.step3Ctlr.abbreviation[ind];
			}

			 
		};


		/************************************************
		* Step3 form submit
		*************************************************/

		$scope.step3FormSubmit = function(){

	
			var removeKeyFromArray = [];
			for (var key in $scope.step3Ctlr.department_name) {
				
				if($scope.step3Ctlr.department_name[key])
				{
					removeKeyFromArray.push({
						hotel_id        : processingHotel._id,
						department_name : $scope.step3Ctlr.department_name[key],
						abbreviation    : $scope.step3Ctlr.abbreviation[key]
					});
				}
								
			}	
	
			$scope.departmentResult = {class:"",message:"",status:""};

			if(removeKeyFromArray.length > 0)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		hotel_id     	       : processingHotel._id,
				 		departments_list 	   : removeKeyFromArray	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_DEPARTMENTS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){				
											
					if(response.status == 1)
					{
						var nextStep   = parseInt($routeParams.steps) +1;					
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$scope.departmentResult.class   = 'Autherror';
				$scope.departmentResult.message = 'Please enter at least one department.';
				$scope.departmentResult.status  = 1;
			}
		};
			
				
	}
]);