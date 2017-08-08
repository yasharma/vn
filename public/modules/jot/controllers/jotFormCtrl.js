"use strict";

app.controller('jotFormCtrl', ['$scope','localStorageService','jotFactory','$rootScope','$mdDialog','toastService','ActivateTab',
	function($scope,localStorageService,jotFactory,$rootScope,$mdDialog,toastService,ActivateTab) {	

		/*
		* Blank field before open form
		*/

		$rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.assigned_to = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = '';

		/*
		* Activate tab
		*/
		$scope.currentNavItem       = ActivateTab;
		

		/******************************************************************
		||	Create jot 
		******************************************************************/

		$scope.createJot = function(){
			/*console.log($rootScope.due_date);
			return false;
			*/

			/**
			||	Start task Jot Data json 
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

				 task = {
					type       : 'recurring',
					start_date : new Date($rootScope.start_recurring_date).getTime(),
					end_date   : new Date($rootScope.end_recurring_date).getTime(),
					pattern: {
								type : $rootScope.selectedPattern,
								days : $rootScope.selectedDays,
								day  : $rootScope.monthly_recurring_date			
							 }
				};
			}

			/**
			||	End task Jot Data json 
			**/

			$scope.message = ' ';

			var hotel = localStorageService.get('hotel');
			var jotDataArray = {
					jot_title          : $scope.jot_title,
					priority           : $rootScope.priority,
					hotel_id		   : hotel.hotel_id,
					jot_type           : $rootScope.jot_type,
					due_date   		   : new Date($rootScope.due_date).getTime(),
					department		   : $rootScope.department,
					assigned_to 	   : $rootScope.assigned_to,
					checklist		   : $rootScope.checklist,	
					image		   	   : $rootScope.issueImages,
					task_type          : task,
					status			   : 'open'
			};

			var request={
				url:window.__API_PATH.CREATE_JOT,
				method:"POST",
				data:jotDataArray
			};
			
			jotFactory.jotCRUD(request).then(function(response){
				var result = response.result;
				if(response.status == 1)
				{
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

					$mdDialog.cancel();
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
					

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
				                				"_id"	  :$rootScope.jot_type,
				                				"jot_data": jotDataArrayInObj
						                	};
			            		                	
			            $rootScope.jots.push(newcreatedJot);
		            
			        }*/

				}
			});

		};

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/

		$scope.close = function(){
			 $mdDialog.cancel();
		};

		

	

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		$scope.jot_priority 	= $scope.jotPriorityList[0].name;

		$scope.selectPriority = function(event,value){
			 $scope.jot_priority = value;
		};

	}
]).directive('jotTemplate', [function(){
	return {
		scope:{jotTemplate:'='},
		template:'<span ng-include="template"></span>',
		link: function(scope,ele){			
			scope.$watch('jotTemplate', function(templateName){
				scope.template='/modules/jot/views/'+templateName+'.html';
			});

		}
	};
}]);
