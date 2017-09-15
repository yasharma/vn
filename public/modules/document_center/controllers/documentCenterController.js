"use strict";

app.controller('documentCenterController',['$scope','$rootScope','globalRequest','localStorageService','$mdDialog','toastService','Upload','$timeout',function($scope,$rootScope,globalRequest,localStorageService,$mdDialog,toastService,Upload,$timeout){
	var hotel = localStorageService.get('hotel');

	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.document_name 		= "";		
		$scope.document_description = "";
		$scope.filesData 			= "";
		$rootScope.department 		= "";
		$scope.documentProgress 	= -1;
		$scope.documentResult 		= "";	
	};

	$scope.blankFields = function(){
		$scope.blank();
		$scope.ctrl.itemTagModel 	= [];
	};


	/**********************************************************
    * Item tags 
    **********************************************************/

	var self = this;
    self.readonly = false;	    
    self.itemTag = [];
    self.itemTagModel = angular.copy(self.itemTag);
    self.editableitemTag = angular.copy(self.itemTag);
    self.tags = [];	    
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };

    /************************************
	* Get documents
	*************************************/

    globalRequest.getDocument();

    /************************************
	* Get department list
	*************************************/			
	
	globalRequest.getDepartments();

	/************************************
	* Add documents
	*************************************/	
	
	$scope.addDC = function(){	
		var request = {
		            url:window.__API_PATH.ADD_DOCUMENT,
		            method:"POST",
		            data:{
		            	hotel_id      			:  hotel._id,
		            	document_name   		:  $scope.document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.ctrl.itemTagModel,
		            	document_description    :  $scope.document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime()
		            }
		    };

		globalRequest.jotCRUD(request).then(function(response){
			console.log(response);
		 	$scope.documentResult = response;

		 	if(response.status == 1)
		 	{
		 		$scope.blankFields();				
		 		if(!$scope.documentList)
		 		{
		 			$scope.documentList = [];
		 		}
		 		$scope.documentList.push(response.result);
		 		
		 	}
		 });

	};

	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openDocumentFileView = function(detail){
			$mdDialog.show({
				controller: 'documentViewController',
				templateUrl: '/modules/document_center/views/view_files.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};

	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openDocumentEditPopup = function(detail){
			$mdDialog.show({
				controller: 'EditDocumentController',
				controllerAs: 'ctrl',
				templateUrl: '/modules/document_center/views/edit_document.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};

	

	/*****************************************
	* Delete contact
	*****************************************/	

	$scope.removeDc = function(detail){

		var request={
			url:window.__API_PATH.DELETE_DOCUMENT,
			method:"DELETE",
			params:{_id:detail._id}
		};
		
		globalRequest.jotCRUD(request).then(function(response){				
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);
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
                   $scope.filesData = response.data.result;
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
	
	
}]);