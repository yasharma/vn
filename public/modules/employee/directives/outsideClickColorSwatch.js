"use strict";

app.directive('outsideClickColorSwatch', ['$window', function ($window) {    
    return {                 
        scope: {
            outsideCallback: '&outsideClickColorSwatch',
        },      
        link: function(scope, element, attrs) {
         var expressionHandler = scope.outsideCallback();  
          angular.element($window).on('click', function (event) {    
              if (element[0].contains(event.target))
              {                  
              } else {                 
                expressionHandler();                
             }           
                         
            });
        }
    };
}]);
