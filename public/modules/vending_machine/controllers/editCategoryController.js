"use strict";

app.controller('editCategoryController', ['$scope','globalRequest','$timeout','catDetail','$mdDialog','toastService',
	function($scope,globalRequest,$timeout,catDetail,$mdDialog,toastService) {
		
		/***********************************************
		* Take editable category value in current scope
		***********************************************/

		angular.forEach(catDetail.detail,function (value,key) {
		    $scope[key] = value;
		});		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editInvtCat = function(){	
						
			var request =   {
				            	url    : window.__API_PATH.UPDATE_INVENTORY_CATEGORY,
				            	method : "PUT",
				            	data:{
				            		_id  		 			  :  $scope._id,
				            		inventory_category_name   :  $scope.inventory_category_name
				            	}
				          	};

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getVendingCategory();
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