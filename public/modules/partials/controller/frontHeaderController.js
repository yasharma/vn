"use strict";

app.controller('frontHeaderController', ['$scope','$rootScope','$mdDialog','$location','anchorSmoothScroll','$timeout','$routeParams',
	function($scope,$rootScope,$mdDialog,$location,anchorSmoothScroll,$timeout,$routeParams) {	

		$scope.menus = window.__API_PATH.HEADER_MENU;

		if($routeParams.verify && $routeParams.verify == 'true')
		{

			$rootScope.popupData  = {
						text:  '<strong>Congratulations! </strong> <br>You have successfully verified the email address.<br> Please sign-in and start managing your hotels.',
						action: 'redirect'
			};
		
			 $timeout(function() {
			 	$rootScope.popup = true;
			 }, 300);
		}



		/******************************************
		* Scroll page to the section
		******************************************/
		$scope.activemenu = $scope.menus[0].label;
		$scope.gotoElement = function (eID){			
			if(eID.id && eID.id != "")
			{				
				$location.path('/');
				$timeout(function(){
					anchorSmoothScroll.scrollTo(eID.id);
				},200);    		
	
			}
			$timeout(function(){
				$scope.activemenu = eID.label;
			},200);
			      
	    };

	    

		$scope.openLoginForm = function(){
			$mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true							
			}).then(function(answer) {}, function() {});
		};


		$scope.openRegisterFormpopup = function(){
			$mdDialog.show({
				templateUrl : "/modules/register/views/register.tpl.html",
       			controller  :  "registerController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true								
			}).then(function(answer) {}, function() {});
		};


	}
]);
