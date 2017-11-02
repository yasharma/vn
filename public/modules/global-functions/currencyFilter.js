"use strict";

app.filter('currency',['$rootScope',function($rootScope) {
	return function(input,scope){
		
		var currency;
		if($rootScope.activeHotelData.currency)
		{
			currency = $rootScope.activeHotelData.currency;			

		} else {

			currency = '$';
		}
		return currency+input;
	};
}]);