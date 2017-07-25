'use strict';

app.factory('jotFactory', ['$http', function ($http) {
	return{		
		
		jotCRUD: function(obj){
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