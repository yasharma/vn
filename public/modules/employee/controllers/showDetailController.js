"use strict";

app.controller('showDetailController', ['$scope','empDetail',
	function($scope,empDetail) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});	
		
		if($scope.profile_image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image;
		} else {
			$scope.image = '/assets/images/default_profile.png';
		}
		
		console.log($scope);
	}
]);



