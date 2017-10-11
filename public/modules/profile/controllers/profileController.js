"use strict";

app.controller('profileController',['$scope','$rootScope','globalRequest','localStorageService','toastService',function($scope,$rootScope,globalRequest,localStorageService,toastService){	

	$scope.first_name   = $rootScope.currentUser.first_name;
	$scope.last_name    = $rootScope.currentUser.last_name;
	$scope.email 		= $rootScope.currentUser.email;


	/******************************
	* Update information function
	*******************************/

	function userInfoUpdate(dataObj){
		var request={
				url:window.__API_PATH.UPDATE_PROFILE,
				method:"PUT",
				data:dataObj
			};
		globalRequest.jotCRUD(request).then(function(response){					 			 	
		 	if(response.status == 1)
		 	{	 		

				var popup = {"message":response.message,"class":"success"};
	            toastService.alert(popup);					
		 	}
		}); 
	}


	/***********************
	* Update profile image
	***********************/

	$scope.uploadprofileImage = function(files, errFiles) {
			globalRequest.uploadFiles(null,'profile_image',files).then(function(profileResponse){

				$rootScope.currentUser.profile_image = profileResponse.result[0].filename;
		 		localStorageService.set('user',$rootScope.currentUser);

					var imageObj = {
							_id  			: $rootScope.currentUser._id,
							profile_image   : profileResponse.result[0].filename
					};
					userInfoUpdate(imageObj);

				});
		};

		/*****************************
		* Update profile information
		*****************************/

		$scope.updateProfileInfo = function(){

			var infoObj = {
					_id  			: $rootScope.currentUser._id,
					first_name      : $scope.first_name,
					last_name       : $scope.last_name,
					email           : $scope.email
			};

			$rootScope.currentUser.first_name = $scope.first_name;
			$rootScope.currentUser.last_name  = $scope.last_name;
			$rootScope.currentUser.email      = $scope.email;
		 	localStorageService.set('user',$rootScope.currentUser);

			userInfoUpdate(infoObj);
		};


		/*****************************
		* Change password
		*****************************/

		$scope.changePassword = function(){
			if($scope.new_password != $scope.confirm_password)
			{
					var popup = {"message":"Password does not match the confirm password.","class":"Autherror"};
	            	toastService.alert(popup);
	            	return false;
			}
				var passwordRequest={
						url:window.__API_PATH.CHANGE_PASSWORD,
						method:"POST",
						data:{
							_id  	     : $rootScope.currentUser._id,         
							oldpassword  : $scope.old_password,
							newpassword  : $scope.new_password
						}
					};
				globalRequest.jotCRUD(passwordRequest).then(function(response){				 			 	
				 
				 	var popup = {"message":response.message,"class":response.class};
	            	toastService.alert(popup);	
	            	$scope.cancelChangePassword();
				});
		};

		/*****************************
		* Cancel password change
		*****************************/

		$scope.cancelChangePassword = function(){
				$scope.old_password = $scope.new_password = $scope.confirm_password = '';
		};
}]);