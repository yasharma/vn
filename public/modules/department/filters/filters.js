"use strict";

app.filter('departmentfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchDepartmentName  = scope.searchDepartment;
			if(!searchDepartmentName)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							

							if(searchDepartmentName)
							{
								if (obj.department_name.match(new RegExp("(" + searchDepartmentName + ")", "i"))) 
								{
							       return true;
							    }
							}

						});
		}
		return input;

	};

});