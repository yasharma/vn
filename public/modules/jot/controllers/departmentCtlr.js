"use strict";

app.controller('departmentCtlr', ['$scope',
	function($scope) {
		

		/*****************************************
		* Get department List
		******************************************/

	    //globalRequest.getDepartments();

	     /*after click on suggestion list*/                            
	    $scope.callback = function(){	       
	        $scope.deparmentfocus = true;
	         
	    };

	}
]);