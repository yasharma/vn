"use strict";

app.directive('outsideClickSidebar', function ($window) {    
    return {                 
        scope: {
            outsideCallback: '&outsideClickSidebar',
        },      
        link: function(scope, element, attrs) {

         var expressionHandler = scope.outsideCallback();               

          angular.element($window).on('click', function (event) {
              var clickedContainerID = angular.element(event.target).attr('clickedContainer');
              if(clickedContainerID != 'sidebar')
              {
                  if (element[0].contains(event.target))
                  {} else {                 
                  expressionHandler();
                  }
              }            
                         
          });
        }
    };
});
