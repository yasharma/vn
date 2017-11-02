'use strict';

app.factory('replaceOccurence', [function () {
	return{	
		replaceAll: function(string, search, replacement){
			
			replacement = " "+replacement+" ";
			
            return string.replace(new RegExp("(?:^|\\s)("+search+")(?=\\s|$)"),replacement);
		}
	};
}]);
