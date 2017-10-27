"use strict";

app.filter('searchCustomerFilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchCustomer        = scope.searchCustomer;
			if(!searchCustomer){
				return input;
			}

			if(searchCustomer)
			{
				var removeSpaceFromString = searchCustomer.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							
								if(obj.user_info.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}
						});
		}
		
		return input;

	};

});





app.filter('searchDateFilter',function(){
	return function(input,scope){
/*.getTime()*/
		if(input)
		{

			var search_date        = scope.search_date;
			if(!search_date){
				return input;
			}
			var date = new Date(search_date);
			var selectedDate =   date.getFullYear()+','+(parseInt(date.getMonth())+1) +','+ date.getDate();

			selectedDate = 	new Date(selectedDate).getTime();			
			input   =   input.filter(function( obj ) {

						var inputDate = new Date(obj.date);
						inputDate     =   inputDate.getFullYear()+','+(parseInt(inputDate.getMonth())+1) +','+ inputDate.getDate();

						inputDate = 	new Date(inputDate).getTime();

							if(inputDate == selectedDate)								
							{
								return true;
							}
						});
		}
		
		return input;

	};

});

