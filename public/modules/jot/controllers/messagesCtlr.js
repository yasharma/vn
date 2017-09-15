"use strict";

app.controller('messagesCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'messages';
		$rootScope.directory = 'messages';	
	}
]);
