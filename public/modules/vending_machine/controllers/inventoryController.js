"use strict";

app.controller('inventoryController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,toastService) {
		
		/*******************************************
		* Redirect user if vending machine is disabled
		********************************************/
		$rootScope.redirectSettingsPage('vending_machine');

		var hotel = $rootScope.activeHotelData;

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = hotel.jot_types;

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
		};


		/************************************
		* Get item list
		*************************************/	
		globalRequest.getVendingItems();


		/************************************
		* Get Category list
		*************************************/			
			
		var catRequest = {
		            url:window.__API_PATH.GET_INVENTORY_CATEGORY,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(catRequest).then(function(response){				
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
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{
			 		var itemID = response.result._id;
			 		
			 		/****************************
		            * Upload file if exists
		            ****************************/

		            if($scope.profile && $scope.profile.length > 0)
		            {

		            	globalRequest.uploadFiles(hotel._id,'inventory',$scope.profile).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {	                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_ITEM,
		                            method:"PUT",
		                            data:{  
		                              _id  		     : itemID,
		                              image   		 : fileRasponse.result[0].filename						  
		                            }
		                        };


			                      /****************************
			                      * Update files in lost found 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            $scope.profile = '';
			                            globalRequest.getVendingItems();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$scope.blank();
			                        }

			                      });  
			                    }
			                });

				    } else {
				    	$scope.profile = '';
                        globalRequest.getVendingItems();
                        popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
						$scope.blank();
				    }

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

		$scope.removeItem = function(detail,index){
			var request={
				url:window.__API_PATH.DELETE_ITEM,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.inverntoryList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
	    };

	
		
	}
]);



