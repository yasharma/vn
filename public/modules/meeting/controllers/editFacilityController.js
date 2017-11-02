"use strict";

app.controller('editFacilityController', ['$scope','$rootScope','localStorageService','globalRequest','facDetail','$mdDialog','toastService','$timeout',
	function($scope,$rootScope,localStorageService,globalRequest,facDetail,$mdDialog,toastService,$timeout) {

		/***********************************************
		* Take editable item value in current scope
		***********************************************/		

		angular.forEach(facDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		console.log($scope);
		if($scope.image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/facility/'+$scope.image;
		} else {
			$scope.image = 'hgjg';
		}

		/************************************
		* Edit Item
		*************************************/			

		$scope.editFacility = function(){
			var popup;			
				var request = {
			            url    : window.__API_PATH.UPDATE_FACILITY,
			            method : "PUT",
			            data:{
			            	_id  	:  $scope._id,
			            	name    :  $scope.name,
			            	image   :  $scope.facilityPic
			            }
			          };

				globalRequest.jotCRUD(request).then(function(response){
				 	
				 	if(response.status ==1)
				 	{
				 		$mdDialog.cancel();
				 		globalRequest.getFacilityList();
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
			
		};

		/*****************************************
		* Facility image upload
		*****************************************/	

		$scope.uploadFacilityImage = function(files, errFiles) {
			$scope.facilityPic = files;	
			globalRequest.uploadFiles(facDetail.detail.hotel_id,'facility',files).then(function (response) {	        
	                $timeout(function () {	                   
	                   $scope.facilityPic = response.result[0].filename;
	                });
	            });
	    };
		
	}
]);