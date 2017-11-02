"use strict";

app.controller('meetingController', ['$scope','$rootScope','globalRequest','toastService',
	function($scope,$rootScope,globalRequest,toastService) {

		/*******************************************
		* Redirect user if meeting room is disabled
		********************************************/
		$rootScope.redirectSettingsPage('meeting_room');
		
		/************************************
		* Get rooms
		*************************************/
		 globalRequest.getRoomList('');


		/**********************************************
		* Filter room by availability on selected date
		**********************************************/
		$scope.$watch("search_from", function(newValue, oldValue) {
		 	
		 	if(newValue && newValue != oldValue)
		 	{
		 		if($scope.search_from && $scope.search_to)
		 		{
			 		var from = new Date($scope.search_from).getTime();
			 		var to   = new Date($scope.search_to).getTime();
			 		globalRequest.getRoomList({from:from,to:to});
			 	}
		 	}
		});

		$scope.$watch("search_to", function(newValue, oldValue) {
		 	
		 	if(newValue && newValue != oldValue)
		 	{
		 		if($scope.search_from && $scope.search_to)
		 		{
		 			console.log({from:from,to:to});
			 		var from = new Date($scope.search_from).getTime();
			 		var to   = new Date($scope.search_to).getTime();			 		
			 		globalRequest.getRoomList({from:from,to:to});
			 	}
		 	}
		});

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.roomTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

	   /************************************
		* Get facilities
		*************************************/			
		
		globalRequest.getFacilityList();


		/************************************
		* Get facilities
		*************************************/

		$scope.roomStyleList = window.__API_PATH.ROOM_STYLE;
		
		
		$scope.selectLayout = function(layoutID){

			$scope.selectedLayout = layoutID;
		};

		/**************************************
		* Appned staff member of click of icon
		**************************************/

		$scope.selectStaff = function(userName){
			
			if($rootScope.jot_members)
			{	
				var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi);	
				var match = -1;
				if(checkAlreadyExists)
				{
					match = checkAlreadyExists.indexOf('@'+userName);
				}


				if(match > -1)
				{
					return false;
				}
				$rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
			} else {
				$rootScope.jot_members = '@'+userName+' ';
			}
			
		};


		/**************************************
		* Room booking
		**************************************/

		$scope.roomBooking = function(){
			var reserved = {from:new Date($scope.start_time).getTime(),to:new Date($scope.end_time).getTime()};
			var bookingRequest = {
				recipient_first_name     : $scope.recipient_first_name,
				recipient_last_name      : $scope.recipient_last_name,
				recipient_contact_number : $scope.recipient_contact_number,
				recipient_email     	 : $scope.recipient_email,
				recipient_address     	 : $scope.recipient_address,
				payment     			 : $scope.payment,
				reserved     			 : reserved,
				staff     			     : $rootScope.jot_members,
				tags     			     : $scope.ctrl.roomTagModel,
				description     		 : $rootScope.jot_description,
				room_layout_id     		 : $scope.selectedLayout,
				room_number     		 : $scope.ctrl.room_number,				
				user_id     		     : $rootScope.currentUser._id,				
				hotel_id     		     : $rootScope.activeHotelData._id,				
				booking_time     		 : new Date().getTime()					
			};


			var request={
				url:window.__API_PATH.ADD_BOOKING,
				method:"POST",
				data:bookingRequest
			};
					
			
			globalRequest.jotCRUD(request).then(function(response){				
				var popup;
				
			 	if(response.status == 1)
			 	{			 		
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);	

			 	} else {

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
	

		
	}
]);
