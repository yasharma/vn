"use strict";

app.filter("filterdepartment", function() {

	/**************************************
		* Get cursor position
		**************************************/
		 function GetCaretPosition(ctrl) {
            var CaretPos = 0; 
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }            
            else if (ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
        }

        /**************************************
		* Retrun word of befor cursor
		**************************************/
        function ReturnWord(text, caretPos) {
                var index = text.indexOf(caretPos);
	            var preText = text.substring(0, caretPos);
	            if (preText.indexOf(" ") > 0) {
	                var words = preText.split(" ");
	                return words[words.length - 1]; //return last word
	            }
	            else {
	                return preText;
	            }
        }

         return function(input,scope) {
         	
         	var text     = document.getElementById("department");
			var caretPos = GetCaretPosition(text);
            var word     = ReturnWord(text.value, caretPos);

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




app.filter("filterstaff", function() {

	/**************************************
		* Get cursor position
		**************************************/
		 function GetCaretPosition(ctrl) {
            var CaretPos = 0; 
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }            
            else if (ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
        }

        /**************************************
		* Retrun word of befor cursor
		**************************************/
        function ReturnWord(text, caretPos) {
                var index = text.indexOf(caretPos);
	            var preText = text.substring(0, caretPos);
	            if (preText.indexOf(" ") > 0) {
	                var words = preText.split(" ");
	                return words[words.length - 1]; //return last word
	            }
	            else {
	                return preText;
	            }
        }

         return function(input,scope) {
         	
         	var text     = document.getElementById("staff");
			var caretPos = GetCaretPosition(text);
            var word     = ReturnWord(text.value, caretPos);

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
					removeAtRate      = removeAtRate.toLowerCase();
					
					if(listedstaff.startsWith(removeAtRate))
					{						
						searchedString.push(value);
					}
				});				
				return searchedString;
			}
			
         };
});