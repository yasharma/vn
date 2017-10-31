"use strict";
app.directive('editJotDirectives', ['globalRequest','$rootScope','$mdDialog','toastService',
	function(globalRequest,$rootScope,$mdDialog,toastService){
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
					};
					
					/**************************************
					* Update Jot
					**************************************/
	

					$scope.saveUpdatedJot = function(){


						$scope.edit_jot.jot_id				= $scope.edit_jot._id;
						$scope.edit_jot.jot_title			= $scope.jot_title;
						$scope.edit_jot.jot_description		= $rootScope.jot_description;
						$scope.edit_jot.jot_members		    = $rootScope.jot_members;
						$scope.edit_jot.due_date    		= new Date($rootScope.due_date).getTime();
						$scope.edit_jot.priority   		    = $rootScope.priority;
						$scope.edit_jot.department 		 	= $rootScope.department;
						$scope.edit_jot.hotel_room 		 	= $rootScope.hotel_room;

						
					
						var request= {
							url:window.__API_PATH.UPDATE_JOT,
							method:"put",
							data:$scope.edit_jot
						};

						

						globalRequest.jotCRUD(request).then(function(response){
							var popup;	
							if(response.status ==1)
							{
												 									
								/*console.log($scope.edit_jot);

								var message,actions;	

								if(jot.jot_members != $scope.edit_jot.jot_members)
								{
									//message = "Update the jot members list.";
									console.log('diff');
								} else {
									console.log('same');
								}*/



								/*if(actions == 'saveMember'){

									message = "Update the jot members list.";

								} else if(actions == 'saveDueDate'){

									message = "Changed the jot due date.";

								} else if(actions == 'saveDept'){

									message = "Update the jot department list.";

								} else if(actions == 'savePriority'){

									message = "Changed the jot priority.";								

								} else if(actions == 'changeStatus'){

									message = "Changed the jot status";								
								} 
*/
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



