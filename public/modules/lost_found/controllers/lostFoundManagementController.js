"use strict";

app.controller('lostFoundManagementController',['$scope','$rootScope','globalRequest','toastService','$mdDialog',
	function($scope,$rootScope,globalRequest,toastService,$mdDialog){

		var hotel = $rootScope.activeHotelData;

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = hotel.jot_types;

		/************************************
		* Get employee list
		*************************************/		
		globalRequest.getStaff();

		/*****************************************
		* Get department List
		******************************************/

	    globalRequest.getDepartments();

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$rootScope.jot_description = "";
			$scope.image = "";
			$scope.foundImages = "";
			$rootScope.files = "";
			$scope.place = "";
			$scope.date = "";
			$scope.no_of_items = "";
			$scope.category = "";
			$scope.status = "";
			$scope.ctrl.itemTagModel = [];
			$scope.contact = "";
			$scope.foundProgress = -1;
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


		/************************************
		* Get lost found item list
		*************************************/			
		
		globalRequest.getFoundList();


		/*****************************************
		* Add found item
		*****************************************/

		$scope.addfoundItem = function(){

			var DataArray = {
			  description    : $rootScope.jot_description,
			  title          : $scope.title,
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
            	var popup;
            	
                if(response.status == 1)
                {
                	var lostFoundID = response.result._id;

                	/****************************
		            * Upload file if exists
		            ****************************/

		            if($rootScope.files && $rootScope.files.length > 0)
		            {

		            	globalRequest.uploadFiles(hotel._id,'lost_found',$rootScope.files).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {
				                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_LOST_FOUND,
		                            method:"PUT",
		                            data:{  
		                              _id  		     : lostFoundID,
		                              image   		 : fileRasponse.result							  
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
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$scope.blank();
			                        }

			                      });  
			                    }
			                });

				    } else {
				    	globalRequest.getFoundList();
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

		$scope.removeList = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_LOST_FOUND,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){	
				if(response.status == 1)
				{
					$scope.LstFndList.splice(index, 1);
				}
							
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
}]);