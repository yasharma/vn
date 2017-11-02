"use strict";

app.controller('categoryController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		
		/*******************************************
		* Redirect user if lost found is disabled
		********************************************/
		$rootScope.redirectSettingsPage('lost_found');
		
		/************************************
		* Get Category list
		*************************************/			
		
		globalRequest.getLostFoundCategory();

		
		/************************************
		* Add category
		*************************************/		
		

		$scope.addlostFoundCat = function(){
		
			var request = {
			            url:window.__API_PATH.ADD_LOST_FOUND_CATEGORY,
			            method:"POST",
			            data:{
			            	hotel_id      	:  $rootScope.activeHotelData._id,
			            	category_name   :  $scope.category_name
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.category_name = '';
			 		if(!$scope.lostFoundCategoryList)
			 		{
			 			$scope.lostFoundCategoryList = [];
			 		}
			 		$scope.lostFoundCategoryList.push(response.result);

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
					controller: 'editLostFoundCategoryController',
					templateUrl: '/modules/lost_found/views/edit_category.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{catDetail:detail}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete category
		*****************************************/	

		$scope.removeCat = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_LOST_FOUND_CATEGORY,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.lostFoundCategoryList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};	
		
	}
]);