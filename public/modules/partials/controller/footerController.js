"use strict";

app.controller('footerController', ['$scope','$rootScope','$location',
	function($scope,$rootScope,$location) {
		//$rootScope.popup = true;
		$scope.callClosePopup = function(){
			$rootScope.popup = false;
			$rootScope.popupData = {text:'',action:''};
		};	

		$scope.redirectToHome = function(){
			$rootScope.popup = false;
			$rootScope.popupData = {text:'',action:''};
			$location.url($location.path());
			
		};
	}
]);


