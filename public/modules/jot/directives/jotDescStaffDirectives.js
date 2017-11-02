"use strict";

app.directive('textareastaffsuggestion', ['$compile', '$timeout','$rootScope','replaceOccurence', function($compile, $timeout,$rootScope,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            textareastaffsuggestion: '=',
            textareadepartmentsuggestion: '=',
            textareastaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {
           
              var template = '<div class="dropdown suggestions_list" ng-show="enableDescFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (textareastaffsuggestion | filterstaffJotDesc:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>    <div class="dropdown suggestions_list" ng-show="enableDescFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !descFilitered.length || selected"><li ng-repeat="item in descFilitered = (textareadepartmentsuggestion | descDepartmentFilter:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}} ({{item.abbreviation}})</a></li></ul></div>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {
                scope.enableDescFilter = true;
                

                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 ){
                   
                  /********** For user list  ***********/
                   if(scope.filitered)
                    {
                      if(scope.active < scope.filitered.length - 1)
                      {
                        scope.active++;
                        scope.$digest();
                      }               
                    }

                    /********** For department list  ***********/

                    if(scope.descFilitered)
                    {
                       if(scope.active < scope.descFilitered.length - 1)
                        {
                          scope.active++;
                          scope.$digest();
                        }
                    }
                    
                } else if($event.keyCode == 13) { 

                    /********** For user list  ***********/                 
                    if(scope.filitered){
                      scope.$apply(function() {
                          scope.click(scope.filitered[scope.active]);
                      });
                    }
                    /********** For department list  ***********/
                     if(scope.descFilitered){
                        scope.$apply(function() {
                            scope.click(scope.descFilitered[scope.active]);
                        });
                      } 


                }

              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                var replaceString     = scope.ngModel;
          			var replaceWord       = scope.matchWord;
                var selectedValue;
                /********** For user list  ***********/
                if(scope.filitered)
                {
                  replaceWord           = replaceWord.split('@');
                  replaceWord           = '@'+replaceWord[1];
          			  selectedValue         = "@"+item.user_name;
                }

                /********** For department list  ***********/
                if(scope.descFilitered)
                {    
                  replaceWord           = replaceWord.split('#');
                  replaceWord           = '#'+replaceWord[1];
                  selectedValue     = "#"+item.abbreviation;
                }

          			var replacedValue     = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);
                  
          				scope.ngModel = replacedValue;
          				scope.selected = item;


                  scope.$watch(item, function(input) {
                      $rootScope.descFocus = true; 
                   });

                  /*if(scope.textareastaffsuggestionCallback) {
                      scope.textareastaffsuggestionCallback(item);
                  }*/
                  elem[0].blur();
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

            /*********************************************
            * Add user name on click user suggestion list
            **********************************************/

            $rootScope.$on('addUserNameAtMousePosition', function(e, val) {
                var domElement = elem[0];

                if (document.selection) {
                  domElement.focus();
                  var sel = document.selection.createRange();
                  sel.text = val;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                  
                } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                  var startPos = domElement.selectionStart;
                  var endPos = domElement.selectionEnd;

                  domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);

                  $rootScope.jot_description = domElement.value;

                  domElement.selectionStart = startPos + val.length;
                  domElement.selectionEnd = startPos + val.length;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                } else {
                  
                  domElement.value += val;       
                  $rootScope.jot_description = domElement.value;

                  $timeout(function() {                        
                      domElement.focus();
                  });
                }

              }); 

            
        }
    };
}]).directive('focusDesc', ['$timeout', '$parse','$rootScope', function($timeout, $parse,$rootScope) {
      return {          

          link: function(scope, element, attrs) {

              var model = $parse(attrs.focusMe);
              $rootScope.$watch(function(value) {
                     if(value.descFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                          $rootScope.descFocus = '';
                      });                      
                     }
              });
          }
      };
  }]);