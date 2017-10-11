"use strict";

app.filter("filterdepartment", function(cursorPosition) {


         return function(input,scope) {
         	
         	var text     = document.getElementById("department");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\#[a-z,0-9,_\/.-]+/gmi);
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
						var abbreviation     = value.abbreviation;

						listedDepartment     = listedDepartment.toLowerCase();
						abbreviation         = abbreviation.toLowerCase();
						removeHash           = removeHash.toLowerCase();

						if(listedDepartment.startsWith(removeHash) || abbreviation.startsWith(removeHash))
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

            var detectUserName = word.match(/\@[a-z,0-9,_\/.-]+/gmi);
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

						var first_name  = value.first_name;
						var last_name   = value.last_name;
						var user_name   = value.user_name;
						user_name       = user_name.toLowerCase();
						var listedstaff = first_name+last_name;
						
						listedstaff     = listedstaff.toLowerCase();
						removeAtRate    = removeAtRate.toLowerCase();
						
						if(listedstaff.startsWith(removeAtRate) || user_name.startsWith(removeAtRate))
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

	            var detectUserName = word.match(/\@[a-z,0-9,_\/.-]+/gmi);
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
							var first_name  = value.first_name;
							var last_name   = value.last_name;
							var user_name   = value.user_name;
							user_name       = user_name.toLowerCase();
							var listedstaff = first_name+last_name;


							listedstaff     = listedstaff.toLowerCase();
							removeAtRate    = removeAtRate.toLowerCase();

							if(listedstaff.startsWith(removeAtRate) || user_name.startsWith(removeAtRate))
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

	            var detectUserName = word.match(/\#[a-z,0-9,_\/.-]+/gmi);
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
							var department_name = value.department_name;
							var abbreviation    = value.abbreviation;

							department_name     = department_name.toLowerCase();
							abbreviation        = abbreviation.toLowerCase();

							removeAtRate        = removeAtRate.toLowerCase();
							if(department_name.startsWith(removeAtRate) || abbreviation.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
			
         };
});

app.filter("checklistFilter", function() {
         return function(input,scope) {         		
         		var totalComplete = 0;
	         	angular.forEach(input,function(value,key){
	         		var completeSub = 0;
	         		angular.forEach(value.item_list,function(value1,key1){
	         			if(value1.status == 1)
	         			{
	         				completeSub = completeSub+1;
	         			}	         			
	         		});

	         		if(value.item_list.length == completeSub)
	         		{
	         			totalComplete = totalComplete+1; 
	         		}
	         	});

	         	return totalComplete+'/'+input.length;
         };
});