"use strict";

app.directive('stafftypeahead', ['$compile', '$timeout', function($compile, $timeout) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            stafftypeahead: '=',
            stafftypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (stafftypeahead | filterstaff:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true
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
                    scope.active++
                    scope.$digest()
                } else if($event.keyCode == 13) {
                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active])
                    })
                }
            });

            scope.click = function(item) {
            var replaceString = scope.ngModel;
			var replaceWord   = scope.matchWord;
			var selectedValue     = "@"+item.user_name+" ";

			var replacedValue = replaceString.replace(new RegExp("\\"+replaceWord+"\\b"), selectedValue);
				scope.ngModel = replacedValue;
				scope.selected = item;

                if(scope.stafftypeaheadCallback) {
                    scope.stafftypeaheadCallback(item)
                }
                elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index
            };

            scope.$watch('ngModel', function(input) {
            	
				if(scope.selected && scope.selected.user_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    }
}]).directive('focusStaff', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.staffFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.staffFocus = false;
                     }
              });
          }
      };
    });
