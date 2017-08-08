"use strict";

app.controller('noteCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type = 'note';	
	}
]);