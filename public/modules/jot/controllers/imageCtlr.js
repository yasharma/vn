"use strict";

app.controller('imageCtlr', ['$scope','$rootScope','Upload','$timeout','localStorageService',
	function($scope,$rootScope,Upload,$timeout,localStorageService) {
	

		/*****************************************
		* Jot image upload
		*****************************************/

		$rootScope.issueImages = '';
		$scope.uploadFiles = function(files, errFiles) {
			var hotel = localStorageService.get('hotel');
			$scope.files = files;
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                data: {	                    
	                    hotel_id : hotel.hotel_id,
	                    files    : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result;
	                   var uploadedImagesName = []; 
	                    angular.forEach(result, function(data) {				
				            if(data.status){
				            	uploadedImagesName.push(data.filename);
				            }
				        });
				        $rootScope.issueImages = uploadedImagesName;
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.progress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };

		
	}
]);
