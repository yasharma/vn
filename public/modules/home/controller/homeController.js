"use strict";

app.controller('homeController',['$scope','$rootScope','$routeParams','$mdDialog','globalRequest','localStorageService','$location','$timeout',
	function($scope,$rootScope,$routeParams,$mdDialog,globalRequest,localStorageService,$location,$timeout){

		/*******************************
		* Get current user information
		********************************/

		var userData = $rootScope.currentUser;

		/*******************************
		* Get parameter from path.
		* 1st argument is parameter name
		* 2nd argument is path
		********************************/
		
		function getUrlParameter(param, dummyPath) {

		        var sPageURL = dummyPath || window.location.search.substring(1),
		            sURLVariables = sPageURL.split(/[&||?]/),
		            res;

		        for (var i = 0; i < sURLVariables.length; i += 1) {
		            var paramName = sURLVariables[i],
		                sParameterName = (paramName || '').split('=');

		            if (sParameterName[0] === param) {
		                res = sParameterName[1];
		            }
		        }

		        return res;
		}



		/*******************************
		* If url have parameter
		********************************/

		if($routeParams.data)
		{

			var decodeurl     = window.atob($routeParams.data);
			var paramdata     = getUrlParameter('formtype',decodeurl);
			var contactNumber = getUrlParameter('contact_number',decodeurl);
			var empID 	      = getUrlParameter('employee_id',decodeurl);


			/*******************************************
			* If user already logged in
			* & requsted contact number is not matched
			* then, redirect
			********************************************/



			if(userData && userData.contact_number != contactNumber)
			{
				$location.path('/');
			} else if(userData && userData.contact_number == contactNumber){

				/*******************************************
				* If user already logged in
				* & requested contact number is matched
				* then, update user and hotel
				********************************************/

				inviteRequest();

			} else {

				/*******************
				* Check user status
				*******************/

				if(paramdata  == 'invitation')
				{
					var request={
						url:window.__API_PATH.CHECK_USER,
						method:"POST",
						data:{
							contact_number    : contactNumber,
							employee_id       : empID
						}
					};
					
					globalRequest.jotCRUD(request).then(function(response){				


						/***********************
						* If user not exists
						***********************/

						if(response.status == 1)
						{
							$mdDialog.show({
								templateUrl : "/modules/invitation/views/invitation_register.html",
			        			controller  :  "invitationController",
								parent: angular.element(document.body),
								fullscreen: $scope.customFullscreen,
								clickOutsideToClose:false,		
								locals:{empDetail:decodeurl}							
							}).then(function(answer) {}, function() {});
						}

						/***********************
						* If user already exists
						***********************/

						if(response.status == 2)
						{
							$mdDialog.show({
								templateUrl : "/modules/invitation/views/invitation_signin.html",
			        			controller  :  "invitationController",
								parent: angular.element(document.body),
								fullscreen: $scope.customFullscreen,
								clickOutsideToClose:false,		
								locals:{empDetail:decodeurl}							
							}).then(function(answer) {}, function() {});
						}



						/**************************************
						* If user already registered with hotel
						**************************************/

						if(response.status == 3)
						{
							$location.path('/');
						}

					});
				}

			}
			
		}


		/****************************************
		* Update invited user information 
		****************************************/


		function inviteRequest(){
			var signInRequest={
				url:window.__API_PATH.UPDATE_EMPLOYEE,
				method:"POST",
				data:{
					employee_id 			: getUrlParameter('employee_id',decodeurl),	
					hotel_id 				: getUrlParameter('hotel_id',decodeurl),
					contact_number          : getUrlParameter('contact_number',decodeurl),
				}
			};

			globalRequest.jotCRUD(signInRequest).then(function(response){	
				
				if(response.status == 1)
				{

					var user = localStorageService.get('user');
					user.hotel_id.push(getUrlParameter('hotel_id',decodeurl));					
					localStorageService.set('user', user);
					
					$location.path('/dashboard');
					$rootScope.popupData  = {
								text:  'Congratulations! You have successfully registered.',
								action: 'redirect'
					};
					 $timeout(function() {
					 	$rootScope.popup = true;
					 }, 500);
				}							
				
			});
		}	

		/*******************************
		* Owl carousel parameter 
		********************************/

  		$scope.config={
		     navigation: false,
		     items:1,	     
		     navContainer: '#customNav',
		     pagination: false,
		     rewindNav : true
		 };		 
	 
}]);