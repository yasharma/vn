"use strict";

app.controller('schedulerController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','$interval','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,$interval,toastService) {

		var hotel 			 = localStorageService.get('hotel');
		var date 	   	     = new Date();
		$scope.currentDate   = new Date(); 
		$scope.datesData 	 = {dates : "", monthStartDate : ""};
		$scope.position_list = window.__API_PATH.POSITION;

		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Get color codes
		*/

		$scope.colorCodes = window.__API_PATH.COLOR_CODE;


		/************************************
		* Get shift timing
		*************************************/		
		globalRequest.getShiftTime();
		

		/************************************
		* Get employee schedule data
		*************************************/	

		$scope.getSchedule = function(fromDate,toDate){

			var from = new Date(new Date(fromDate).getFullYear(),new Date(fromDate).getMonth(),new Date(fromDate).getDate()).getTime();
			var to = new Date(new Date(toDate).getFullYear(),new Date(toDate).getMonth(),new Date(toDate).getDate()).getTime();

			$scope.hideLoader = false;
			var GetRequest =  {
					url:window.__API_PATH.MEMBER_SCHEDULE_DATA,
					method:"GET",
					params:{
						hotel_id    :  hotel._id,
						from_date   :  from,
						to_date     :  to	
					}
				};

			globalRequest.jotCRUD(GetRequest).then(function(response){				
			 	$scope.membersList = response.result;
			 	$scope.hideLoader = true;
			 });
		};


		/**************************************************
		* Make function broadcast to load from anywhere
		***************************************************/

		$rootScope.$on("CallgetSchedule", function(evt,data){
           $scope.getSchedule(data.firstDay,data.lastDay);
        });


		/************************************
		* Blank all field before open form
		*************************************/
		$scope.blank = function(){
			$scope.shift_name = "";		
			$scope.shift_time = "";		
			$scope.ctlr.bgcolor = "";		
			$scope.department_name = "";		
		};

		/**************************************************************************
		* Get last date of week by passing the week number and month start date obj
		***************************************************************************/

		Date.prototype.getWeek = function(monthStart) {
			var onejan = new Date(monthStart);
			return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
		};

		function getDateRangeOfWeek(monthStart,weekNo){
			var numOfdaysPastSinceLastMonday;
		    var d1 = new Date();
		    numOfdaysPastSinceLastMonday = parseInt(d1.getDay()- 1);
		    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
		    var weekNoToday = d1.getWeek(monthStart);
		    var weeksInTheFuture = parseInt( weekNo) - parseInt(weekNoToday );
		    d1.setDate(d1.getDate() + parseInt( 7 * weeksInTheFuture ));
		    
		    d1.setDate(d1.getDate() + 6);		    
		    return d1;
		}


		/**************************************************************************
		*
		* Function 
		*
		* To return array of all date by passing startDate and endDate of month
		*
		***************************************************************************/

		var AllDates  = function(startDate, endDate) {

							var dates = [],
							  currentDate = startDate,
							  addDays = function(days) {
							    var date = new Date(this.valueOf());
							    date.setDate(date.getDate() + days);
							    return date;
							  };
							  var i=0;						  

							while (currentDate <= endDate) {
							dates.push(currentDate);
							currentDate = addDays.call(currentDate, 1);
							i++;
							}

							return dates;
						};

		/*********************************************************************
		*
		* Set all data view and employee data on load if dataVAl found empty
		* Call on next and prev button click
		*
		*********************************************************************/

		$scope.UpdateCalenderViewDates 	=	function(calenderCurrentData,nav,countDate){
			
			var monthVal,firstDay,lastDay,year;

			if(calenderCurrentData)
			{	
				date 	= new Date(calenderCurrentData);							
			}	

			if(nav == 'next')
			{
				monthVal = date.getMonth()+1;
			} else if(nav == 'prev') {
				monthVal = date.getMonth()-1;
			} else {
				monthVal = date.getMonth();
			}
			
			firstDay   = new Date(date.getFullYear(), monthVal, 1);
			lastDay    = new Date(date.getFullYear(), monthVal + 1, 0);


			if(countDate == 'today')
			{
				if(!nav)
				{
					firstDay   = new Date();
					lastDay    = new Date();					
				} else {
					$scope.activeRangeMenu = '';
				}

			} else if(countDate){
				var WeeksMonth = firstDay.getMonth()+1;
				var WeeksYear  = firstDay.getFullYear();					
				var lastDateOfWeek = getDateRangeOfWeek(firstDay,countDate);
				lastDay = lastDateOfWeek;					
			}
	

			$scope.datesData.dates        		= AllDates(firstDay,lastDay);
			$scope.datesData.monthStartDate     = firstDay;

			/*
			* Blank calender before load new data 
			* Reinitialize calender data
			*/
			$scope.membersList 	= '';			
			$scope.getSchedule(firstDay,lastDay);
		};

		/**************************************************
		* Set Scheduler on page load
		**************************************************/
		$scope.activeRangeMenu = 2;
		$scope.UpdateCalenderViewDates('','',2);


		/**************************************************
		* Set end date of calender and filter accordingly
		**************************************************/

		$scope.setVeiwRange = function(setDateValue,countDate){

			$scope.activeRangeMenu = countDate;
			$scope.UpdateCalenderViewDates(setDateValue,'',countDate);
			
		};


		/**************************************************
		* Set calender view by date range
		**************************************************/

		$scope.setVeiwRangeByDate = function(){
			$scope.activeRangeMenu = '';
			var scheduleFrom       = $scope.scheduleFrom;
			var scheduleTo  	   = $scope.scheduleTo;

			if(scheduleFrom && scheduleTo)
			{
				$scope.datesData.dates   = AllDates(scheduleFrom,scheduleTo);
				$scope.getSchedule(scheduleFrom,scheduleTo);
			}
			
		};

		/************************************
		* Show user information in popup
		*************************************/

		$scope.showUserInfo = function(memberDetail){
			$mdDialog.show({
					controller: 'showDetailController',
					templateUrl: '/modules/employee/views/display_userinfo.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{empDetail:{detail:memberDetail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});
		};

		

		/************************************
		* Add shift timing
		*************************************/

		 $scope.addshift = function(){
		 	var shiftTimeRequest = {
		            url:window.__API_PATH.ADD_HOTELSHIFT,
		            method:"POST",
		            data:{
		            	hotel_id        :  hotel._id,		
		            	shift_name      :  $scope.shift_name,
		            	department_name :  $scope.department_name,
		            	bgcolor       	:  $scope.ctlr.bgcolor,
		            	start_time      :  { hour:$scope.start_hour,minute:$scope.start_min},		
		            	end_time        :  { hour:$scope.end_hour,minute:$scope.end_min},			
		            }
		          };
			globalRequest.jotCRUD(shiftTimeRequest).then(function(response){		
			 	$scope.shiftListResult = response;
				$scope.blank();
			 	if(response.status == 1)
			 	{
			 		if(!$scope.shiftList)
			 		{
			 			$scope.shiftList = [];
			 		}
			 		$scope.shiftList.push(response.result);	

			 		/************************************
					* Get shift timing
					*************************************/		
					globalRequest.getShiftTime();
			 	}
			 });
		 };	

		 /*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEditshift = function(detail){
				$mdDialog.show({
					controller: 'editshiftController',
					controllerAs: 'ctlr',
					templateUrl: '/modules/employee/views/edit_employee_shift.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{shiftDetail:{detail:detail}}				
				}).then(function(answer) {}, function() {});

		}; 


		/*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEmpSchedule = function(scheduleDate,empDetail){
				$mdDialog.show({
					controller: 'scheduleEmpController',
					templateUrl: '/modules/employee/views/schedule_employee.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{scheduledData:{scheduleDate:scheduleDate,empDetail:empDetail}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete shift
		*****************************************/	

		$scope.removeshift = function(detail){

			var request={
				url:window.__API_PATH.DELETE_HOTELSHIFTS,
				method:"DELETE",
				params:{_id:detail._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};


		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();
		

		/*****************************************
		* Loader icon
		*****************************************/

		var self = this;
	      self.activated = true;
	      self.determinateValue = 30;
	      $interval(function() {

	        self.determinateValue += 1;
	        if (self.determinateValue > 100) {
	          self.determinateValue = 30;
	        }

	      }, 10);
		
	}
]);