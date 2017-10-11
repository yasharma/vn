"use strict";

app.controller('editDepartmentController', ['$scope','globalRequest','deptDetail','$mdDialog','toastService',
	function($scope,globalRequest,deptDetail,$mdDialog,toastService) {
		

		
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
			            	description        :  $scope.description
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getDepartments();
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
		
	}
]);



