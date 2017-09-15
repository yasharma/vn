"use strict";

app.filter('contactfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchContact        = scope.searchcontact;

			if(!searchContact){
				return input;
			}

			if(searchContact)
			{
				var removeSpaceFromString = searchContact.replace(/\s/g,'');			
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