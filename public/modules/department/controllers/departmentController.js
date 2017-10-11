"use strict";

app.controller('departmentController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.department_name = "";		
			$scope.department_abbreviation = "";		
			$scope.department_desc = "";
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
			            	hotel_id      	   :  $rootScope.activeHotelData._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,			            	
			            	description        :  $scope.department_desc
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
				
			 	if(response.status == 1)
			 	{
			 		$scope.blank();
			 		if(!$scope.departmentList)
			 		{
			 			$scope.departmentList = [];
			 		}
			 		$scope.departmentList.push(response.result);
			 		
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);		 		
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
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

		$scope.removeDepartment = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_DEPARTMENT,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.departmentList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
		
	}
]);





