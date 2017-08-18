"use strict";

app.filter('currency',function(localStorageService) {
	return function(input,scope){
		var hotel = localStorageService.get('hotel');
		var currency;
		if(hotel.currency)
		{
			currency = hotel.currency;			

		} else {

			currency = '$';
		}
		return currency+input;
	};
});