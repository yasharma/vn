"use strict";

app.controller('positionController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {


		/************************************
		* Get position list
		*************************************/			
		
		globalRequest.getPositionList();

		
		/************************************
		* Add position
		*************************************/		
		

		$scope.addPosition = function(){
		
			var request = {
			            url:window.__API_PATH.ADD_POSITION,
			            method:"POST",
			            data:{
			            	hotel_id   :  $rootScope.activeHotelData._id,
			            	position   :  $scope.position
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.position = "";
			 		globalRequest.getPositionList();
			 		popup = {"message":response.message,"class":response.class};
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

		};

		/*****************************************
		* Open edit position
		*****************************************/	

		$scope.openEditForm = function(detail){
			
				$mdDialog.show({
					controller: 'editPositionController',
					templateUrl: '/modules/employee/views/edit_position.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{positionDetail:detail}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete position
		*****************************************/	

		$scope.removePos = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_POSITION,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.potisionList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		
		
	}
]);



