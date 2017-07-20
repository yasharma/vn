'use strict';

app.factory('dashboardFactory', ['$http', function ($http) {
	return{		
		addNewHotel: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		hotelView: function(apiUrl, data){
			return $http.get(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		}			
	};
}]);