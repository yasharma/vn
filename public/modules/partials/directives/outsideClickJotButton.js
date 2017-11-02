"use strict";

app.directive('outsideClickJotButton', ['$window', function ($window) {    
    return {                 
        scope: {
            outsideCallback: '&outsideClickJotButton',
        },      
        link: function(scope, element, attrs) {

         var expressionHandler = scope.outsideCallback();               

          angular.element($window).on('click', function (event) {    
              var clickedContainerID = angular.element(event.target).attr('clickedContainer');
              if(clickedContainerID != 'jotButton')
              {
                  if (element[0].contains(event.target))
                  {} else {                 
                    expressionHandler();                    
                  }
              }          
            });
        }
    };
}]);
