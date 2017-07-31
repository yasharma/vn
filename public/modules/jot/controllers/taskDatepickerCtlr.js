"use strict";

app.controller('taskDatepickerCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		* Show/Hide datepicker according to type
		* Clear previous value before datepicker display
		*/
		
		$scope.taskTime = function(taskType){
			$scope.oneTime   = false;
			$scope.recurring = false;
			if(taskType == 'oneTime')
			{
				$scope.onetime = '';
				$scope.oneTime = true;
			}
			if(taskType == 'recurring')
			{
				$scope.start_recurring = '';
				$scope.end_recurring   = '';
				$scope.recurring = true;
			}
		};

		
				
	}
]);
