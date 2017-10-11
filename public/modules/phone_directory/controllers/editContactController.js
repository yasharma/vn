"use strict";

app.controller('editContactController', ['$scope','globalRequest','contactDetail','$mdDialog','toastService',
	function($scope,globalRequest,contactDetail,$mdDialog,toastService) {


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
				var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getContactList();
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



