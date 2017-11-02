"use strict";

app.controller('alertsController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService','socket',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService,socket) {
		
		/************************************
		* Get alert list
		*************************************/

		globalRequest.getAlertList();

		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.alert_title = "";		
			$scope.alert_description = "";		
			
		};	



		/************************************
		* Add alert
		*************************************/			

		$scope.addAlert = function(){	

			var request = {
			            url:window.__API_PATH.ADD_ALERT,
			            method:"POST",
			            data:{
			            	hotel_id     :  $rootScope.activeHotelData._id,
			            	title        :  $scope.alert_title,	            	
			            	description  :  $scope.alert_description,
			            	user_id      :  $rootScope.currentUser._id,
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
				
			 	if(response.status == 1)
			 	{
			 		$scope.blank();			 		
			 		socket.emit('notificationToAll',response.result);			 		
			 		
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);	
					globalRequest.getAlertList();	 

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

		/*****************************************
		* Open  more detail view
		*****************************************/

		$scope.openSenderDetail = function(data){
			$mdDialog.show({
				controller: 'detailViewController',
				templateUrl: '/modules/alerts/views/view_detail.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{viewDetail:data}				
			}).then(function(answer) {}, function() {});
		};
		
	}
]);





