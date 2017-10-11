"use strict";

app.controller('jotPopupCtrl', ['$scope','$rootScope','$mdDialog','ActivateTab','globalRequest',
	function($scope,$rootScope,$mdDialog,ActivateTab,globalRequest) {
		
		/*
		* Activate tab
		*/
		$scope.currentNavItem   = ActivateTab;	

		/**********************************************************
	    * Get staff list
	    **********************************************************/

		globalRequest.getStaff();

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;

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
