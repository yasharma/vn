"use strict";

app.controller('footerController', ['$scope','$rootScope','$location','$interval',
	function($scope,$rootScope,$location,$interval) {
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

		/*****************************************
		* Loader icon
		*****************************************/

		var self = this;
	      self.activated = true;
	      self.determinateValue = 30;
	      $interval(function() {
	        self.determinateValue += 1;
	        if (self.determinateValue > 100) {
	          self.determinateValue = 30;
	        }

	      }, 10);
	}
]);


