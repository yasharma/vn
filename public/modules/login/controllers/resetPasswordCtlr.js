"use strict";

/**************************************
* Login controller
http://localhost:3000/resetpassword/0c02baa57acfbb5a51cb0a04c587b8eec2099e3d
**************************************/


app.controller('resetPasswordCtlr', ['$scope','loginFactory','$rootScope','$routeParams','$location',
	function($scope,loginFactory,$rootScope,$routeParams,$location) {	
		console.log($routeParams);
		var token = $routeParams.token;
		
		

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
				});
			} else {
				$scope.resetResult.message = 'Password is not match with confirm password.';
				$scope.resetResult.class = 'Autherror';
			}			
			
		};

	}
]);
