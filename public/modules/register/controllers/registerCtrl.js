"use strict";

app.controller('registerController', ['$scope','$rootScope','registerFactory','$location','$mdDialog','$timeout',
	function($scope,$rootScope,registerFactory,$location,$mdDialog,$timeout) {

		$scope.registerUser = function (obj) {

	        var dataObj = {
					
					first_name  	 : $scope.first_name,
					last_name   	 : $scope.last_name,
					email       	 : $scope.email,
					contact_number   : $scope.contact_number,
					password    	 : $scope.password
			};

			var request={
					url:window.__API_PATH.REGISTER,
					method:"POST",
					data:dataObj
				};

			registerFactory.register(request).then(function(response){

				$scope.registerResult   = response;

				if(response.status == 1)
				{
					
					$rootScope.popupData = {text:response.message,action:'ok'};
					$timeout(function() {
					 	$mdDialog.cancel();
					 }, 200);
					 $timeout(function() {
					 	$rootScope.popup = true;
					 }, 300);	
				 }			
			});       
		};	


		$scope.openLoginForm = function (obj) {	
	           $mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true							
			}).then(function(answer) {}, function() {});    
		};	

		
	}
]);

