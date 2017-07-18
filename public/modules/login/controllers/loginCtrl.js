"use strict";

/**************************************
* Login controller
**************************************/

app.controller('loginController', ['$scope','$http','$location','$timeout','localStorageService',
	function($scope,$http,$location,$timeout, localStorageService) {
		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};		
			
	         $http.post('/api/login', dataObj ).then(function(response){
						var data = response.data;
						if(data.result.success)
						{
							localStorageService.set('user', data.result.user);
							localStorageService.set('token', data.result.token);

							// console.log(response);
							$location.path('/dashboard');
						}	
						$scope.result = data.result;	

				});       
	};
}]);



