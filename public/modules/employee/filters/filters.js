"use strict";

app.filter('employeefilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchEmployee        = scope.searchEmployee;

			if(!searchEmployee){
				return input;
			}

			if(searchEmployee)
			{
				var removeSpaceFromString = searchEmployee.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							var fullName = obj.first_name+obj.last_name;
								if(fullName.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}							
								
						});
		}
		return input;

	};

});