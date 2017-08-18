"use strict";

app.controller('issueCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type = 'issue';
		$rootScope.directory = 'issue';	

	}
]);
