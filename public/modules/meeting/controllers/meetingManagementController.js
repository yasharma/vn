"use strict";

app.controller('meetingManagementController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,toastService) {
		var hotel = $rootScope.activeHotelData;

		/*******************************************
		* Redirect user if meeting room is disabled
		********************************************/
		$rootScope.redirectSettingsPage('meeting_room');

		
		/************************************
		* Get rooms
		*************************************/
		globalRequest.getRoomList('');

		/************************************
		* Get facilities
		*************************************/			
		
		globalRequest.getFacilityList();

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.name = "";
			$scope.dimension = "";
			$scope.capacity = "";
			$scope.facilities = "";
			$scope.cost = "";
			$scope.status = "";
			$scope.roomImages = "";
		};


		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;
		

		/************************************
		* Add room
		*************************************/		
		

		$scope.addRoom = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_MEETINGROOM,
			            method:"POST",
			            data:{
			            	hotel_id     :  hotel._id,
			            	name    	 :  $scope.name,
			            	dimension    :  $scope.dimension,
			            	capacity     :  $scope.capacity,
			            	facilities   :  $scope.facilities,
			            	cost 		 :  $scope.cost,		            
			            	room_number 		 :  $scope.room_number,		            
			            	status 	 	 :  $scope.status,		            
			            	/*image 	     :  $scope.roomImages*/		            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{
			 		var roomID = response.result._id;
			 		
			 		/****************************
		            * Upload file if exists
		            ****************************/

		            if($scope.roomImages && $scope.roomImages.length > 0)
		            {

		            	globalRequest.uploadFiles(hotel._id,'rooms',$scope.roomImages).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {	                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_MEETINGROOM,
		                            method:"PUT",
		                            data:{  
		                              _id  		     : roomID,
		                              room_image   	 : fileRasponse.result[0].filename						  
		                            }
		                        };


			                      /****************************
			                      * Update files 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            $scope.roomImages = '';
			                            globalRequest.getRoomList();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$scope.blank();
			                        }

			                      });  
			                    }
			                });

				    } else {
				    	$scope.roomImages = '';
                        globalRequest.getRoomList();
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
		* Open edit room
		*****************************************/	

		$scope.openEditForm = function(detail){

			$mdDialog.show({
				controller: 'editMeetingManagementController',
				templateUrl: '/modules/meeting/views/edit_meeting_room_management.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{roomDetail:detail}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete room
		*****************************************/	

		$scope.removeRoom = function(detail,index){
			var request={
				url:window.__API_PATH.DELETE_MEETINGROOM,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$rootScope.meetingRoomList .splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
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
