"use strict";

app.controller('step4Controller', ['$scope','$rootScope','$routeParams','$location','localStorageService','globalRequest',
	function($scope,$rootScope,$routeParams,$location,localStorageService,globalRequest) {	

		var processingHotel = localStorageService.get('processingHotel');


		/************************************************
		* Create iteration for department
		*************************************************/

		$scope.defaultBlankField = window.__API_PATH.EMPLOYEE_BLANK_FIELD;
		function getNumberInArray(data){
			return new Array(data);
		}
		
		$scope.getIteration = [];
		angular.forEach($scope.selectedDepartment,function(value,kay){
			$scope.getIteration[value._id] =  getNumberInArray($scope.defaultBlankField);
		});	

		/*****************************************************
		* Append blank field in list of particular department
		*****************************************************/	

		$scope.addmore = function(deptID){
			$scope.getIteration[deptID].push(1);

		};


		/************************************************
		* Delte Last element
		*************************************************/

		$scope.deleteEmpRow = function(deptID,ind){
			$scope.stepsCtrl[deptID+ind] = '';
			$scope.getIteration[deptID].splice(ind, 1);
			//var elem = document.getElementById(deptID+ind);
			//elem.parentNode.removeChild(elem);			
		};
			

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};	


		/************************************************
		* Step4 form submit
		*************************************************/

		$scope.step4FormSubmit = function(){
			var selectedEmployee = [];
			angular.forEach($scope.stepsCtrl,function(value,key){
				if(value.first_name)
				{
					value.hotel_id = processingHotel._id;
					value.status   = 'inactive';
					value.password = '123456';
					selectedEmployee.push(value);
				}
			});

			$scope.empResult = {class:"",message:"",status:""};		


			if(selectedEmployee.length > 0)
			{
						

				 var hotelDataObj = {
				 		hotel_id     	       : processingHotel._id,
				 		member_list 	       : selectedEmployee	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_MEMBERS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					$scope.empResult = response;
					if(response.status == 1)
					{	

						/************************************************
						* Mark steps completed
						*************************************************/

						var hotelrequest={
								url:window.__API_PATH.UPDATE_HOTEL,
								method:"PUT",
								data:{hotel_id : processingHotel._id,step:'completed'}
							};
						globalRequest.jotCRUD(hotelrequest).then(function(hotelresponse){
							if(hotelresponse.status == 1)
							{	
								$location.path('/dashboard/hotel-setup');
							}	
						});						
					}				

				});

			} else {
				$scope.empResult.class   = 'Autherror';
				$scope.empResult.message = 'Please enter at least one employee.';
				$scope.empResult.status  = 1;
			}
			
		};

			
			
	}
]);
