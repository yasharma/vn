"use strict";

app.controller('iconCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {


	    /*****************************************
		* Keep attachment files in scope
		*****************************************/
	    
		$scope.uploadFiles = function(files, errFiles) {	
			$rootScope.files  = files;
	    };

	    /*****************************************
		* Open staff list
		*****************************************/

	    $scope.openMemberList	=	function(userName){	    	
	    	if($rootScope.clickopen)
	    	{
	    		$rootScope.clickopen = false;	    		
	    	} else {
	    		$rootScope.clickopen = true;
	    	}	    	
	    };


	}
]);