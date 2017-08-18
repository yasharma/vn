'use strict';

app.factory('replaceOccurence', ['$http', function ($http) {
	return{	
		replaceAll: function(string, search, replacement){
			
			replacement = " "+replacement+" ";
			
            return string.replace(new RegExp("(?:^|\\s)("+search+")(?=\\s|$)"),replacement);
		}
	};
}]);
