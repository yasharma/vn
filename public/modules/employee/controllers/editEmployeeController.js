"use strict";

app.controller('editEmployeeController', ['$scope','localStorageService','globalRequest','Upload','$timeout','empDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,empDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');
		$scope.position_list = window.__API_PATH.POSITION;

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		

		$scope.departmentList = empDetail.prevScope.departmentList;

		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.profile_image[0])
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image[0];
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
			            	department    :  $scope.department,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	address 	  :  $scope.address
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.memberEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getStaff();
			 	}

			 });

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'profile',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   console.log(response);
	                   $scope.profileimages = response.data.result[0].filename;
	                   
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.profileProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };
		
	}
]);



