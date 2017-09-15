"use strict";

app.controller('inventoryCatController', ['$scope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','$route','toastService',
	function($scope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,$route,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.inventory_category_name = "";		
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.inverntoryResult = "";
		};



		/************************************
		* Get Category list
		*************************************/			
		
		globalRequest.getVendingCategory();

		
		/************************************
		* Add category
		*************************************/		
		

		$scope.addInvtCat = function(){
		
			var request = {
			            url:window.__API_PATH.ADD_INVENTORY_CATEGORY,
			            method:"POST",
			            data:{
			            	hotel_id      			  :  hotel._id,
			            	inventory_category_name   :  $scope.inventory_category_name
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.invtResult = response;
			 	$scope.blank();

			 	if(response.status == 1)
			 	{
			 		if(!$scope.invtList)
			 		{
			 			$scope.invtList = [];
			 		}
			 		$scope.invtList.push(response.result);
			 	}
			 });

		};

		/*****************************************
		* Open edit category
		*****************************************/	

		$scope.openEditForm = function(detail){
			
				$mdDialog.show({
					controller: 'editCategoryController',
					templateUrl: '/modules/vending_machine/views/edit_item_category.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{catDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete category
		*****************************************/	

		$scope.removeCat = function(detail){

			var request={
				url:window.__API_PATH.DELETE_INVENTORY_CATEGORY,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		
		
	}
]);



