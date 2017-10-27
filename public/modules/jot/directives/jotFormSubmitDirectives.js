"use strict";

app.directive('jotFormSubmitDirectives', function($rootScope, $mdDialog,toastService,globalRequest,$routeParams) {
      return {
          
          link: function($scope, element, attrs) {
            var hotel = $rootScope.activeHotelData;
            /***************************************************
            * Prevent form submit on enter key
            ***************************************************/
            element.bind("keydown", function($event) {
                 if($event.keyCode == 13)
                 {
                  $event.preventDefault();
                 }
              });
                

              /*
              * Blank field before open form
              */

              $rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.jot_members = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_description = $rootScope.files = $rootScope.jot_title  =  '';
              $rootScope.progress = -1;



              /**************************************
              * Appned staff member of click of icon
              **************************************/

              /*$scope.selectStaff = function(userName){
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
              };*/

              $scope.selectStaff = function(userName){
        
                if($rootScope.jot_members)
                { 
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
                } else {
                  $rootScope.jot_members = ' @'+userName+' ';
                }
                
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
                           
                

                /******************************************************************
                ||  Create jot 
                ******************************************************************/

              $scope.createJot = function(){

                  /*console.log($rootScope);
                  console.log($rootScope.selectedPattern);
                  return false;*/
                  

                  /**
                  ||  Start task Jot Data json 
                  **/

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
                  /*******************************
                  ||  End task Jot Data json 
                  *******************************/
                

                  $scope.message = ' ';
                  
                  
                  var jotDataArray = {
                      jot_title           : $rootScope.jot_title,
                      jot_description     : $rootScope.jot_description,
                      jot_members         : $rootScope.jot_members,
                      priority            : $rootScope.priority,
                      hotel_id            : hotel._id,
                      jot_type            : $rootScope.jot_type,
                      hotel_room          : $rootScope.hotel_room,
                      due_date            : new Date($rootScope.due_date).getTime() || '',
                      department          : $rootScope.department,                      
                      checklist           : $rootScope.checklist,                        
                      task_type           : task,
                      status              : 'open'
                  };

                  /*console.log($rootScope.checklist);
                  return false;*/

                  var request={
                    url:window.__API_PATH.CREATE_JOT,
                    method:"POST",
                    data:jotDataArray
                  };
                  
                  globalRequest.jotCRUD(request).then(function(response){
                    
                    
                    if(response.status == 1)
                    {
                      var jotID = response.result._id;

                      /****************************
                      * Upload file if exists
                      ****************************/

                      if($rootScope.files && $rootScope.files.length > 0)
                      {
                     
                        globalRequest.uploadFiles(hotel._id,$rootScope.directory,$rootScope.files).then(function(fileRasponse){
                            if(fileRasponse.status == 1)
                            {
                              var updateRequest={
                                    url:window.__API_PATH.UPDATE_JOT,
                                    method:"PUT",
                                    data:{
                                      jot_id : jotID,
                                      image  : fileRasponse.result
                                    }
                                  };


                              /****************************
                              * Update files in jot 
                              ****************************/

                              globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                                if(updateResponse.status == 1)
                                {
                                  $rootScope.files = [];
                                  var JotType = $routeParams.type;
                                  globalRequest.getJotList(JotType);
                                  $mdDialog.cancel();
                                  var popup = {"message":response.message,"class":"success"};
                                  toastService.alert(popup);
                                }

                              });  
                            }
                        });
                      } else {

                          var JotType = $routeParams.type;
                          globalRequest.getJotList(JotType);
                          $mdDialog.cancel();
                          var popup = {"message":response.message,"class":"success"};
                          toastService.alert(popup);
                      }
                    } else {
                        
                        var errors = '<ul class="mdToast-error-list">';
                        angular.forEach(response.errors,function(value,key){
                          errors += '<li>'+value.message+'</li>';
                        });
                        errors += '</ul>';
                        var errorpopup = {"message":errors,"class":""};
                        toastService.errors(errorpopup);
                    }
                    
                  });

                };


                /*
                *
                * Set jot priority type on click
                *
                */

                $scope.jotPriorityList  = window.__API_PATH.JOT_PRIORITY;
                $scope.jot_priority   = $scope.jotPriorityList[0].name;

                $scope.selectPriority = function(event,value){
                   $scope.jot_priority = value;
                };

                
          }
      };
    });
