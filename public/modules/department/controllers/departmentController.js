"use strict";

app.controller('departmentController', ['$scope','localStorageService','globalRequest','$mdDialog','toastService',
	function($scope,localStorageService,globalRequest,$mdDialog,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.department_name = "";		
			$scope.department_abbreviation = "";		
			$scope.department_desc = "";
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.departmentResult = "";
		};

		
		/************************************
		* Get department list
		*************************************/	
				
		globalRequest.getDepartments();

		/************************************
		* Add Department
		*************************************/		
		

		$scope.addDepartment = function(){	

			var departmentName	=	$scope.department_name;
			var Abbreviation	=	$scope.department_abbreviation;
			if(!Abbreviation){
				if(departmentName){
					var departmentNameArray = departmentName.match(/\b(\w)/g);
				    Abbreviation        = departmentNameArray.join('');
				} 				
			}

			var request = {
			            url:window.__API_PATH.ADD_DEPARTMENT,
			            method:"POST",
			            data:{
			            	hotel_id      	   :  hotel._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,
			            	bgcolor       	   :  $scope.bgcolor,
			            	description        :  $scope.department_desc
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.departmentResult = response;
				$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.departmentList)
			 		{
			 			$scope.departmentList = [];
			 		}
			 		$scope.departmentList.push(response.result);
			 		
			 		$scope.department_name = $scope.department_abbreviation = $scope.department_desc = '';			 		
			 	}
			 });

		};


		/*****************************************
		* Open edit department
		*****************************************/	

		$scope.openEditDepartment = function(detail){
				$mdDialog.show({
					controller: 'editDepartmentController',
					templateUrl: '/modules/department/views/edit_department.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{deptDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete department
		*****************************************/	

		$scope.removeDepartment = function(detail){

			var request={
				url:window.__API_PATH.DELETE_DEPARTMENT,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
		
	}
]);





