"use strict";

app.directive('closepopup', ['$mdDialog', function($mdDialog) {
      return {                
          link: function(scope, element, attrs) {
              
              scope.closePopUpByDirective = function () {
                $mdDialog.cancel();
              };              
          }
      };
}]);
