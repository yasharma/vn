'use strict';

app.factory('registerFactory', ['$http', function ($http) {
	return{		
		register: function(apiUrl, data){
			return $http.post(apiUrl, data)
			 .then(function(response){
				return  response.data;	
			});
		}			
	};
}]);