"use strict";

app.controller('loginController', ['$scope','$location','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog','$timeout','$cookies',
	function($scope,$location, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog,$timeout,$cookies) {	


		/*********************************************
		* Submit login form
		***********************************************/
		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};	

			var request={
					url:window.__API_PATH.LOGIN,
					method:"POST",
					data:dataObj
				};

			loginFactory.login(request).then(function(response){
				$scope.loginresult = response;
				if(response.status == 1)
				{
					/*if(remember && remember == 1)
					{

					}*/

					 /*var now = new Date().toString();
					 var expiry;					 
					 expiry = now;
					 
					  console.log("about to put cookie");
					  $cookies.put('sample', "Abc", {expires: expiry});*/
					   
										

					/*$cookies.put('hoteljot',response.result.token,[{
			            expires: 'test'
			        }]);*/

					localStorageService.set('token', response.result.token);
					localStorageService.set('user', response.result.user);
					AuthSrv.isLogged = true;
				    $mdDialog.cancel();
					$location.path('/dashboard');

				}									
				
				
			});				
	               
		};

		/*********************************************
		* Forget password
		***********************************************/

		$scope.forgetPassword = function(){

			var data = {email:$scope.forget_email};
			var request={
					url:window.__API_PATH.FORGET_PASSWORD,
					method:"POST",
					data:data
				};

			loginFactory.login(request).then(function(response){
					$scope.forgetresult = response;
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

		/*********************************************
		* Redirect to signup form
		***********************************************/

		$scope.openSignupForm = function (obj) {
	          $mdDialog.show({
				templateUrl : "/modules/register/views/register.tpl.html",
       			controller  :  "registerController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true								
			}).then(function(answer) {}, function() {});  
		};
	}
]);