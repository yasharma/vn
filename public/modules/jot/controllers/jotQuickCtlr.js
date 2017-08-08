"use strict";

app.controller('jotQuickCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
			
			/*
			*
			* Set jot type list
			*
			*/
			$rootScope.jot_type = 'quick';

			$scope.jotSelect = function(event,value){
				$rootScope.jot_type = value;
			};
	}
]);
