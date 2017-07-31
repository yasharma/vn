'use strict';

app.factory('loginFactory', ['$http', function ($http) {
	return{		
		
		login: function(obj){
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