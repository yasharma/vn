"use strict";

app.controller('phoneDirController',['$scope','globalRequest','localStorageService','$mdDialog','toastService',function($scope,globalRequest,localStorageService,$mdDialog,toastService){
	var hotel = localStorageService.get('hotel');
	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.first_name = "";		
		$scope.last_name = "";
		$scope.email = "";
		$scope.contact = "";
	};

	$scope.blankFields = function(){
		$scope.blank();
		$scope.ContactResult = "";
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
	* Add contact number
	*************************************/		

	 globalRequest.getContactList();

	/************************************
	* Add contact number
	*************************************/		
	

	$scope.addContactNumber = function(){	

		var request = {
		            url:window.__API_PATH.ADD_CONTACT,
		            method:"POST",
		            data:{
		            	hotel_id      	:  hotel._id,
		            	first_name    	:  $scope.first_name,
		            	last_name       :  $scope.last_name,
		            	tags        	:  $scope.ctrl.itemTagModel,
		            	email        	:  $scope.email,
		            	contact         :  $scope.contact
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){
		 	$scope.ContactResult = response;

		 	if(response.status == 1)
		 	{
		 		$scope.blank();
				$scope.ctrl.itemTagModel = [];
		 		if(!$scope.ContactList)
		 		{
		 			$scope.ContactList = [];
		 		}
		 		$scope.ContactList.push(response.result);
		 		
		 	}
		 });

	};


	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openEditContact = function(detail){
			$mdDialog.show({
				controller: 'editContactController',
				controllerAs: 'ctrl',
				templateUrl: '/modules/phone_directory/views/edit_contact.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{contactDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};


	/*****************************************
	* Favorite contact
	*****************************************/

	$scope.makeFavorite = function(detail){
		var fav = 'no';
		var message = '';
		if(detail.favorite == 'no')
		{
			fav =  'yes';
		}

		if(detail.favorite == 'yes')
		{
			fav =  'no';
		}
		var request={
			url:window.__API_PATH.UPDATE_CONTACT,
			method:"PUT",
			data:{_id:detail._id,favorite:fav}
		};
		
		globalRequest.jotCRUD(request).then(function(response){	
			globalRequest.getContactList();
		});

	};


	/*****************************************
	* Delete contact
	*****************************************/	

	$scope.removeContact = function(detail){

		var request={
			url:window.__API_PATH.DELETE_CONTACT,
			method:"DELETE",
			params:{_id:detail._id}
		};
		
		globalRequest.jotCRUD(request).then(function(response){				
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);
		});

	};
	
	
}]);