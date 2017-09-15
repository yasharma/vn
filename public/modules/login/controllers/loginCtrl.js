"use strict";

app.controller('loginController', ['$scope','$http','$location','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog','$timeout','globalRequest',
	function($scope,$http,$location, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog,$timeout,globalRequest) {	


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
					localStorageService.set('token', response.result.token);
					localStorageService.set('user', response.result.user);
					AuthSrv.isLogged = true;
					$mdDialog.cancel();
					if(response.result.user.role == 'hotelowner')
					{
						$location.path('/dashboard');
					}

					if(response.result.user.role == 'staff')
					{
						globalRequest.getHotelDetail(response.result.user.hotel_id);
						$location.path('/dashboard/hotelboard');
					}
										
					
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