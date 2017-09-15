"use strict";
app.filter('timeConvertorfilter', function() {
	return function(input, scope) {
		if(input)
		{
			var timeVal = '';
			input = parseInt(input);
			if(input <= 12)
			{
				timeVal = input+" AM";
			} else {
				input = input-12;				
				timeVal = input+" PM";
			}

			return timeVal;
		}

	};
});


app.filter('getmeridiem', function() {
	return function(input, scope) {


		if(input)
		{
			var timeVal,hour,min;

			var timeArray = input.split(':');

			if(timeArray[0] != '')
			{

				if(timeArray[0] == -1)
				{

					hour 	=   timeArray[0];
					min     =   timeArray[1];
					timeVal = "Untill Finish";

				} else {


					if(timeArray[0] <= 12)
					{
						hour 	=  timeArray[0];
						min     =   timeArray[1];
						timeVal = hour+":"+min+" AM";
					} else {
						hour 	=  timeArray[0]-12;
						min     =   timeArray[1];				
						timeVal = hour+":"+min+" PM";
					}
				}	
			}

			return timeVal;
		}

	};
});
