"use strict";

app.controller('editPositionController', ['$scope','globalRequest','positionDetail','$mdDialog','toastService',
	function($scope,globalRequest,positionDetail,$mdDialog,toastService) {
				
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(positionDetail,function (value,key) {
		    $scope[key] = value;
		});
		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editPosCat = function(){	
						
			var request = {
			            url    : window.__API_PATH.UPDATE_POSITION,
			            method : "PUT",
			            data:{
			            	_id        :  $scope._id,
			            	position   :  $scope.position
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getPositionList();
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
		
	}
]);



