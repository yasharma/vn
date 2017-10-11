"use strict";

app.controller('sidebarCntroller',['$scope','$rootScope','$location','$timeout',function($scope,$rootScope,$location,$timeout){

	$scope.closeSidebar = function(){			
			$rootScope.leftopen = false;
			$timeout(function() {				
			   $rootScope.$apply();
			});			
	};


	$rootScope.$on('handleSidebar', function() {
		$scope.closeSidebar();   	
	});

	$scope.getClass = function (path) {
	  return ($location.path() === path) ? 'active' : '';
	};
}]);