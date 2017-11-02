"use strict";
app.directive('editJotDirectives', ['globalRequest','$rootScope','$mdDialog','toastService','socket',
	function(globalRequest,$rootScope,$mdDialog,toastService,socket){
            return {
         
                link: function ($scope, element, attr) {


					/**************************************
					* Open move to dc form
					**************************************/

					$scope.moveDC = function(detail){	
						$mdDialog.show({	
							controller: 'moveDcController',
							controllerAs: 'movectrl',			
						    templateUrl: '/modules/jot/views/move_dc.html',
							multiple: true,
							clickOutsideToClose:true,
							fullscreen: $scope.customFullscreen,
							locals:{Detail:{detail:detail,prevScope:$scope}}				
						}).then(function(answer) {}, function() {});

					};


					/**************************************
					* Change status
					**************************************/

					$scope.changeStatus = function(){
						if($scope.edit_jot.status == 'close')
						{
							$scope.edit_jot.status = 'open';
						} else {
							$scope.edit_jot.status = 'close';
						}						
					
						var request = {
							url:window.__API_PATH.UPDATE_JOT,
							method:"put",
							data:{
								jot_id 			: 	$scope.edit_jot._id,	
								status 			: 	$scope.edit_jot.status	
							}
						};						

						globalRequest.jotCRUD(request).then(function(response){
							var popup;	
							if(response.status ==1)
							{
								var message = "Status updated:-<br>"+$scope.edit_jot.status; 

								var commentRequest={
									url:window.__API_PATH.ADD_COMMENT,
									method:"POST",
									data:{					
										hotel_id 			: $scope.edit_jot.hotel_id, 
										jot_id 				: $scope.edit_jot._id, 
										user_id 			: $rootScope.currentUser._id,
										post_date 			: new Date().getTime(), 
										message 			: message, 
										type 				: "activity"
									}
								};
								globalRequest.jotCRUD(commentRequest);	
								var JotType = $scope.edit_jot.jot_type;
								globalRequest.getJotList(JotType);
								$mdDialog.cancel();
								popup = {"message":response.message,"class":response.class};
								toastService.alert(popup);

							} else {
								var errors = '<ul class="mdToast-error-list">';
								angular.forEach(response.errors,function(value,key){
										console.log(value);
									errors += '<li>'+value.message+'</li>';
								});
								errors += '</ul>';								
								popup = {"message":errors,"class":""};
								toastService.errors(popup);
							} 
							
						});
					};
					
					/**************************************
					* Update Jot
					**************************************/	

					$scope.saveUpdatedJot = function(prevData){

						var updatedValue = {
							jot_id 			: 	$scope.edit_jot._id,
							jot_title 		: 	$scope.jot_title,
							jot_description : 	$rootScope.jot_description,
							jot_members 	: 	$rootScope.jot_members,
							due_date 		: 	new Date($rootScope.due_date).getTime(),
							priority 		: 	$rootScope.priority,
							department 		: 	$rootScope.department,
							hotel_room 		: 	$rootScope.hotel_room	
						}; 
						var request= {
							url:window.__API_PATH.UPDATE_JOT,
							method:"put",
							data:updatedValue
						};
						

						globalRequest.jotCRUD(request).then(function(response){
							var popup;	
							if(response.status ==1)
							{
								socket.emit('notificationToRoom',response.result);
                      			globalRequest.getNotification();

								var message='',actions=false;

								if(prevData.jot_members != updatedValue.jot_members)
								{
									actions = true;
									message += "<br>Members List:-<br>";
									message += updatedValue.jot_members+"<br>";
								}

								if(prevData.department != updatedValue.department)
								{
									actions = true;
									message += "<br>Departments List:-<br>";
									message += updatedValue.department+"<br>";
								}

								if(prevData.due_date != updatedValue.due_date)
								{
									actions = true;
									message += "<br>Due date:-<br>";
									message += $rootScope.due_date+"<br>";
								}

								if(prevData.priority != updatedValue.priority)
								{
									actions = true;
									message += "<br>Priority:-<br>";
									message += updatedValue.priority+"<br>";
								}


								if(actions)
								{
									message = "Jot information updated:-<br>"+message; 

									var commentRequest={
										url:window.__API_PATH.ADD_COMMENT,
										method:"POST",
										data:{					
											hotel_id 			: prevData.hotel_id, 
											jot_id 				: prevData._id, 
											user_id 			: $rootScope.currentUser._id,
											post_date 			: new Date().getTime(), 
											message 			: message, 
											type 				: "activity"
										}
									};
									globalRequest.jotCRUD(commentRequest);
								}
								
							var JotType = $scope.edit_jot.jot_type;
							globalRequest.getJotList(JotType);
							$mdDialog.cancel();
							popup = {"message":response.message,"class":response.class};
							toastService.alert(popup);

							} else {
								var errors = '<ul class="mdToast-error-list">';
								angular.forEach(response.errors,function(value,key){
										console.log(value);
									errors += '<li>'+value.message+'</li>';
								});
								errors += '</ul>';								
								popup = {"message":errors,"class":""};
								toastService.errors(popup);
							} 
							
						});
					};

				
					/**************************************
					* Archive Jot
					**************************************/

					$scope.archiveJot = function(){
						var jotid = {jot_id:$scope.edit_jot._id};

						var request={
							url:window.__API_PATH.DELETE_JOT,
							method:"DELETE",
							params:jotid
						};
						
						globalRequest.jotCRUD(request).then(function(response){				
							var JotType = $scope.edit_jot.jot_type;
							globalRequest.getJotList(JotType); 
							$mdDialog.cancel();
							var popup = {"message":response.message,"class":response.class};
							toastService.alert(popup);
						});
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
					* Close popup
					**************************************/
					$scope.close = function(){
						 $mdDialog.cancel();
					};
                    
                }
            };
    }]);



