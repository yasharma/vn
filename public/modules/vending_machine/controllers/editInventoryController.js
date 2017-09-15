"use strict";

app.controller('editInventoryController', ['$scope','localStorageService','globalRequest','Upload','$timeout','invDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,invDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		
		/***********************************************
		* Pass edited employee value in current scope
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
			            	quantity 	 :  $scope.quantity,		            
			            	image 	     :  $scope.profileimages
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.invEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getVendingItems();
			 	}

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



