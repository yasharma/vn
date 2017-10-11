"use strict";

app.controller('registerController', ['$scope','$rootScope','registerFactory','$mdDialog','$timeout','globalRequest',
	function($scope,$rootScope,registerFactory,$mdDialog,$timeout,globalRequest) {
		$scope.profileImage = [];
		$scope.registerUser = function (obj) {
	        var dataObj = {
					
					first_name  	 : $scope.first_name,
					last_name   	 : $scope.last_name,
					email       	 : $scope.email,
					contact_number   : $scope.contact_number,
					password    	 : $scope.password,
					
			};

			var request={
					url:window.__API_PATH.REGISTER,
					method:"POST",
					data:dataObj
				};	   


			/********************************************
			*  Upload profile image if exists
			********************************************/


			if($scope.profileImage.length>0)
			{

				globalRequest.uploadFiles(null,'profile_image',$scope.profileImage).then(function(profileResponse){
					$scope.registerImageResult =  profileResponse;


					/********************************************
					*  Register user with profile image
					********************************************/

					request.data.profile_image = profileResponse.result[0].filename;

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

				});

			} else {

				/********************************************
				*  Register user without profile image
				********************************************/

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
				
			}    
		};	

		/********************************************
		*  Keep uploaded file in temp scope
		********************************************/

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profileImage = files;
		};	

		/********************************************
		*  Open login form
		********************************************/

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

