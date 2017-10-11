"use strict";

app.controller('editEmployeeController', ['$scope','$rootScope','globalRequest','$timeout','empDetail','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$timeout,empDetail,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;

		
		/***********************************************
		* Take employee detail in current scope
		***********************************************/
		

		$scope.departmentList = empDetail.prevScope.departmentList;

		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.profile_image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image;
		} else {
			$scope.image = '/assets/images/default_profile.png';
		}

		/************************************
		* Edit employee
		*************************************/		
		

		$scope.editEmployee = function(){
	
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.UPDATE_MEMBER,
			            method:"PUT",
			            data:{
			            	_id  		  :  $scope._id,
			            	first_name    :  $scope.first_name || null,
			            	last_name     :  $scope.last_name || null,
			            	contact_number:  $scope.contact_number || null,
			            	email         :  $scope.email || null,
			            	status 		  :  status,
			            	departments   :  $scope.departments,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	address 	  :  $scope.address
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getStaff();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {

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
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	

			globalRequest.uploadFiles($rootScope.activeHotelData._id,'profile',files).then(function (response) {
	                $timeout(function () {	                  
	                   $scope.profileimages = response.result[0].filename;
	                });
	            });	      

	    };
		
	}
]);



