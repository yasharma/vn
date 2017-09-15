"use strict";

app.controller('jotPopupCtrl', ['$scope','$rootScope','$mdDialog','ActivateTab','globalRequest','localStorageService',
	function($scope,$rootScope,$mdDialog,ActivateTab,globalRequest,localStorageService) {	
		/*
		* Activate tab
		*/
		$scope.currentNavItem   = ActivateTab;	

		/**********************************************************
	    * Get active hotel data
	    **********************************************************/

		$scope.activeHotelData   = localStorageService.get('hotel');

		/**********************************************************
	    * Get staff list
	    **********************************************************/

		globalRequest.getStaff();

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $scope.activeHotelData.jot_types;


		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/
		$scope.close = function(){
			 $mdDialog.cancel();
		};
	}
]);
