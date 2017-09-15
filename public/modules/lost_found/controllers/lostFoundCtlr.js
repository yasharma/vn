"use strict";

app.controller('lostFoundCtlr', ['$scope','$rootScope','globalRequest','localStorageService','toastService','$mdDialog',
	function($scope,$rootScope,globalRequest,localStorageService,toastService,$mdDialog) {
		
		$rootScope.directory = 'lost_found';

		globalRequest.getStaff();

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

			var hotel = localStorageService.get('hotel');
			var DataArray = {
			  description    : $rootScope.jot_title,
			  hotel_id       : hotel._id,	
			  image          : $rootScope.issueImages,
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
                    var result = response.result;
                    if(response.status == 1)
                    {
                      $mdDialog.cancel();
                      var popup = {"message":response.message,"class":"success"};
                      toastService.alert(popup);
                    }
            });      
	    };

		

	}
]);