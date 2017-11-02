"use strict";

app.directive('departmentypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            departmentypeahead: '=',
            departmenttypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list" ng-show="enabledepartmentFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (departmentypeahead | filterdepartment:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}} ({{item.abbreviation}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {

                scope.enabledepartmentFilter = true;
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {
                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('#');
              replaceWord       = '#'+replaceWord[1];

        			var selectedValue = "#"+item.abbreviation;

    
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);  

        			scope.ngModel = replacedValue;
        			scope.selected = item;

              if(scope.departmenttypeaheadCallback) {
                    scope.departmenttypeaheadCallback(item);
              }
              elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				        if(scope.selected && scope.selected.department_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusDepartment', ['$timeout', '$parse', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.deparmentfocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.deparmentfocus = false;
                     }
              });
          }
      };
    }]);
