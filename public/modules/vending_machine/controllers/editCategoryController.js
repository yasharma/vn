"use strict";

app.controller('editCategoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','catDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,catDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(catDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editInvtCat = function(){
	
						
			var request = {
			            url    : window.__API_PATH.UPDATE_INVENTORY_CATEGORY,
			            method : "PUT",
			            data:{
			            	_id  		 			  :  $scope._id,
			            	inventory_category_name   :  $scope.inventory_category_name
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.invtEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getVendingCategory();
			 	}

			 });
		};
		
	}
]);



