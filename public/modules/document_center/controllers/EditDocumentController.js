"use strict";

app.controller('EditDocumentController', ['$scope','$rootScope','globalRequest','Detail','$mdDialog','$timeout','toastService',
	function($scope,$rootScope,globalRequest,Detail,$mdDialog,$timeout,toastService) {
		
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

			/*********************************************
			* Check files exists in scope to upload
			* if yes, upload doument
			* if no, save the information without files
			*********************************************/

			var popup;
			if ($scope.newFiles && $scope.newFiles.length) {

				globalRequest.uploadFiles($rootScope.activeHotelData._id,'document_center',$scope.newFiles).then(function (response) {				
	                $timeout(function () {
		                if(response.status == 1)
		                {
		                   /*********************************************
							* Save document information
							*********************************************/
							$scope.newFiles= '';
							Array.prototype.push.apply($scope.filesData,response.result);

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

							globalRequest.jotCRUD(request).then(function(dcresponse){	 
							 	if(dcresponse.status ==1)
							 	{
							 		$mdDialog.cancel();
							 		globalRequest.getDocument();

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
						}   else {
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
			            url:window.__API_PATH.UPDATE_DOCUMENT,
			            method:"PUT",
			            data:{
			            	_id      	   			:  $scope._id,
			            	document_name   		:  $scope.document_name,
			            	department      		:  $rootScope.department,
			            	tags        			:  $scope.ctrl.itemTagModel,
			            	document_description    :  $scope.document_description,			            	
			            	upload_date				:  new Date().getTime()
			            }
			          };

				globalRequest.jotCRUD(request).then(function(response){
				 	
				 	if(response.status ==1)
				 	{
				 		$mdDialog.cancel();
				 		globalRequest.getDocument();
				 		popup = {"message":response.message,"class":response.class};
						toastService.alert(popup);

				 	}   else {
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

		/************************************
		* Remove files by index
		*************************************/	

		$scope.removeImageIndex = function(fData){
			$scope.filesData = $scope.filesData.filter(function( obj ) {
					    return obj.filename != fData.filename;
					});

		};	
  

		/*****************************************
		* Append selected files in scope variable 
		*****************************************/


		$scope.$watch('files', function () {		
	        $scope.uploadDocument($scope.files);
	    });

	    $scope.$watch('file', function () {
	        if ($scope.file != null) {
	            $scope.files = [$scope.file];
	        }
	    });


		$scope.uploadDocument = function(files, errFiles) {	
			$scope.newFiles = files;
	    };


	    /*****************************************
		* delete  file from scope variable 
		*****************************************/

	    $scope.deleteAttachment = function(hashKey){
			$scope.newFiles = $scope.newFiles.filter(function(key){
				return key.$$hashKey != hashKey;
			});
		};

	}
]);