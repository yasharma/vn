"use strict";

app.controller('taskCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'task';
		$rootScope.directory = 'task';		
	
	}
]);
