"use strict";

app.controller('taskDatepickerCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	

		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Make task pattern
		*/

		$scope.patterns = window.__API_PATH.RECURRING_PATTERN;
		$scope.weeks    = window.__API_PATH.WEEK_NAME;
		$rootScope.selectedDays = [];

		 
		/*
		* Show/Hide pattern
		*/

		$scope.patternShow = function(pattern){
			$rootScope.selectedPattern = pattern.id;		
			$scope.selectedPatternDesc = pattern.description;	
	        $rootScope.selectedDays = [];

	        if(pattern.id == 'daily' || pattern.id == 'weekly')
			{	
				/***** Auto check all week value *****/	

				
				angular.forEach($scope.weeks, function (item) {
					if(pattern.id == 'daily')
					{
						item.Selected = true;	
					} else {
						item.Selected = false;
					}		            
		            $rootScope.selectedDays.push(item.value);
		        });				
				
			}
			
			

		};		

		/*
		* Store pattern on temp variable
		*/

		  
		  $scope.toggleWeek = function(selected,weekValue) {
			  var index = $rootScope.selectedDays.indexOf(weekValue);		 
			  if (index > -1) 
			  {
				$rootScope.selectedDays.splice(index, 1);
			  }
			  else
			  {
			    $rootScope.selectedDays.push(weekValue);
			  }
			  
		  };
				
	}
]);
