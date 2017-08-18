"use strict";
app.directive('jotFormSubmitDirectives', function($timeout, $parse,$rootScope, $mdDialog,toastService,globalRequest,localStorageService) {
      return {
          
          link: function($scope, element, attrs) {

            /***************************************************
            * Prevent form submit on enter key
            ***************************************************/
            element.bind("keydown", function($event) {
                 if($event.keyCode == 13)
                 {
                  $event.preventDefault();
                 }
              });
              
              $scope.callbackTitleStaff = function(){                
                          $rootScope.titleFocus = true; 
              };

              /*
              * Blank field before open form
              */

              $rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.assigned_to = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_title = $rootScope.files  =  '';
              $rootScope.progress = -1;
                           
                

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

                  
                  /**
                  ||  End task Jot Data json 
                  **/

                  $scope.message = ' ';

                  var hotel = localStorageService.get('hotel');
                  var jotDataArray = {
                      jot_title      : $rootScope.jot_title,
                      priority       : $rootScope.priority,
                      hotel_id       : hotel.hotel_id,
                      jot_type       : $rootScope.jot_type,
                      due_date       : new Date($rootScope.due_date).getTime(),
                      department     : $rootScope.department,
                      assigned_to    : $rootScope.assigned_to,
                      checklist      : $rootScope.checklist,  
                      image          : $rootScope.issueImages,
                      task_type      : task,
                      status         : 'open'
                  };

                  var request={
                    url:window.__API_PATH.CREATE_JOT,
                    method:"POST",
                    data:jotDataArray
                  };
                  
                  globalRequest.jotCRUD(request).then(function(response){
                    var result = response.result;
                    if(response.status == 1)
                    {
                      $mdDialog.cancel();
                      var popup = {"message":response.message,"class":"success"};
                      toastService.alert(popup);

                      
                      if($rootScope.jot_type == 'task')
                      {
                        $rootScope.task_iteration.data.push(result);
                      } else if($rootScope.jot_type == 'note') {
                        $rootScope.note_iteration.data.push(result);
                      } else if($rootScope.jot_type == 'issue') {
                        $rootScope.issue_iteration.data.push(result);
                      } else {
                        $rootScope.others_iteration.data.push(result);
                      }         

                      
                      

                      /******************************************************
                      * Jot object iteration
                      ****************************************************/

                      /*var keyFoundInObj = false;

                      angular.forEach($rootScope.jots,function(value,index){*/
                        

                        /******************************************************
                        * Check jot type(message,issue etc.) is new or already in object 
                        ****************************************************/
                               /* if(value._id == $rootScope.jot_type)
                                {                 
                                  value.jot_data.push(jotDataArray);
                                  keyFoundInObj = true;
                                }                   
                            });*/
                      

                            /******************************************************
                      * Push new jot data if  jot type(message,issue etc.) is not in jot object
                      ****************************************************/
                      
                      /*if(!keyFoundInObj)
                      {
                        var jotDataArrayInObj = [jotDataArray];
                              var newcreatedJot = {
                                            "_id"   :$rootScope.jot_type,
                                            "jot_data": jotDataArrayInObj
                                          };
                                                    
                              $rootScope.jots.push(newcreatedJot);
                            
                          }*/

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
