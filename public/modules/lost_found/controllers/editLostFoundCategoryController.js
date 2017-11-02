"use strict";

app.controller('editLostFoundCategoryController', ['$scope','globalRequest','catDetail','$mdDialog','toastService',
	function($scope,globalRequest,catDetail,$mdDialog,toastService) {
		
		/***********************************************
		* Take editable category value in current scope
		***********************************************/

		angular.forEach(catDetail,function (value,key) {
		    $scope[key] = value;
		});		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editlostFoundCat = function(){	
						
			var request =   {
				            	url    : window.__API_PATH.UPDATE_LOST_FOUND_CATEGORY,
				            	method : "PUT",
				            	data:{
				            		_id  		 	:  $scope._id,
				            		category_name   :  $scope.category_name
				            	}
				          	};

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getLostFoundCategory();
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