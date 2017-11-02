"use strict";

app.controller('editMeetingManagementController', ['$scope','globalRequest','$mdDialog','toastService','roomDetail',
	function($scope,globalRequest,$mdDialog,toastService,roomDetail) {


		/***********************************************
		* Take editable item value in current scope
		***********************************************/		


		angular.forEach(roomDetail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.room_image)
		{
			$scope.room_image = '/images/hotel/'+$scope.hotel_id+'/rooms/'+$scope.room_image;
		} else {
			$scope.room_image = '/assets/images/metting_list.png';
		}

		/************************************
		* Get facilities
		*************************************/			
		
		globalRequest.getFacilityList();




		/************************************
		* Add room
		*************************************/		
		

		$scope.editRoom = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.UPDATE_MEETINGROOM,
			            method:"PUT",
			            data:{
			            	_id     	 :  $scope._id,
			            	name    	 :  $scope.name,
			            	dimension    :  $scope.dimension,
			            	capacity     :  $scope.capacity,
			            	facilities   :  $scope.facilities,
			            	room_number  :  $scope.room_number,
			            	cost 		 :  $scope.cost,		            
			            	status 	 	 :  $scope.status,		            	            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{
			 		
			 		/****************************
		            * Upload file if exists
		            ****************************/

		            if($scope.roomImages && $scope.roomImages.length > 0)
		            {

		            	globalRequest.uploadFiles($scope.hotel_id,'rooms',$scope.roomImages).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {	                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_MEETINGROOM,
		                            method:"PUT",
		                            data:{  
		                              _id     	    :  $scope._id,
		                              room_image   	 	: fileRasponse.result[0].filename						  
		                            }
		                        };


			                      /****************************
			                      * Update files 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            
			                            globalRequest.getRoomList();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$mdDialog.cancel();
			                        }

			                      });  
			                    }
			                });

				    } else {				    	
                        globalRequest.getRoomList();
                        popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
						$mdDialog.cancel();
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
		* Profile image upload
		*****************************************/	

		$scope.uploadRoomImage = function(files, errFiles) {
			$scope.roomImages = files;	

	    };
	
	}
]);
