"use strict";

app.controller("hotelBoardController",['$scope','$rootScope','$routeParams','globalRequest','localStorageService','$location','$mdDialog',
	function($scope,$rootScope,$routeParams,globalRequest,localStorageService,$location,$mdDialog){

		/**********************************************************
	    * Get active hotel data
	    **********************************************************/

		$scope.activeHotelData   = localStorageService.get('hotel');

		/**************************************************
		* Redirect if hotel obj not found in localstorage
		**************************************************/

		if(!$scope.activeHotelData || $scope.activeHotelData == ""){
			$location.path('/dashboard');
			return false;
		}


		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();

		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getStaff();


		$scope.activetype = $routeParams.type;
		if($routeParams.type)
		{

			/**************************************
			* Get jot list
			**************************************/		
			var JotType = $routeParams.type;
			globalRequest.getJotList(JotType);			
			$scope.BoardsPage = true;
			

		} else {

			/**************************************
			* Get jot count
			**************************************/	
			globalRequest.getJotCount();
			$scope.BoardsPage = false;
		}


		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotEditPopup = function(jotData){			
			$mdDialog.show({
				controller: 'editJotCtlr',
				templateUrl: '/modules/jot/views/edit_jot.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:jotData}
			});
		};

		/**************************************
		* Open comment popup
		**************************************/

		$scope.openComments = function(jotData){			
			$mdDialog.show({
				controller: 'jotCommentCtlr',
				templateUrl: '/modules/jot/views/jot_comments.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:jotData}
			});
		};

		
	}
]);