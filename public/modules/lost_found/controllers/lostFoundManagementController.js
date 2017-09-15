"use strict";

app.controller('lostFoundManagementController',['$scope','$rootScope','globalRequest','localStorageService','toastService','Upload','$timeout','$mdDialog',
	function($scope,$rootScope,globalRequest,localStorageService,toastService,Upload,$timeout,$mdDialog){
		var hotel = localStorageService.get('hotel');

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.description = "";
			$scope.image = "";
			$scope.foundImages = "";
			$scope.files = "";
			$scope.place = "";
			$scope.date = "";
			$scope.no_of_items = "";
			$scope.category = "";
			$scope.status = "";
			$scope.ctrl.itemTagModel = [];
			$scope.contact = "";
			
			$scope.foundProgress = -1;
		};

		$scope.blankFields = function(){
			$scope.blank();
			$scope.lstFoundResult = "";
			
		};


		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.itemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };


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
				        $scope.foundImages = uploadedImagesName;
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

		/************************************
		* Get lost found item list
		*************************************/			
		
		globalRequest.getFoundList();


		/*****************************************
		* Add found item
		*****************************************/

		$scope.addfoundItem = function(){

			var DataArray = {
			  description    : $scope.description,
			  hotel_id       : hotel._id,	
			  image          : $scope.foundImages,
			  place 		 : $scope.place,	
			  date 	 		 : new Date($scope.date).getTime(),				  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.category,			  
			  status 	     : $scope.status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.itemTagModel,				  
			};



			var request={
                    url:window.__API_PATH.LOST_FOUND,
                    method:"POST",
                    data:DataArray
                  };
            
           
            globalRequest.jotCRUD(request).then(function(response){ 
            	$scope.lstFoundResult = response;
                if(response.status == 1)
                {
                    if(!$scope.LstFndList)
			 		{
			 			$scope.LstFndList = [];
			 		}
			 		$scope.LstFndList.push(response.result);
                    var popup = {"message":response.message,"class":"success"};
                    toastService.alert(popup);
                    $scope.blank();
                }
            });
		};


		/*****************************************
		* Open edit department
		*****************************************/	

		$scope.openEditLostFound = function(detail){
				$mdDialog.show({
					controller: 'editLostFoundController',
					controllerAs: 'ctrl',
					templateUrl: '/modules/lost_found/views/edit_lost_found.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{lstFndDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeList = function(detail){

			var request={
				url:window.__API_PATH.DELETE_LOST_FOUND,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
}]);