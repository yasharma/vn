"use strict";

app.filter("filterdepartment", function(cursorPosition) {


         return function(input,scope) {
         	
         	var text     = document.getElementById("department");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\#[a-z]+/gmi);
			var countAtRate    = word.match(/\#/gm);
		
			if(detectUserName && countAtRate.length == 1)
			{
				var searchedString 	= [];
				if(word.substring(0, 1) == '#')
				{
					var removeHash = word.split("#");
					removeHash = removeHash[1];
					scope.matchWord = word;						
					angular.forEach(input,function(value,key){
						var listedDepartment = value.department_name;
						listedDepartment     = listedDepartment.toLowerCase();
						removeHash           = removeHash.toLowerCase();

						if(listedDepartment.startsWith(removeHash))
						{						
							searchedString.push(value);
						}
					});	
				}			
				return searchedString;
			}
			
         };
});


app.filter("filterstaff", function(cursorPosition) {

         return function(input,scope) {

         	var text     = document.getElementById("staff");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\@[a-z]+/gmi);
			var countAtRate    = word.match(/\@/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var searchedString 	= [];
				if(word.substring(0, 1) == '@')
				{
					var removeAtRate = word.split("@");
					
					removeAtRate = removeAtRate[1];
					scope.matchWord = word;
					
					angular.forEach(input,function(value,key){
						var listedstaff = value.user_name;
						listedstaff     = listedstaff.toLowerCase();
						removeAtRate    = removeAtRate.toLowerCase();
						
						if(listedstaff.startsWith(removeAtRate))
						{						
							searchedString.push(value);
						}
					});		
				}		
				return searchedString;
			}
			
         };
});



app.filter("filterstaffJotDesc", function(cursorPosition) {

         return function(input,scope) {
	         	var text     = document.getElementById("jot_description");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\@[a-z]+/gmi);
				var countAtRate    = word.match(/\@/gm);
						
				if(detectUserName)
				{

					scope.detectdepartment = false;
					scope.detectusers 		= true;
					var searchedString 	= [];
					if(word.substring(0, 1) == '@')
					{						
						scope.matchWord = word;		

						var removeAtRate = word.split("@");					
						removeAtRate     = removeAtRate[1];
						angular.forEach(input,function(value,key){
							var listedstaff = value.user_name;
							listedstaff     = listedstaff.toLowerCase();
							removeAtRate    = removeAtRate.toLowerCase();
							if(listedstaff.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
			
         };
});




app.filter("descDepartmentFilter", function(cursorPosition) {

         return function(input,scope) {
         		
	         	var text     = document.getElementById("jot_description");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\#[a-z]+/gmi);
				var countAtRate    = word.match(/\#/gm);
						
				if(detectUserName)
				{

					scope.detectdepartment = true;
					scope.detectusers 		= false;

					var searchedString 	= [];
					if(word.substring(0, 1) == '#')
					{						
						scope.matchWord = word;		

						var removeAtRate = word.split("#");					
						removeAtRate     = removeAtRate[1];
						angular.forEach(input,function(value,key){
							var listedstaff = value.department_name;
							listedstaff     = listedstaff.toLowerCase();
							removeAtRate    = removeAtRate.toLowerCase();
							if(listedstaff.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
			
         };
});