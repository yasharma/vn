"use strict";

app.controller('editLostFoundController', ['$scope','$rootScope','globalRequest','lstFndDetail','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,lstFndDetail,$mdDialog,toastService) {
		var hotel = $rootScope.activeHotelData;

		$rootScope.files = '';

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
			}else if(key == 'description')
			{
				$rootScope.jot_description = value;
			}
			else {
				$scope[key] = value;
			}
		    
		});

	
	    /*****************************************
		* Update found item
		*****************************************/

		$scope.editFoundItem = function(){

	 		/****************************
            * Upload file if exists
            ****************************/

            var popup;

            if($rootScope.files && $rootScope.files.length > 0)
            {

            	globalRequest.uploadFiles(hotel._id,'lost_found',$rootScope.files).then(function(fileRasponse){
                    if(fileRasponse.status == 1)
                    {
                    	var mergeImages      = lstFndDetail.detail.image.concat(fileRasponse.result);

                        var updateRequest={
                            url:window.__API_PATH.UPDATE_LOST_FOUND,
                            method:"PUT",
                            data:{  
                              _id  		     : $scope._id,
							  description    : $rootScope.jot_description,			 
							  title    		 : $scope.title,			 
							  place 		 : $scope.place,	
							  date 	 		 : new Date($scope.date).getTime(),			
							  image  		 : mergeImages,		  
							  no_of_items 	 : $scope.no_of_items,				  
							  category 	     : $scope.category,			  
							  status 	     : $scope.status,			  
							  contact 	     : $scope.contact,				  
							  search_tag 	 : $scope.ctrl.search_tag,
                            }
                        };


                      /****************************
                      * Update files in lost found 
                      ****************************/

                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                        if(updateResponse.status == 1)
                        {
                          $rootScope.files = '';
                          globalRequest.getFoundList();
                          $mdDialog.cancel();
		                  popup = {"message":updateResponse.message,"class":"success"};
		                  toastService.alert(popup);
                        }  else {

					 		var errors = '<ul class="mdToast-error-list">';
							angular.forEach(updateResponse.errors,function(value,key){
								errors += '<li>'+value.message+'</li>';
							});
							errors += '</ul>';
							popup = {"message":errors,"class":""};
							toastService.errors(popup);
					 	}

                      });  
                    }  else {

				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(fileRasponse.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}
                });

            } else {

            	/****************************
                * If no attachment uploaded
                ****************************/


            	var DataArray = {
					  _id  		     : $scope._id,
					  description    : $rootScope.jot_description,				 
					  title          : $scope.title,			 
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
						
						if(response.status ==1)
						{
							globalRequest.getFoundList();
							$mdDialog.cancel();
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

	}
]);