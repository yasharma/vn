"use strict";

app.controller('editDepartmentController', ['$scope','localStorageService','globalRequest','deptDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,deptDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(deptDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		/************************************
		* Edit employee
		*************************************/		
		

		$scope.updateDepartment = function(){
			

			var departmentName	=	$scope.department_name;
			var Abbreviation	=	$scope.abbreviation;
			if(!Abbreviation){
				if(departmentName){
					var departmentNameArray = departmentName.match(/\b(\w)/g);
				    Abbreviation        = departmentNameArray.join('');
				} 				
			}

			var request = {
			            url:window.__API_PATH.UPDATE_DEPARTMENT,
			            method:"PUT",
			            data:{
			            	_id      	       :  $scope._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,
			            	bgcolor       	   :  $scope.bgcolor,
			            	description        :  $scope.description
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.departmentEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getDepartments();

			 	}
			 	
			});

		};		
		
	}
]);



