"use strict";

app.directive('jotFormSubmitDirectives', function($timeout, $parse,$rootScope, $mdDialog,toastService,globalRequest,localStorageService,$routeParams) {
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
                

              /*
              * Blank field before open form
              */

              $rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.jot_members = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_description = $rootScope.files = $rootScope.jot_title  =  '';
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

                  
                  /*******************************
                  ||  End task Jot Data json 
                  *******************************/

                  $scope.message = ' ';
                  var hotel = localStorageService.get('hotel');
                  
                  var jotDataArray = {
                      jot_title           : $rootScope.jot_title,
                      jot_description     : $rootScope.jot_description,
                      jot_members         : $rootScope.jot_members,
                      priority            : $rootScope.priority,
                      hotel_id            : hotel._id,
                      jot_type            : $rootScope.jot_type,
                      hotel_room          : $rootScope.hotel_room,
                      due_date            : new Date($rootScope.due_date).getTime(),
                      department          : $rootScope.department,                      
                      checklist           : $rootScope.checklist,  
                      image               : $rootScope.issueImages,
                      task_type           : task,
                      status              : 'open'
                  };

                 /* console.log(jotDataArray);
                  return false;*/

                  var request={
                    url:window.__API_PATH.CREATE_JOT,
                    method:"POST",
                    data:jotDataArray
                  };
                  
                  globalRequest.jotCRUD(request).then(function(response){
                   
                    if(response.status == 1)
                    {
                      var JotType = $routeParams.type;
                      globalRequest.getJotList(JotType);
                      $mdDialog.cancel();
                      var popup = {"message":response.message,"class":"success"};
                      toastService.alert(popup);
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
