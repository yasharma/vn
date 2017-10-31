"use strict";

app.controller('documentCenterController',['$scope','$rootScope','globalRequest','$mdDialog','toastService','$timeout',function($scope,$rootScope,globalRequest,$mdDialog,toastService,$timeout){
	

	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.document_name 		= "";		
		$scope.document_description = "";
		$scope.fileData 			= "";		
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

		/*********************************************
		* Check files exists in scope to upload
		* if yes, upload doument
		* if no, save the information without files
		*********************************************/

		var popup;
		if ($scope.fileData && $scope.fileData.length) {


			globalRequest.uploadFiles($rootScope.activeHotelData._id,'document_center',$scope.fileData).then(function (response) {			
                $timeout(function () {
	                if(response.status == 1)
	                {
	                   /*********************************************
						* Save document information
						*********************************************/

	                   var request = {
						            url:window.__API_PATH.ADD_DOCUMENT,
						            method:"POST",
						            data:{
						            	hotel_id      			:  $rootScope.activeHotelData._id,
						            	document_name   		:  $scope.document_name,
						            	department      		:  $rootScope.department,
						            	tags        			:  $scope.ctrl.itemTagModel,
						            	document_description    :  $scope.document_description,
						            	files       		    :  response.result,
						            	upload_date				:  new Date().getTime()
						            }
						    };

						globalRequest.jotCRUD(request).then(function(dcresponse){
						 	var popup;
						 	if(dcresponse.status == 1)
						 	{
						 		$scope.blankFields();				
						 		if(!$scope.documentList)
						 		{
						 			$scope.documentList = [];
						 		}
						 		$scope.documentList.push(dcresponse.result);
						 		popup = {"message":dcresponse.message,"class":dcresponse.class};
								toastService.alert(popup);
						 		
						 	}  else {
						 		var errors = '<ul class="mdToast-error-list">';
								angular.forEach(dcresponse.errors,function(value,key){
									errors += '<li>'+value.message+'</li>';
								});
								errors += '</ul>';
								popup = {"message":errors,"class":""};
								toastService.errors(popup);
						 	}
						 });
					}  else {
				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(response.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}
                });
            });            


		} else {

			/*************************************************
			* Save document information if no files in scope
			*************************************************/

			var request = {
			            url:window.__API_PATH.ADD_DOCUMENT,
			            method:"POST",
			            data:{
			            	hotel_id      			:  $rootScope.activeHotelData._id,
			            	document_name   		:  $scope.document_name,
			            	department      		:  $rootScope.department,
			            	tags        			:  $scope.ctrl.itemTagModel,
			            	document_description    :  $scope.document_description,			            	
			            	upload_date				:  new Date().getTime()
			            }
			    };

			globalRequest.jotCRUD(request).then(function(response){
			 	
			 	if(response.status == 1)
			 	{
			 		$scope.blankFields();				
			 		if(!$scope.documentList)
			 		{
			 			$scope.documentList = [];
			 		}
			 		$scope.documentList.push(response.result);

			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 		
			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });
		}
		

	};

	/*****************************************
	* Open  document files view
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

	$scope.removeDc = function(detail,index){

		var request={
			url:window.__API_PATH.DELETE_DOCUMENT,
			method:"DELETE",
			params:{_id:detail}
		};
		
		globalRequest.jotCRUD(request).then(function(response){	

			if(response.status == 1)
			{
				$scope.documentList.splice(index, 1);
			}			
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
	* Append selected files in scope variable 
	*****************************************/	

	$scope.uploadDocument = function(files, errFiles) {	
		$scope.fileData = 	files;
    };

    /*****************************************
	* delete  file from scope variable 
	*****************************************/

    $scope.deleteAttachment = function(hashKey){
		$scope.fileData = $scope.fileData.filter(function(key){
			return key.$$hashKey != hashKey;
		});
	};
	
	
}]);