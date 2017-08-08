"use strict";

app.controller('dueDataCtlr', ['$scope','$rootScope','$mdDialog',
	function($scope,$rootScope) {

		/*
		*
		* Default Date
		*
		*/
		if(!$rootScope.due_date)
		{
			$rootScope.due_date = new Date(new Date().getTime());
		}

	}
]);
