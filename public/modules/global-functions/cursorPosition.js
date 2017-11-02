'use strict';

app.factory('cursorPosition', [ function () {
	return{		
		
		GetCaretPosition: function(ctrl){
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
		},	

		ReturnWord: function(text, caretPos){
			var index = text.indexOf(caretPos);
            var preText = text.substring(0, caretPos);
            
          

           /* if (preText.indexOf(" ") > 0) {*/
                var words = preText.split(" ");
                
                return words[words.length - 1]; //return last word
            /*}
            else {
                return preText;
            }*/			
		},

	};
}]);