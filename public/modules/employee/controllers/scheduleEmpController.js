"use strict";

app.controller('scheduleEmpController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService','scheduledData',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService,scheduledData) {
		
		var date         	= new Date(scheduledData.scheduleDate);
	
		/*****************************************************
		* Initialize time array if time not scheduled
		*****************************************************/

		$scope.shiftTime              = {start_time:{},end_time:{}};
		$scope.shiftTime.start_time   = {hour:"",minute:""};
		$scope.shiftTime.end_time     = {hour:"",minute:""};

		/*
		* Get day list in array
		*/

		$scope.getDay = function(num) {
		    return new Array(num);   
		};


		
		/*****************************************************
		* Populate start and end time on edit time schedule
		*****************************************************/

		if(scheduledData.empDetail.Scheduledata.length > 0)
		{
		
			var matchColumnDate =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();
			angular.forEach(scheduledData.empDetail.Scheduledata,function(value,key){

				if(	value.shift_filter_date == matchColumnDate  &&  value.department == scheduledData.ScheduleDepartment.abbreviation )
				{
					$scope.selectVal                    = value.schedule_data._id;				
					$scope.note                         = value.schedule_data.note;
					$scope.shiftTime.start_time.hour    = value.schedule_data.start_time.hour;
					$scope.shiftTime.start_time.minute  = value.schedule_data.start_time.minute;
					$scope.shiftTime.end_time.hour      = value.schedule_data.end_time.hour;
					$scope.shiftTime.end_time.minute    = value.schedule_data.end_time.minute;
								
				}
			});
		}
		

		/*
		* Populate start and end time on change of shift
		*/

		$scope.onChangeSchedule = function(){

			if($scope.shiftTimeList && $scope.shiftTimeList != "custom" && $scope.shiftTimeList != "onleave")
			{
				var getShift         = JSON.parse($scope.shiftTimeList);
				$scope.shiftTime     = getShift;
				$scope.dateValue     = 'shift';	
			} else {
				$scope.dateValue = $scope.shiftTimeList;
			}	

			if($scope.shiftTimeList == "onleave")
			{						
				$scope.shiftTime.start_time   = {hour:"",minute:""};
			    $scope.shiftTime.end_time   = {hour:"",minute:""};
			}
			
		};



		/************************************
		* Schedule employee data
		*************************************/


		$scope.setSchedule = function(){
			var shiftID;			
			var monthVal 	 = date.getMonth();
			var firstDay     = new Date(date.getFullYear(), monthVal, 1);
			var lastDay      = new Date(date.getFullYear(), monthVal + 1, 0);

			var empData 	 = scheduledData.empDetail;
			var scheduleData = {};				

			if($scope.shiftTime)
			{

				if($scope.dateValue == "custom" || $scope.dateValue == "onleave")
				{			
					shiftID      = $scope.dateValue;				

				} else {
					shiftID      = $scope.shiftTime._id;
				}				
				scheduleData  = {
									_id        : shiftID,
									start_time : $scope.shiftTime.start_time,
									end_time   : $scope.shiftTime.end_time,
									note   	   : $scope.note,
							    };
			} else {
				scheduleData = '';
			}


			if(scheduledData.multipleSchedule.length > 0)
			{

			}

			var filterString =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();		
			var SchedRequest = {
		            url:window.__API_PATH.ADD_MEMBER_SCHEDULE,
		            method:"POST",
		            data:{
		            	hotel_id       		:  $rootScope.activeHotelData._id,		
		            	user_id        		:  empData._id,
		            	department          :  scheduledData.ScheduleDepartment.abbreviation,
		            	shift_date     		:  new Date(date.getFullYear(),date.getMonth(), date.getDate()).getTime(),
		            	shift_filter_date   :  filterString,	            		
		            	schedule_data  		:  scheduleData		           	
		            }
		        };


		    if(scheduledData.multipleSchedule.length > 0)
			{

				
				scheduledData.multipleSchedule = scheduledData.multipleSchedule.filter(function(dataValue){
					Object.assign(dataValue,{schedule_data :  scheduleData});
					return dataValue;
				});

				SchedRequest.url = window.__API_PATH.ADD_MULTIPLE_SCHEDULE;
				SchedRequest.data = {
					multiple_schedule : scheduledData.multipleSchedule,
					
				};
				
			}

			
			var popup;			
		    globalRequest.jotCRUD(SchedRequest).then(function(response){	
			 	if(response.status == 1)
			 	{
			 		/* Get schedule */
			 		$rootScope.$emit("CallgetSchedule", {firstDay:scheduledData.calenderDate.from,lastDay:scheduledData.calenderDate.to});

			 		/* Uncheck mulitischecdule checkbox */
			 		$rootScope.$emit('scheduleField');
			 		$mdDialog.cancel();	
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup); 
			 	} else {
			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			});
			

		};
		
		
	}
]);