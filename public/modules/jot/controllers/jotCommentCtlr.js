"use strict";

app.controller('jotCommentCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','$route','toastService','localStorageService','Upload','$timeout',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,$route,toastService,localStorageService,Upload,$timeout) {

		var userDetail = localStorageService.get('user');	
		
		
		$scope.edit_jot		   		= jotData;		
		$scope.jot_title   			= $scope.edit_jot.jot_title;
		$rootScope.jot_description	= $scope.edit_jot.jot_description;
		$rootScope.directory  		= jotData.jot_type;
		$rootScope.jot_members		= $scope.edit_jot.jot_members;
		$rootScope.due_date    		= new Date($scope.edit_jot.due_date);
		$rootScope.priority    		= $scope.edit_jot.priority;
		$rootScope.department  		= $scope.edit_jot.department;
		$rootScope.issueImages      = '';
		$rootScope.files      		= '';
		$rootScope.progress      	= -1;
		$scope.commentImages 		= '';



		console.log(jotData);
		$scope.submitComment = function(){
			var commentRequest={
				url:window.__API_PATH.ADD_COMMENT,
				method:"POST",
				data:{					
					hotel_id 			: jotData.hotel_id, 
					jot_id 				: jotData._id, 
					user_id 			: userDetail._id, 
					attachment 			: $scope.commentImages, 
					post_date 			: new Date().getTime(), 
					message 			: $scope.message, 
				}
			};

			globalRequest.jotCRUD(commentRequest).then(function(response){	
				getComments();		
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);

				$scope.commentImages = [];
				$scope.message 		 = "";
				$scope.files 		 = "";
			});
		};

		/**************************************
		* Clear comment
		**************************************/

		$scope.cancelComment = function(){
			$scope.commentImages = [];
			$scope.message 		 = "";
			$scope.files 		 = "";
		};
		


		/**************************************
		* Get comments
		**************************************/

		function getComments(){

			var getCommentRequest={
				url:window.__API_PATH.GET_COMMENT,
				method:"GET",
				params:{					
					hotel_id 			: jotData.hotel_id, 
					jot_id 				: jotData._id
				}
			};
			globalRequest.jotCRUD(getCommentRequest).then(function(response){
				$scope.commentList = response.result;	
	
			});
		}
		getComments();


		/*****************************************
		* Jot image upload
		*****************************************/
		$scope.commentImages = '';
		$scope.uploadFiles = function(files, errFiles,uploadType) {
			var folder;
			if(uploadType == "comment")
			{
				$scope.files  = files;
				folder   	  = 'comments';
			}

			if(uploadType == "sidebar")
			{
				folder   	  = jotData.jot_type;
			}

				
			
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: {	                    
	                    hotel_id     : jotData.hotel_id,
	                    folder_name  : folder,	                    
	                    file         : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result; 
						if(uploadType == "comment")
						{	
							var uploadedImagesName = []; 					
		                    angular.forEach(result, function(data) {				
					            if(data.status){
					            	uploadedImagesName.push(data);
					            }
					        });
					        $scope.commentImages = uploadedImagesName;
				    	}

				    	if(uploadType == "sidebar")
						{	

							angular.forEach(result, function(data) {				
					            if(data.status){
					            	jotData.image = jotData.image.concat(data);
					            }
					        });
							jotData.image = jotData.image.filter(function(key){
									if(key){ return key;}
							});	
							updateJotMethod({image:jotData.image});
				    	}

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



	    /**************************************
		* Save comment
		**************************************/

		function updateJotMethod(paramArgs){

			var JotRequest={
				url:window.__API_PATH.UPDATE_JOT,
				method:"put",
				data:{
					jot_id 			: jotData._id					
				}
			};	
			Object.assign(JotRequest.data, paramArgs);

			globalRequest.jotCRUD(JotRequest).then(function(response){			
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);

				var JotType = jotData.jot_type;
				globalRequest.getJotList(JotType); 

				$rootScope.issueImages   = '';
				$rootScope.files   		 = '';
				$rootScope.progress      = -1;
			});
		}

		/**************************************
		* Cancel description
		**************************************/

		$scope.cancelDesc = function(){

			$rootScope.issueImages   = '';
			$rootScope.files   		 = '';
			$rootScope.progress      = -1;

		};

		/**************************************
		* Watch file upload
		**************************************/

		$rootScope.$watch('issueImages',function(){			
			jotData.image = jotData.image.concat($rootScope.issueImages);	
		});

		/**************************************
		* Delete attachment
		**************************************/

		$scope.deleteAttachment = function(imageHashKey){


			jotData.image = jotData.image.filter(function(key){
				return key.$$hashKey != imageHashKey;
			});

			var imageRequest = {
					image           : jotData.image
				};

				console.log(jotData.image);
				console.log(imageRequest);

			updateJotMethod(imageRequest);
		};



		/**************************************
		* Update description
		**************************************/

		$scope.saveDescription = function(){
			jotData.image = jotData.image.filter(function(key){
								if(key){ return key;}
							});

			var descRequest = {
					jot_description : $rootScope.jot_description,
					image           : jotData.image
				};
			updateJotMethod(descRequest);
		};

		/**************************************
		* Update member
		**************************************/

	    $scope.saveMember = function(){
	    	var memberRequest = {jot_members : $rootScope.jot_members};
			updateJotMethod(memberRequest);

	    };

	    /**************************************
		* Update due date
		**************************************/

	    $scope.saveDueDate = function(){
	    	var memberRequest = {due_date : new Date($rootScope.due_date).getTime()};
			updateJotMethod(memberRequest);

	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.saveDept = function(){
	    	var memberRequest = {department : $rootScope.department};
			updateJotMethod(memberRequest);
	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.savePriority = function(){
	    	var memberRequest = {priority : $rootScope.priority};
			updateJotMethod(memberRequest);
	    };
			

	    /**************************************
		* Close popup
		**************************************/

		$scope.close = function(){
			 $mdDialog.cancel();
		};
		
	}
]);