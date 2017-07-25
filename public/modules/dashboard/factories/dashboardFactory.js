'use strict';

app.factory('dashboardFactory', ['$http', function ($http) {
	return{		
		
		hotelCRUD: function(obj){
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