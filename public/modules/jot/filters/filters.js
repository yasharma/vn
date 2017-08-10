"use strict";

app.filter("filterdepartment", function(cursorPosition) {


         return function(input,scope) {
         	
         	var text     = document.getElementById("department");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\#[a-z]+/gm);
			var countAtRate    = word.match(/\#/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var removeHash = word.split("#");
				removeHash = removeHash[1];
				scope.matchWord = word;		

				var searchedString 	= [];
				angular.forEach(input,function(value,key){
					var listedDepartment = value.department_name;
					listedDepartment     = listedDepartment.toLowerCase();
					removeHash           = removeHash.toLowerCase();
					
					if(listedDepartment.startsWith(removeHash))
					{						
						searchedString.push(value);
					}
				});				
				return searchedString;
			}
			
         };
});


app.filter("filterstaff", function(cursorPosition) {

         return function(input,scope) {

         	var text     = document.getElementById("staff");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\@[a-z]+/gm);
			var countAtRate    = word.match(/\@/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var removeAtRate = word.split("@");
				
				removeAtRate = removeAtRate[1];
				scope.matchWord = word;		

				var searchedString 	= [];
				angular.forEach(input,function(value,key){
					var listedstaff = value.user_name;
					listedstaff     = listedstaff.toLowerCase();
					removeAtRate    = removeAtRate.toLowerCase();
					
					if(listedstaff.startsWith(removeAtRate))
					{						
						searchedString.push(value);
					}
				});				
				return searchedString;
			}
			
         };
});



app.filter("filterstaffJotTitle", function(cursorPosition) {

         return function(input,scope) {
         		
	         	var text     = document.getElementById("jot_title");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\@[a-z]+/gm);
				var countAtRate    = word.match(/\@/gm);
				
				if(detectUserName && countAtRate.length == 1)
				{
					var removeAtRate = word.split("@");
					
					removeAtRate = removeAtRate[1];
					scope.matchWord = word;		

					var searchedString 	= [];
					angular.forEach(input,function(value,key){
						var listedstaff = value.user_name;
						listedstaff     = listedstaff.toLowerCase();
						removeAtRate    = removeAtRate.toLowerCase();
						
						if(listedstaff.startsWith(removeAtRate))
						{						
							searchedString.push(value);
						}
					});				
					return searchedString;
				}
			
         };
});