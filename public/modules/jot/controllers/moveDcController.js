"use strict";

app.controller('moveDcController', ['$scope','$rootScope','localStorageService','globalRequest','Detail','$mdDialog','Upload','$timeout','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,Detail,$mdDialog,Upload,$timeout,toastService) {
		var hotel = localStorageService.get('hotel');

		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(Detail.detail,function (value,key) {

		    if(key == 'department'){
				$rootScope.department = value;
			} else if(key == 'image'){
				$scope.filesData = value;
			} else {
				$scope[key] = value;
			}
		});	

	

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.MovItemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };


		/************************************
		* Edit document
		*************************************/		

		$scope.moveToDC = function(){	
	
			var request = {
		            url:window.__API_PATH.MOVE_DOCUMENT,
		            method:"POST",
		            data:{
		            	hotel_id      	   		:  hotel._id,
		            	document_name   		:  $scope.mov_document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.movectrl.MovItemTagModel,
		            	document_description    :  $scope.mov_document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime(),
		            	jot_id					:  $scope._id,
		            	jot_type				:  $scope.jot_type
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
				
			 	$scope.docMoveResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}

			 });

		};

		/************************************
		* Remove files by index
		*************************************/	

		$scope.removeImageIndex = function(fData){
			$scope.filesData = $scope.filesData.filter(function( obj ) {
			    return obj.filename != fData.filename;
			});

		};

	}
]);