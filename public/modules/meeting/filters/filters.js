"use strict";

app.filter('roomNamefilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchRoom  = scope.searchRoom;
			if(!searchRoom)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							

							if(searchRoom)
							{
								if (obj.name.match(new RegExp("(" + searchRoom + ")", "i"))) 
								{
							       return true;
							    }
							}

						});
		}
		return input;

	};

}).filter('roomSearchfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchRoom  = scope.search_capacity;
			if(!searchRoom)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							
							return obj.capacity >= searchRoom;
						});
		}
		return input;

	};

}).filter('filterBookingByDate',function(){
	return function(input,scope){

		if(input)
		{
			var fromDate, toDate, fromDateTime, toDateTime;

			fromDate        = scope.search_from_date;
			toDate          = scope.search_to_date;

			if(!fromDate & !toDate){
				return input;
			}


			if(fromDate){
				fromDateTime = 	new Date(fromDate).getTime();
			}

			if(toDate){
				toDateTime = 	new Date(toDate).getTime();
			}	


			input   =   input.filter(function( obj ) {
						var bookingFrom = obj.reserved.from;
						var bookingTo   = obj.reserved.to;

						if(fromDate && !toDate){							
							if(fromDateTime <= bookingFrom){
								return true;
							}
						} else if(!fromDate && toDate){

							if(toDateTime >= bookingTo){
								return true;
							}

						} else {
							if(fromDateTime <= bookingFrom && toDateTime >= bookingTo){	
								return true;
							}
						}
						//console.log(bookingFrom);
						});
		}
		
		return input;

	};

});

