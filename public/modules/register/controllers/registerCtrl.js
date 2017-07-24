"use strict";

/**************************************
* Register controller
**************************************/


app.controller('registerController', ['$scope','registerFactory','$location',
	function($scope,registerFactory,$location) {

		$scope.registerUser = function (obj) {

	        var dataObj = {
					name : $scope.name,
					email : $scope.email,
					password : $scope.password
			};

			registerFactory.register(REGISTER_API_URL,dataObj).then(function(response){
				$scope.result = response.result;
			});       
		};	


		$scope.openLoginForm = function (obj) {	
	           $location.path('/');    
		};	

		
	}
]);

