"use strict";

app.controller('priorityCtlr', ['$scope','$rootScope','$mdDialog',
	function($scope,$rootScope) {

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		if(!$rootScope.priority)
		{
			$rootScope.priority = window.__API_PATH.JOT_PRIORITY[0].name;
		}		

		$scope.selectPriority = function(event,value){
			 $rootScope.priority 	= value;
		};

	}
]);
