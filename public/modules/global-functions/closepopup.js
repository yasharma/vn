"use strict";

app.directive('closepopup', function($mdDialog) {
      return {                
          link: function(scope, element, attrs) {
              
              scope.closePopUpByDirective = function () {
                $mdDialog.cancel();
              };              
          }
      };
});
