"use strict";

app.controller('footerController', ['$scope','$rootScope','$mdDialog','$location',
	function($scope,$rootScope,$mdDialog,$location) {
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


