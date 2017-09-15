"use strict";

app.directive('iconstafflistsuggestion', ['$compile', '$timeout','$rootScope',function($compile, $timeout,$rootScope) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            iconstafflistsuggestion: '=',
            iconstaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {
              $rootScope.clickopen = false;
              var template = '<ul class="" style="display:block;"><li ng-repeat="item in filitered = (iconstafflistsuggestion | filter:$root.filtermember) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {
                 
                  if($event.keyCode == 38 && scope.active > 0) { 
                      scope.active--;
                      scope.$digest();
                  } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                      scope.active++;
                      scope.$digest();
                  } else if($event.keyCode == 13) {
                      scope.click(scope.filitered[scope.active]);
                  }
              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                
                var username  = item.user_name;
                    username  = username.trim();                
                var appendValue = "@"+username+" ";
                console.log(1);
                console.log(appendValue);
                $rootScope.$broadcast('addUserNameAtMousePosition',appendValue);
                $rootScope.clickopen = false;
                $rootScope.filtermember = '';
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
                
                  if(scope.selected && scope.selected.user_name == input) {
                        return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));                       
        }
    };
}]);