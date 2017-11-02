"use strict";

app.controller('sidebarCntroller',['$scope','$rootScope','$location','$mdSidenav',function($scope,$rootScope,$location,$mdSidenav){

	$scope.getClass = function (path) {
	  return ($location.path() === path) ? 'active' : '';
	};	

	$scope.closeSidebar = function(){
		$mdSidenav('sidebar').close();
	};

	/************************************************
	* Get list of Jot types selected by current user
	*************************************************/

	$scope.boards =  $rootScope.activeHotelData.jot_types;
}]);