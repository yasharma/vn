"use strict";

app.controller('resetPasswordCtlr', ['$scope','loginFactory','$rootScope','$routeParams','$location','$mdDialog','$timeout',
	function($scope,loginFactory,$rootScope,$routeParams,$location,$mdDialog,$timeout) {	

		var token = $routeParams.token;

		if($routeParams.expired && $routeParams.expired == 'true')
		{
			$mdDialog.cancel();
			//$location.path('/');
			$rootScope.popupData  = {
						text:  'Link has been expired.',
						action: 'redirect'
			};
			 $timeout(function() {
			 	$rootScope.popup = true;
			 }, 500);
		}
		
		

		/*********************************************
		* Forget password
		***********************************************/
		$scope.resetResult = {message:"",class:""};
		
		$scope.resetPass = function(){
			if($scope.forget_password == $scope.forget_confirm_password)
			{
				var data = {password:$scope.forget_password,token:token};
				var request={
						url:window.__API_PATH.PASSWORD_RESET,
						method:"POST",
						data:data
				};

				loginFactory.login(request).then(function(response){
						$scope.resetResult = response;
						
						if(response.status == 1)
						{
							
							$timeout(function() {
							 	$location.path('/');
							 }, 200);
							$rootScope.popupData = {text:response.message,action:'ok'};	
							 $timeout(function() {
							 	$rootScope.popup = true;
							 }, 300);	
						 }
				});
			} else {
				$scope.resetResult.message = 'Password is not match with confirm password.';
				$scope.resetResult.class = 'Autherror';
				$scope.resetResult.status = 2;
			}			
			
		};

	}
]);