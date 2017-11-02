"use strict";

app.controller("hotelBoardController",['$scope','$rootScope','$routeParams','globalRequest','localStorageService','$location','$mdDialog','$route',
	function($scope,$rootScope,$routeParams,globalRequest,localStorageService,$location,$mdDialog,$route){

		/**********************************************************
	    * Get active hotel data
	    **********************************************************/
	    $rootScope.bglayout = false;
		//$scope.activeHotelData   = localStorageService.get('hotel');


		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;

		/**************************************************
		* Redirect if hotel obj not found in localstorage
		**************************************************/

		if(!$rootScope.activeHotelData || $rootScope.activeHotelData == ""){
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
			$rootScope.JotListData = '';
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
			$scope.edit_jot		   				= jotData;		
			$scope.jot_title   					= jotData.jot_title;
			$rootScope.jot_description			= jotData.jot_description;
			$rootScope.jot_members				= jotData.jot_members;
			$rootScope.due_date    				= new Date(jotData.due_date);
			$rootScope.priority    				= jotData.priority;
			$rootScope.department  				= jotData.department;
			$rootScope.hotel_room  				= jotData.hotel_room;
		};



		/**************************************
		* Open comment popup
		**************************************/

		$scope.openComments = function(jotData){			
			$mdDialog.show({
				controller: 'jotCommentCtlr',
				controllerAs: 'ctlr',
				templateUrl: '/modules/jot/views/jot_comments.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
				locals: {jotData:jotData}
			});
		};

		/**************************************
		* Appned Department of click of icon
		**************************************/

		$scope.selectDept = function(depatAbbr){
			var checkAlreadyExists = $rootScope.department.match(/\#[a-z,0-9,_\/.-]+/gmi);
            var match = -1;
            if(checkAlreadyExists)
            {
              match = checkAlreadyExists.indexOf('#'+depatAbbr);
            }
             if(match > -1)
            {
              return false;
            }
            
			$rootScope.department = $rootScope.department+' #'+depatAbbr+' ';
		};
		
	}
]);