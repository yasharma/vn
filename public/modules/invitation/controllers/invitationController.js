"use strict";

app.controller('invitationController',['$scope','$rootScope','empDetail','globalRequest','$timeout','$mdDialog','$location','loginFactory','localStorageService','AuthSrv',
	function($scope,$rootScope,empDetail,globalRequest,$timeout,$mdDialog,$location,loginFactory,localStorageService,AuthSrv){

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


		$scope.invite_first_name 	  = getUrlParameter('first_name',empDetail);
		$scope.invite_last_name  	  = getUrlParameter('last_name',empDetail);
		$scope.invite_contact_number  = getUrlParameter('contact_number',empDetail);
		$scope.invite_email           = getUrlParameter('email',empDetail);
		$scope.token                  = getUrlParameter('token',empDetail);
		$scope.profileImage  		  = [];
		


		/************************************************
		* Register user for invited hotel
		************************************************/	

		$scope.inviteRegisterUser = function(){

			var request={
				url:window.__API_PATH.MEMBER_SIGNUP,
				method:"POST",
				data:{
					first_name 			: $scope.invite_first_name,
					last_name 		    : $scope.invite_last_name,
					contact_number 		: getUrlParameter('contact_number',empDetail),
					email 			    : getUrlParameter('email',empDetail),
					token				: $scope.token,
					profile_image  		: '',
					password            : $scope.invite_password
				}
			};

			
			if($scope.profileImage.length > 0)
			{	

			/********************************************
			*  Upload profile image if exists
			********************************************/		


				globalRequest.uploadFiles(null,'profile_image',$scope.profileImage).then(function(profileResponse){
					$scope.registerImageResult =  profileResponse;


					/********************************************
					*  Register user with profile image
					********************************************/

					request.data.profile_image = profileResponse.result[0].filename;
					
					globalRequest.jotCRUD(request).then(function(response){					
						if(response.status == 1)
						{
							$mdDialog.cancel();					
							$location.path('/');
							$rootScope.popupData  = {
										text:  'Congratulations! You have successfully registered.',
										action: 'redirect'
							};
							 $timeout(function() {
							 	$rootScope.popup = true;
							 }, 500);
						} else {
							$mdDialog.cancel();					
							$location.path('/');
						}
					});

				});


			} else {

				/********************************************
				*  Register user without profile image
				********************************************/
				
				globalRequest.jotCRUD(request).then(function(response){					
					if(response.status == 1)
					{
						$mdDialog.cancel();					
						$location.path('/');
						$rootScope.popupData  = {
									text:  'Congratulations! You have successfully registered.',
									action: 'redirect'
						};
						 $timeout(function() {
						 	$rootScope.popup = true;
						 }, 500);
					} else {
						$mdDialog.cancel();					
						$location.path('/');
					}
				});

			}
			
			
		};


		/************************************************
		* Add use in invited hotel if already registered
		************************************************/


		$scope.inviteSignINUser  = function(){
			
			var loginrequest={
					url:window.__API_PATH.LOGIN,
					method:"POST",
					data:{
							email    : $scope.invite_login,
							password : $scope.invite_signinpassword
					}
				};

				loginFactory.login(loginrequest).then(function(response){
				$scope.loginresult = response;

				if(response.status == 1)
				{

					localStorageService.set('token', response.result.token);
					localStorageService.set('user', response.result.user);
					AuthSrv.isLogged = true;
					inviteRequest();
				}
				
			});				

		};

		/********************************************
		*  Keep uploaded file in temp scope
		********************************************/

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profileImage = files;
		};


		/****************************************
		* Update invited user information 
		****************************************/

		function inviteRequest(){
			var signInRequest={
				url:window.__API_PATH.UPDATE_EMPLOYEE,
				method:"POST",
				data:{
					employee_id 			: getUrlParameter('employee_id',empDetail),	
					hotel_id 				: getUrlParameter('hotel_id',empDetail),
					contact_number          : $scope.invite_login
				}
			};

			globalRequest.jotCRUD(signInRequest).then(function(response){	
				
				if(response.status == 1)
				{

					var user = localStorageService.get('user', user);

					user.hotel_id.push(getUrlParameter('hotel_id',empDetail));
					localStorageService.set('user', user);

					$mdDialog.cancel();
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
}]);