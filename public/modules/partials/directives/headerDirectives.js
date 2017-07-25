"use strict";

app.directive('header',['$rootScope',function($rootScope){
	return{
		templateUrl:'/modules/partials/header.html',
		link: function(scope,ele){}
	
	};
}]);



app.factory('headerFactory', ['$http', function ($http) {
	return{	
		
		get: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},			
	};
}]);