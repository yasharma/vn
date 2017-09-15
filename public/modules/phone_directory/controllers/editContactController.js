"use strict";

app.controller('editContactController', ['$scope','localStorageService','globalRequest','Upload','$timeout','contactDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,contactDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');


		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/


		angular.forEach(contactDetail.detail,function (value,key) {
		    
		     if(key == 'tags')
			{
				$scope.ctrl.itemTagModel = value;
			} else {
				$scope[key] = value;
			}
		});


		/************************************
		* Edit employee
		*************************************/		
		

		$scope.editContactNumber = function(){	
			
			var request = {
		            url:window.__API_PATH.UPDATE_CONTACT,
		            method:"PUT",
		            data:{
		            	_id      	   :   $scope._id,
		            	first_name    	:  $scope.first_name,
		            	last_name       :  $scope.last_name,
		            	tags        	:  $scope.ctrl.itemTagModel,
		            	email        	:  $scope.email,
		            	contact 		:  $scope.contact
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.contactEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getContactList();
			 	}

			 });

		};
		
		
	}
]);



