"use strict";

app.filter('dcDepartmentFilter',function(){
	return function(input,scope){
		if(input)
		{

			var searchDepartment        = scope.searchDepartment;
			if(!searchDepartment){
				return input;
			}

	
			input   =   input.filter(function( obj ) {
							if(obj.department.indexOf(searchDepartment) != -1)
							{
								return true;
							}
						});
		}
		return input;
	};

});