"use strict";

/**************************************
* Login controller
**************************************/


app.controller('loginController', ['$scope','$http','$location','$timeout','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog) {	


		$scope.login = function(){
			$mdDialog.show({
				controller: "loginController",
				templateUrl: '/modules/login/views/login.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
			})
			.then(function(answer) {			
			}, function() {			
			});
		};


		$scope.close = function(){
			 $mdDialog.cancel();
		};


		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};	

			loginFactory.login('/api/login',dataObj).then(function(response){				
				if(response.errors){
					//toastService.alert({message: response.errors.message, class: 'error'});
				} else {
					if(response.success)
					{
						localStorageService.set('token', response.token);
						localStorageService.set('user', response.user);
						AuthSrv.isLogged = true;
						$location.path('/dashboard');
					}
					$scope.result = response.message;				
				}
			});				
	               
		};



		$scope.openSignupForm = function (obj) {	
	        			
	           $location.path('/register');    
		};
	}
]);
