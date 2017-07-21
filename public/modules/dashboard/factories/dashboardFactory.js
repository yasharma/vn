'use strict';

app.factory('dashboardFactory', ['$http', function ($http) {
	return{		
		post: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		get: function(apiUrl, data){			
			return $http.post(apiUrl, data).then(function(response){
				return response;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		}			
	};
}]);