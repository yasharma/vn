"use strict";

app.controller('facilityController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService','$timeout',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService,$timeout) {
		
		/*******************************************
		* Redirect user if lost found is disabled
		********************************************/
		$rootScope.redirectSettingsPage('meeting_room');
		
		/************************************
		* Get facilities
		*************************************/			
		
		globalRequest.getFacilityList();

		
		
		var hotel = $rootScope.activeHotelData;

	
		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.name = "";
			$scope.facilityPic = "";
		};

		
		/************************************
		* Add facility
		*************************************/		
		

		$scope.addFacility = function(){
					
			var request = {
			            url:window.__API_PATH.ADD_FACILITY,
			            method:"POST",
			            data:{
			            	hotel_id     : hotel._id,
			            	name    	 : $scope.name,
			            	image 		 : $scope.facilityPic
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{	
	             
	                globalRequest.getFacilityList();
	                popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
					$scope.blank();
			                      
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
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
			
			$mdDialog.show({
				controller: 'editFacilityController',
				templateUrl: '/modules/meeting/views/edit_facility.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{facDetail:{detail:detail}}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete Item
		*****************************************/	

		$scope.removeFacility = function(detail,index){
			var request={
				url:window.__API_PATH.DELETE_FACILITY,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.facilityList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Facility image upload
		*****************************************/	

		$scope.uploadFacilityImage = function(files, errFiles) {
			$scope.facilityPic = files;	
			globalRequest.uploadFiles(hotel._id,'facility',files).then(function (response) {	        
	                $timeout(function () {	                   
	                   $scope.facilityPic = response.result[0].filename;
	                });
	            });
	    };
		
	}
]);