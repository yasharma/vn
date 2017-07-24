"use strict";

/**************************************
* Register controller
**************************************/

app.controller('registerController', function($scope,$http) {
	$scope.registerUser = function (obj) {
		var error = false;
		

	        var dataObj = {
					name : $scope.name,
					email : $scope.email,
					password : $scope.password
			};	

         $http.post('/api/register', dataObj
			).then(function(respnse){			
					$scope.result = respnse.data;				
			});
		
       
	};
});

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

	         $http.post('/api/login', dataObj
				).then(function(response){		
						var data = response.data;				
						

						if(data.success && response.data.token)
						{
							localStorageService.set('user', response.data.user);
							localStorageService.set('token', response.data.token);
							$timeout(function() {								
						      $location.path('/dashboard');
						    }, 1000);
						}	
						$scope.result = data.result;	

				});
       
	};
}]);