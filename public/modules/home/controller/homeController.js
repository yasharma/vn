"use strict";

app.controller('homeController',['$scope',
	function($scope){
		
  		$scope.config={
		     navigation: false,
		     items:1,	     
		     navContainer: '#customNav',
		     pagination: false,
		     rewindNav : true
		 };
		 
	 
}]);