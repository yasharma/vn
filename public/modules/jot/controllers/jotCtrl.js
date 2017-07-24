"use strict";

app.controller('jotController', ['$scope','$http','$location','$timeout','localStorageService','jotFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,jotFactory,$rootScope,AuthSrv,$mdDialog) {

		/**************************************
		* Get jot list
		**************************************/

		jotFactory.get(GET_JOT_URL,'').then(function(response){
				
				$rootScope.jots = response.data;	
		});	


		/**************************************
		* Open jot popup
		**************************************/

		

		$scope.quickTaskPopup = function(){
			$mdDialog.show({
				controller: 'createJotCtrl',
				templateUrl: '/modules/jot/views/hotel-quick-task.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
			}).then(function(answer) {}, function() {});

		};

		
	}
]);

