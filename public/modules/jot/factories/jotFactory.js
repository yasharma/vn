'use strict';

app.factory('jotFactory', ['$http', function ($http) {
	return{		
		get: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		post: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		put: function(apiUrl, data){
			return $http.put(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		}			
	};
}]);