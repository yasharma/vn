"use strict";

app.controller('scheduleEmpController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','toastService','scheduledData',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,toastService,scheduledData) {
		var hotel 			= localStorageService.get('hotel');		
		var date         	= new Date(scheduledData.scheduleDate);

		/*
		* Get day list in array
		*/

		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		
		/*****************************************************
		* Populate start and end time on edit time schedule
		*****************************************************/
		
		var matchColumnDate =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();
		angular.forEach(scheduledData.empDetail.Scheduledata,function(value,key){
			if(value.shift_filter_date == matchColumnDate)
			{
				$scope.selectVal  = value.schedule_data._id;	
				$scope.start_hour = value.schedule_data.start_time.hour;
				$scope.start_min  = value.schedule_data.start_time.minute;
				$scope.end_hour   = value.schedule_data.end_time.hour;
				$scope.end_min    = value.schedule_data.end_time.minute;			
			}
		});
		

		/*
		* Populate start and end time on change of shift
		*/

		$scope.onChangeSchedule = function(){

			if($scope.shiftTimeList && $scope.shiftTimeList != "custom" && $scope.shiftTimeList != "off")
			{
				var getShift      = JSON.parse($scope.shiftTimeList);
				$scope.start_hour = getShift.start_time[0].hour;
				$scope.start_min  = getShift.start_time[0].minute;
				$scope.end_hour   = getShift.end_time[0].hour;
				$scope.end_min    = getShift.end_time[0].minute;
			}
			
			if($scope.shiftTimeList == "off")
			{
				$scope.start_hour = $scope.start_min = $scope.end_hour= $scope.end_min= '';	
			}
			
		};



		/************************************
		* Add employee schedule data
		*************************************/


		$scope.setSchedule = function(){
			var isSetShift,shiftID;			
			var monthVal 	 = date.getMonth();
			var firstDay     = new Date(date.getFullYear(), monthVal, 1);
			var lastDay      = new Date(date.getFullYear(), monthVal + 1, 0);

			var empData 	 = scheduledData.empDetail;
			var scheduleData = {};
			
			var start_hour = $scope.start_hour;
			var start_min  = $scope.start_min;
			var end_hour   = $scope.end_hour;
			var end_min    = $scope.end_min;

			if($scope.shiftTimeList)
			{
				if($scope.shiftTimeList != "custom" && $scope.shiftTimeList != "off")
				{
					isSetShift   = JSON.parse($scope.shiftTimeList);
					shiftID      = isSetShift._id;
				} else {
					shiftID   = $scope.shiftTimeList;
				}
				
				scheduleData  = {
									_id :shiftID,
									start_time:{hour:start_hour,minute:start_min},
									end_time:{hour:end_hour,minute:end_min},
							    };
			} else {
				scheduleData = '';
			}
			

			var filterString =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();		
		
			var SchedRequest = {
		            url:window.__API_PATH.ADD_MEMBER_SCHEDULE,
		            method:"POST",
		            data:{
		            	hotel_id       		:  hotel._id,		
		            	user_id        		:  empData._id,
		            	shift_date     		:  date.getTime(),
		            	shift_filter_date   :  filterString,	            		
		            	schedule_data  		:  scheduleData,		
		            }
		        };
		   
		    globalRequest.jotCRUD(SchedRequest).then(function(response){	
			 	if(response.status == 1)
			 	{
			 		$rootScope.$emit("CallgetSchedule", {firstDay:firstDay,lastDay:lastDay});
			 		$mdDialog.cancel();	

			 		var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup); 
			 	}
			});

		};
		
		
	}
]);