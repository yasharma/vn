'use strict';

app.factory('registerFactory', ['$http', function ($http) {
	return{		
	
		register: function(obj){
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