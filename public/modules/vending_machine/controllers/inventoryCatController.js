"use strict";

app.controller('inventoryCatController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		
		
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
			            	hotel_id      			  :  $rootScope.activeHotelData._id,
			            	inventory_category_name   :  $scope.inventory_category_name
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.inventory_category_name = '';
			 		if(!$scope.invtList)
			 		{
			 			$scope.invtList = [];
			 		}
			 		$scope.invtList.push(response.result);

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

		$scope.removeCat = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_INVENTORY_CATEGORY,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.invtList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};	
		
	}
]);