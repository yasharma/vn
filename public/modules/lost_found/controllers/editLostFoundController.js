"use strict";

app.controller('editLostFoundController', ['$scope','localStorageService','globalRequest','Upload','$timeout','lstFndDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,Upload,$timeout,lstFndDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

		

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.search_tag = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(lstFndDetail.detail,function (value,key) {

			if(key == 'date')
			{
				$scope[key] = new Date(value);
			} else if(key == 'search_tag')
			{
				$scope.ctrl.search_tag = value.split(',');
			}
			else {
				$scope[key] = value;
			}
		    
		});

		/*****************************************
		* Jot image upload
		*****************************************/
		$scope.foundImages = '';
		$scope.uploadFoundFiles = function(files, errFiles) {
			$scope.files       = files;	
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : hotel._id,
	                    folder_name  : 'lost_found',	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result;
	                   var uploadedImagesName = []; 
	                    angular.forEach(result, function(data) {				
				            if(data.status){
				            	uploadedImagesName.push(data.filename);
				            }
				        });
				        $scope.image = uploadedImagesName;
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.foundProgress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };



	    /*****************************************
		* Update found item
		*****************************************/

		$scope.editFoundItem = function(){

			var DataArray = {
			  _id  		     : $scope._id,
			  description    : $scope.description,			 
			  image          : $scope.image,
			  place 		 : $scope.place,	
			  date 	 		 : new Date($scope.date).getTime(),				  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.category,			  
			  status 	     : $scope.status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.search_tag,				  
			};



			var request={
                    url:window.__API_PATH.UPDATE_LOST_FOUND,
                    method:"PUT",
                    data:DataArray
                  };
            
           
            globalRequest.jotCRUD(request).then(function(response){ 
            	$scope.editlstFoundResult = response;
                if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getFoundList();
			 	}
            });
		};


		
	}
]);