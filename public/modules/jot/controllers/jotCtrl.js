"use strict";

/**************************************
* Login controller
**************************************/


app.controller('jotController', ['$scope','$http','$location','$timeout','localStorageService','jotFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,jotFactory,$rootScope,AuthSrv,$mdDialog) {



		/**************************************
		* Get jot
		**************************************/

		jotFactory.get('/api/get_jot','').then(function(response){
				
				$rootScope.jots = response.data;	
		});	

		/**************************************
		* Cteate jot
		**************************************/	
		$scope.createJot = function(){
		};

	}
]);
