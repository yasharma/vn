"use strict";

app.controller('editInventoryController', ['$scope','$rootScope','localStorageService','globalRequest','invDetail','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,invDetail,$mdDialog,toastService) {

		/***********************************************
		* Take editable item value in current scope
		***********************************************/		

		$scope.inventCatList = invDetail.prevScope.inventCatList;

		angular.forEach(invDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/inventory/'+$scope.image;
		} else {
			$scope.image = '/assets/images/vending_default.jpg';
		}

		/************************************
		* Edit Item
		*************************************/			

		$scope.editItem = function(){
			var popup;

			/****************************
            * Upload file if exists
            ****************************/

            if($scope.profile && $scope.profile.length > 0)
            {

            	globalRequest.uploadFiles($rootScope.activeHotelData._id,'inventory',$scope.profile).then(function(fileRasponse){
                    if(fileRasponse.status == 1)
                    {  

                        var status  = ($scope.status)?$scope.status:'inactive';			
						var updateRequest = {
						            url    : window.__API_PATH.UPDATE_ITEM,
						            method : "PUT",
						            data:{
						            	_id  		 :  $scope._id,
						            	item_name    :  $scope.item_name,
						            	category     :  $scope.category,
						            	price        :  $scope.price,
						            	sku_code     :  $scope.sku_code,
						            	quantity 	 :  $scope.quantity,		            
						            	image 	     :  fileRasponse.result[0].filename
						            }
						          };


                      /****************************
                      * Update files in lost found 
                      ****************************/

                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                        if(updateResponse.status == 1)
                        {
                          $scope.files = '';
                          globalRequest.getVendingItems();
                          $mdDialog.cancel();
		                  popup = {"message":updateResponse.message,"class":"success"};
		                  toastService.alert(popup);
                        }

                      });  
                    }
                });

            } else {

            	/****************************
                * If no attachment uploaded
                ****************************/


            	var status  = ($scope.status)?$scope.status:'inactive';			
				var request = {
			            url    : window.__API_PATH.UPDATE_ITEM,
			            method : "PUT",
			            data:{
			            	_id  		 :  $scope._id,
			            	item_name    :  $scope.item_name,
			            	category     :  $scope.category,
			            	price        :  $scope.price,
			            	sku_code     :  $scope.sku_code,
			            	quantity 	 :  $scope.quantity   
			            }
			          };

				globalRequest.jotCRUD(request).then(function(response){
				 	
				 	if(response.status ==1)
				 	{
				 		$mdDialog.cancel();
				 		globalRequest.getVendingItems();
				 		popup = {"message":response.message,"class":"success"};
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
            }	
			
		};

		/*****************************************
		* Get file data in scope
		*****************************************/	
		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;		
	    };
		
	}
]);