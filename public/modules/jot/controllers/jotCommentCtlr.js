"use strict";

app.controller('jotCommentCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','toastService','$timeout',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,toastService,$timeout) {

		var userDetail = $rootScope.currentUser;	
		$scope.getMonthList = window.__API_PATH.MONTH;
		
		$scope.edit_jot		   			= jotData;		
		$scope.jot_title   				= $scope.edit_jot.jot_title;
		$rootScope.jot_description		= $scope.edit_jot.jot_description;
		$rootScope.directory  			= jotData.jot_type;
		$rootScope.jot_members			= $scope.edit_jot.jot_members;
		$rootScope.due_date    			= new Date($scope.edit_jot.due_date);
		$rootScope.priority    			= $scope.edit_jot.priority;
		$rootScope.status    			= $scope.edit_jot.status;
		$rootScope.department  			= $scope.edit_jot.department;
		$rootScope.files      			= '';
		$rootScope.progress      		= -1;
		$scope.commentImages 			= '';
		$rootScope.checklist  			= [];
		$scope.checklist  		    	= jotData.checklist;
		$scope.assigned_departments     = jotData.assigned_departments;
		$scope.assigned_members  		= jotData.assigned_members;
		$scope.task_type  		        = jotData.task_type;


		$scope.submitComment = function(){

			/**************************************
			* Check & upload file for comment
			**************************************/			

			if($scope.Commentfiles)
			{

				globalRequest.uploadFiles(jotData.hotel_id,'comments',$scope.Commentfiles).then(function (response) {				
	                $timeout(function () {
	                   var result = response.result;

	                    /**************************************
						* Add new comment with attchment
						**************************************/	 

	                    var commentRequest={
							url:window.__API_PATH.ADD_COMMENT,
							method:"POST",
							data:{					
								hotel_id 			: jotData.hotel_id, 
								jot_id 				: jotData._id, 
								user_id 			: userDetail._id, 
								attachment 			: result, 
								post_date 			: new Date().getTime(), 
								message 			: $scope.message, 
							}
						};

						globalRequest.jotCRUD(commentRequest).then(function(response){
									
							var popup = {"message":response.message,"class":response.class};
							toastService.alert(popup);

							if(response.status == 1)
							{
								getComments();
								$scope.Commentfiles  = '';
								$scope.message 		 = "";
							}							

						});
	                });
	            });
			} else {
				
				/******************************************
				* Add new comment if attachment not exists
				******************************************/

				if($scope.message == '' || !$scope.message)
				{
					var popup = {
							"message":"Please write some comment.","class":""
						};
					toastService.errors(popup);
					return false;
				}

				var commentRequest={
					url:window.__API_PATH.ADD_COMMENT,
					method:"POST",
					data:{					
						hotel_id 			: jotData.hotel_id, 
						jot_id 				: jotData._id, 
						user_id 			: userDetail._id, 						
						post_date 			: new Date().getTime(), 
						message 			: $scope.message, 
					}
				};

				globalRequest.jotCRUD(commentRequest).then(function(response){	
					getComments();		
					var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);					
					$scope.message 		 = "";

				});

			}

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
		* Appned staff member of click of icon
		**************************************/

		$scope.selectStaff = function(userName){
			var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi);
            var match = -1;
            if(checkAlreadyExists)
            {
              match = checkAlreadyExists.indexOf('@'+userName);
            }
             if(match > -1)
            {
              return false;
            }

			$rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
		};

		/**************************************
		* Appned Department of click of icon
		**************************************/

		$scope.selectDept = function(depatAbbr){

			var checkAlreadyExists = $rootScope.department.match(/\#[a-z,0-9,_\/.-]+/gmi);
            var match = -1;
            if(checkAlreadyExists)
            {
              match = checkAlreadyExists.indexOf('#'+depatAbbr);
            }
             if(match > -1)
            {
              return false;
            }

			$rootScope.department = $rootScope.department+' #'+depatAbbr+' ';
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

			if(uploadType == "comment")
			{

				$scope.Commentfiles = files;
			}

			if(uploadType == "sidebar")
			{

				globalRequest.uploadFiles(jotData.hotel_id,jotData.jot_type,files).then(function (response) {
		                $timeout(function () {
		                    var result = response.result; 					

							angular.forEach(result, function(data) {				
					            if(data.status){
					            	jotData.image = jotData.image.concat(data);
					            }
					        });
							jotData.image = jotData.image.filter(function(key){
									if(key){ return key;}
							});	
							updateJotMethod({image:jotData.image});
					    	

		                });
		            });
		        
			}	

	    };


	    /**************************************
		* Delete attachment
		**************************************/

		$scope.deleteCommentAttachment = function(imageHashKey){
			
			$scope.Commentfiles = $scope.Commentfiles.filter(function(key){
				return key.$$hashKey != imageHashKey;
			});

		};



	    /**************************************
		* Save comment
		**************************************/

		function updateJotMethod(paramArgs){

			var JotRequest = {
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
				$rootScope.files   		 = '';				
				$scope.showDesc = false;

			});
		}

		/**************************************
		* Cancel description
		**************************************/

		$scope.cancelDesc = function(){
			$rootScope.files   		 = '';
			$rootScope.progress      = -1;

		};

		/**************************************
		* Delete attachment
		**************************************/

		$scope.deleteAttachment = function(file){

			jotData.image = jotData.image.filter(function(obj){
				return obj.filename != file.filename;
			});

			var imageRequest = {
					image           : jotData.image
				};

			updateJotMethod(imageRequest);			
		};



		/**************************************
		* Update description
		**************************************/

		$scope.saveDescription = function(){			

			/****************************
			* Upload file if exists
			****************************/

			if($rootScope.files && $rootScope.files.length > 0)
			{
				globalRequest.uploadFiles(null,$rootScope.directory,$rootScope.files).then(function(fileRasponse){
	                if(fileRasponse.status == 1)
	                {
	                    $rootScope.files   = '';
	                	jotData.image      = jotData.image.concat(fileRasponse.result);


	                	jotData.image = jotData.image.filter(function(key){
								if(key){ return key;}
						});
						var descRequest = {
								jot_description : $rootScope.jot_description,
								image           : jotData.image
							};

						updateJotMethod(descRequest);
	                }
	            });
			} else {

				var descRequest = {
						jot_description : $rootScope.jot_description,						
					};
				updateJotMethod(descRequest);

			}
		};

		/**************************************
		* Update member
		**************************************/

	    $scope.saveMember = function(){
	    	var memberRequest = {jot_members : $rootScope.jot_members};
	    	var membersArray = $rootScope.jot_members.match(/\@[a-z,0-9]+/gmi);
	    	membersArray.filter(function(obj){
	    		obj = obj.replace("@", "");
		    	if($scope.assigned_members.indexOf(obj) < 0)
		    	{
		    		$scope.assigned_members.push(obj);
		    	}	    		
	    	});
	    	
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
	    	var deptRequest = {department : $rootScope.department};

	    	var departmentArray = $rootScope.department.match(/\#[a-z,0-9]+/gmi);
	    	departmentArray.filter(function(obj){
	    		obj = obj.replace("#", "");
		    	if($scope.assigned_departments.indexOf(obj) < 0)
		    	{
		    		$scope.assigned_departments.push(obj);
		    	}	    		
	    	});

			updateJotMethod(deptRequest);
	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.savePriority = function(){
	    	var priorityRequest = {priority : $rootScope.priority};
			updateJotMethod(priorityRequest);
	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.savePattern = function(){
	    	var task = '';
                  if($rootScope.taskTime == 'onetime')
                  {
                     task = {
                      type: 'onetime',
                      date: new Date($rootScope.onetime_date).getTime()
                    };
                  } 

                  if($rootScope.taskTime == 'recurring'){

                    var pattern = '';
                    if($rootScope.selectedPattern == 'weekly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays,
                              
                             };
                    } 


                    if($rootScope.selectedPattern == 'yearly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              month: $rootScope.yealy_month,
                              date : $rootScope.yearly_day      
                             };
                    } 


                    if($rootScope.selectedPattern == 'monthly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              date : $rootScope.monthly_recurring_date
                             };
                    }

                    if($rootScope.selectedPattern == 'daily')
                    {
                      pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays
                             };
                    }

                    task = {
                      type       : 'recurring',
                      start_date : new Date($rootScope.start_recurring_date).getTime(),
                      end_date   : new Date($rootScope.end_recurring_date).getTime(),
                      pattern: pattern
                    };
                  } 
	    	var patternRequest = {task_type : task};

	    	$scope.task_type = task;
			updateJotMethod(patternRequest);
	    };


	    /**************************************
		* Change status
		**************************************/

		$scope.changeStatus = function(){
			
			if($rootScope.status == 'close')
			{
				$rootScope.status = 'open';
			} else {
				$rootScope.status = 'close';
			}

			var stausRequst = {status:$rootScope.status};
			updateJotMethod(stausRequst);

		};
			

	    /**************************************
		* Close popup
		**************************************/

		$scope.close = function(){
			 $mdDialog.cancel();
		};



	/*************************************************************************************************************************************************************************************************************************************************************************************************************************************/




		/*****************************************
		* Add new checklist
		*****************************************/
		
		
		$scope.addchecklist = function(){	
				$scope.mainItemError = '';
				if(!$scope.checklist_heading || $scope.checklist_heading == '')
				{
					
				} else {
					var storedCheckbox = $scope.checklist_heading;					
					$scope.checklist.push({checklist_name:storedCheckbox,item_list:[]});
					$scope.checklist_heading = '';
					$scope.showChecklistAdd = false;
				}
				
		};


		/*****************************************
		* Add Sub-item in checklist
		*****************************************/
		
		$scope.addChecklistSubitem = function(index,itemName){
		

			if(itemName && itemName != "")
			{
				var alreadyExits  = $scope.checklist[index].item_list.filter(function(iValue){	
										return  iValue.name === itemName;
									});
			
				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
                	toastService.alert(popup);
				} else {
					
					$scope.checklist[index].item_list.push({name:itemName,status:0});
					$scope.ctlr.checklist_subitem[index]   = '';
				}
										
			}
			
		};


		/*****************************************
		* Store values of checklist in scope 
		*****************************************/

		$scope.storeChecklist = function(index,subIndex,modelValue){

			if(modelValue)
			{
				$scope.checklist[index].item_list[subIndex].status = 1;
			} else {
				$scope.checklist[index].item_list[subIndex].status = 0;
				
			}
			
		};

		/*****************************************
		* Edit parent list 
		*****************************************/

		$scope.editParentList = function(index,itemValue){			
			if(!itemValue || itemValue == "")
			{
				$scope.ctlr.editParent[index] = false;
			} else {
				$scope.checklist[index].checklist_name = itemValue;							
				$scope.ctlr.editParent[index] = false;
			}
						
		};


		/*****************************************
		* Delete checklist
		*****************************************/

		$scope.deleteChecklist = function(index){			
			$scope.checklist.splice(index, 1);
			$scope.ctlr.editParent[index] = false;									
		};




		/*****************************************
		* Edit subitem 
		*****************************************/

		$scope.editSubItem = function(index,oldValue,newValue,subINdex){	

			if($scope.ctlr.sublist)
			{
				if($scope.ctlr.sublist[index][subINdex])
				{
					$scope.ctlr.sublist[index][subINdex] = true;
				}
			}

			/************************************
			* Check edit field is empty or not
			************************************/

			if(!newValue || newValue == "") {

				/************************************
				* if empty,
				* Then remove subitem
				************************************/
				$scope.checklist[index].item_list = $scope.checklist[index].item_list.filter(function(checklist){						
							return checklist.name != oldValue;
						});
			} else {

				/****************************************
				* if not empty,
				* Then replace subitem value with new
				*****************************************/

				var sublistCount = -1;	
				var alreadyExits  = $scope.checklist[index].item_list.filter(function(iValue){
										sublistCount++;								

										if(sublistCount == subINdex)
										{
											return false;
										}	
										return  iValue.name === newValue;
									});

				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
	            	toastService.alert(popup);
				} else {
		
					$scope.checklist[index].item_list = $scope.checklist[index].item_list.filter(function(checklist){
							if(checklist.name == oldValue)
							{
								checklist.name = newValue;
							}
							return checklist;
						});
					
					$scope.ctlr.editList[index][subINdex] = false;

				}

			}				
					
		};		


		/*****************************************
		* Delete item from sublist
		*****************************************/

		$scope.deleteSublistItem = function(index,itemValue,subindex){

				/* Remove subitem */

				$scope.checklist[index].item_list = $scope.checklist[index].item_list.filter(function(checklist){	
						return checklist.name != itemValue;
					});
				$scope.ctlr.editList[index][subindex] = false;


				/* Reassign value to all left checkbox */
				if($scope.ctlr.sublist)
				{
					$scope.ctlr.sublist[index] = {};
					angular.forEach($scope.checklist[index].item_list,function(value,key){
						if(value.status ==1)
						{
							$scope.ctlr.sublist[index][key] = true;	
						} else {
							$scope.ctlr.sublist[index][key] = false;	
						}
					}); 
				}	
								
		};	

		/**************************************
		* Update Checklist
		**************************************/


		$scope.updateChecklist = function(index,subIndex,modelValue){
			
			if(modelValue)
			{
				$scope.checklist[index].item_list[subIndex].status = 1;				
			} else {
				$scope.checklist[index].item_list[subIndex].status = 0;				
			}	

		};

		$scope.saveChecklist = function(){	
			var checklistRequest = {checklist : $scope.checklist};
			updateJotMethod(checklistRequest);
		};

	}
]);