"use strict";

app.controller('inventoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','$mdDialog','$route','toastService',
	function($scope,localStorageService,globalRequest,Upload,$timeout,$mdDialog,$route,toastService) {
		var hotel = localStorageService.get('hotel');


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.item_name = "";
			$scope.quantity = "";
			$scope.price = "";
			$scope.category = "";
			$scope.sku_code = "";
			$scope.profile_image = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
		}

		$scope.blankFields = function(){
			$scope.blank();
			$scope.inverntoryResult = "";
		}

		/************************************
		* Get item list
		*************************************/	
			var request = {
			            url:window.__API_PATH.GET_ITEMS,
			            method:"GET",
			            params:{
			            	hotel_id    :  hotel._id		
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){				
			 	$scope.inverntoryList = response.result;
			});


		/************************************
		* Get Category list
		*************************************/			
			
		var request = {
		            url:window.__API_PATH.GET_INVENTORY_CATEGORY,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){				
		 	$scope.inventCatList = response.result;
		});

		
		/************************************
		* Add item
		*************************************/		
		

		$scope.addItem = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_ITEM,
			            method:"POST",
			            data:{
			            	hotel_id     :  hotel._id,
			            	item_name    :  $scope.item_name,
			            	category     :  $scope.category,
			            	price        :  $scope.price,
			            	sku_code     :  $scope.sku_code,
			            	quantity 	 :  $scope.quantity,		            
			            	image 	     :  $scope.profileimages		            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.inverntoryResult = response;
			 	$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.inverntoryList)
			 		{
			 			$scope.inverntoryList = [];
			 		}

			 		$scope.inverntoryList.push(response.result);
			 	}
			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
				$mdDialog.show({
					controller: 'editInventoryController',
					templateUrl: '/modules/vending_machine/views/edit_inventory.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{invDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

			};


		/*****************************************
		* Delete Item
		*****************************************/	

		$scope.removeItem = function(detail){
			var request={
				url:window.__API_PATH.DELETE_ITEM,
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
	                    folder_name  : 'inventory',	                    
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

	
		
	}
]);



