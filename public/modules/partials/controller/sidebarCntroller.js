"use strict";

app.controller('sidebarCntroller',['$scope','$location','$mdSidenav',function($scope,$location,$mdSidenav){

	/*$scope.closeSidebar = function(){			
			$rootScope.leftopen = false;
			$timeout(function() {				
			   $rootScope.$apply();
			});			
	};


	$rootScope.$on('handleSidebar', function() {
		$scope.closeSidebar();   	
	});*/

	$scope.getClass = function (path) {
	  return ($location.path() === path) ? 'active' : '';
	};
	

	$scope.closeSidebar = function(){
		$mdSidenav('sidebar').close();
	};
}]);