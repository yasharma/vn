"use strict";

app.controller('departmentCtlr', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {
		

		/*****************************************
		* Get department List
		******************************************/

	    globalRequest.getDepartments();

	     /*after click on suggestion list*/                            
	    $scope.callback = function(){	       
	        $scope.deparmentfocus = true;
	         
	    };

	}
]);