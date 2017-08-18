"use strict";

app.controller('employeeController', ['$scope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','$route','toastService',
	function($scope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,$route,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.first_name = "";
			$scope.last_name = "";
			$scope.user_name = "";
			$scope.email = "";
			$scope.department = "";
			$scope.position = "";
			$scope.status = "";
			$scope.address = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
		}

		$scope.blankFields = function(){
			$scope.blank();
			$scope.memberResult = "";
		}

		/************************************
		* Get department list
		*************************************/			
		
		var request = {
		            url:window.__API_PATH.GET_DEPARTMENTS,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){				
		 	$scope.departmentList = response.result;
		 });
		
		/************************************
		* Get employee list
		*************************************/		
		
			
			var request = {
			            url:window.__API_PATH.STAFF_SUGGESTION,
			            method:"GET",
			            params:{
			            	hotel_id    :  hotel._id		
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				
			 	$scope.membersList = response.result;
			});

		
		/************************************
		* Add employee
		*************************************/		
		

		$scope.addEmployee = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_MEMBER,
			            method:"POST",
			            data:{
			            	hotel_id      :  hotel._id,
			            	first_name    :  $scope.first_name,
			            	last_name     :  $scope.last_name,
			            	user_name     :  $scope.user_name,
			            	email         :  $scope.email,
			            	status 		  :  status,
			            	department    :  $scope.department,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	role 	      :  'staff',
			            	password      :  '123456',
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.memberResult = response;
			 	$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.membersList)
			 		{
			 			$scope.membersList = [];
			 		}
			 		$scope.membersList.push(response.result);
			 	}
			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
				$mdDialog.show({
					controller: 'editEmployeeController',
					templateUrl: '/modules/employee/views/edit_employee.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{empDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

			};


		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeEmployee = function(detail){

			var request={
				url:window.__API_PATH.DELETE_MEMBER,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
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

	    /*****************************************
		* Profile image upload
		*****************************************/

	    $scope.viewDetail = function(){

	    };
		
	}
]);



