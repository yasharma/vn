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
