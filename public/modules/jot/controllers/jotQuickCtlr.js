"use strict";

app.controller('jotQuickCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
			
			/*
			*
			* Set jot type list
			*
			*/
			$rootScope.jot_type = 'quick';
			$scope.jotList   = window.__API_PATH.JOT_TYPES;

			$scope.jotSelect = function(event,value){
				$scope.jot_type = value;	
				$rootScope.jot_type = value;
			};
	}
]);
