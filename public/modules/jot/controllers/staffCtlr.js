"use strict";

app.controller('staffCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
	     
	     /*after click on suggestion list*/                                                            
	    $scope.callbackStaff = function(){
	            $scope.staffFocus = true;        
	    };
	}
]);
