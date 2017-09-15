"use strict";

app.controller('EditDocumentController', ['$scope','$rootScope','localStorageService','globalRequest','Detail','$mdDialog','Upload','$timeout',
	function($scope,$rootScope,localStorageService,globalRequest,Detail,$mdDialog,Upload,$timeout) {
		var hotel = localStorageService.get('hotel');
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(Detail.detail,function (value,key) {
		    if(key == 'tags')
			{
				$scope.ctrl.itemTagModel = value;

			} else if(key == 'department'){

				$rootScope.department = value;

			} else if(key == 'files'){

				$scope.filesData = value;

			} else {
				$scope[key] = value;
			}
		});	


		/************************************
		* Edit document
		*************************************/		

		$scope.editDC = function(){	
			
			var request = {
		            url:window.__API_PATH.UPDATE_DOCUMENT,
		            method:"PUT",
		            data:{
		            	_id      	   			:  $scope._id,
		            	document_name   		:  $scope.document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.ctrl.itemTagModel,
		            	document_description    :  $scope.document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime()
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.docEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getDocument();
			 	}

			 });

		};

	/************************************
	* Remove files by index
	*************************************/	

	$scope.removeImageIndex = function(fData){
		$scope.filesData = $scope.filesData.filter(function( obj ) {
				    return obj.filename != fData.filename;
				});

	};



	$scope.$watch('files', function () {		
        $scope.uploadDocument($scope.files);
    });

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
  

	/*****************************************
	* Profile image upload
	*****************************************/	

	$scope.uploadDocument = function(files, errFiles) {			
        if (files && files.length) {	
            Upload.upload({
                url: window.__API_PATH.UPLOAD_FILE,
                type:'post',
                arrayKey: '',
                data: {	                    
                    hotel_id     : hotel._id,
                    folder_name  : 'document_center',	                    
                    file         : files
                }
            }).then(function (response) {
                $timeout(function () {
                   //$scope.filesData.push(response.data.result);
                   Array.prototype.push.apply($scope.filesData,response.data.result);
                   console.log($scope.filesData);

                });
            }, function (response) {
                if (response.status > 0) {
                    $scope.errorMsg = response.status + ': ' + response.data;
                }
            }, function (evt) {
                $scope.documentProgress = 
                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }

    };

	}
]);