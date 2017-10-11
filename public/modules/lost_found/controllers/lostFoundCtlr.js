"use strict";

app.controller('lostFoundCtlr', ['$scope','$rootScope','globalRequest','toastService','$mdDialog',
	function($scope,$rootScope,globalRequest,toastService,$mdDialog) {
		var hotel = $rootScope.activeHotelData;
		$rootScope.directory = 'lost_found';
		$rootScope.jot_description = $rootScope.files = '';

		/*****************************************
		* Get Staff List
		******************************************/

		globalRequest.getStaff();

		/*****************************************
		* Get department List
		******************************************/

	    globalRequest.getDepartments();

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

	    /**********************************************************
	    * Submit lost & found
	    **********************************************************/

	    $scope.submitLostFound = function(){
	    	
	    	$scope.message = ' ';			
			var DataArray = {
			  description    : $rootScope.jot_description,
			  title          : $rootScope.jot_title,
			  hotel_id       : hotel._id,				  
			  place 		 : $scope.lost_place,	
			  date 	 		 : new Date($scope.lost_date).getTime(),			  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.lost_category,			  
			  status 	     : $scope.lost_status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.itemTagModel,				  
			};

			var request={
                    url:window.__API_PATH.LOST_FOUND,
                    method:"POST",
                    data:DataArray
                  };            	
           
            globalRequest.jotCRUD(request).then(function(response){
                
                var lostFoundID = response.result._id;

                if(response.status == 1)
                {

                	/****************************
	                * Upload file if exists
	                ****************************/

	                if($rootScope.files && $rootScope.files.length > 0)
	                {


	                	globalRequest.uploadFiles(hotel._id,$rootScope.directory,$rootScope.files).then(function(fileRasponse){
                            if(fileRasponse.status == 1)
                            {
                              var updateRequest={
                                    url:window.__API_PATH.UPDATE_LOST_FOUND,
                                    method:"PUT",
                                    data:{
                                      _id : lostFoundID,
                                      image  : fileRasponse.result
                                    }
                                  };


                              /****************************
                              * Update files in lost found 
                              ****************************/

                              globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                                if(updateResponse.status == 1)
                                {
                                  $rootScope.files = [];
                                  $mdDialog.cancel();
				                  var popup = {"message":response.message,"class":"success"};
				                  toastService.alert(popup);
                                }

                              });  
                            }
                        });

	                } else {
	                	$mdDialog.cancel();
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
	                }

                }
            });      
	    };
	}
]);