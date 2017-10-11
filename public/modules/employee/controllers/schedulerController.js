"use strict";

app.controller('schedulerController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','$interval','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,$interval,toastService) {

		
		var date 	   	     = new Date();
		$scope.currentDate   = new Date(); 
		$scope.datesData 	 = {dates : "", monthStartDate : ""};
		$scope.position_list = window.__API_PATH.POSITION;
		$scope.dateLabel  = {from:"",to:""};



		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		

		/*******************************************************
		* Callback function to close color swatch on outside click
		*******************************************************/

		$scope.swatchToggle = function(){			
				$scope.colorSwatch = false;
											
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
		* Get position list
		*************************************/			
		
		globalRequest.getPositionList();
		

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
						hotel_id    :  $rootScope.activeHotelData._id,
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


		/**************************************************
		* Get first and last date from current week 
		* By passing how many week date want
		**************************************************/


		Date.prototype.getDateAccordingToCurrentWeek = function(start,weekCount)
		{
		    start = start || 0;
		    var today = new Date(this.setHours(0, 0, 0, 0));
		    var day = today.getDay() - start;
		    var date = today.getDate() - day;
		    var StartDate = new Date(today.setDate(date+1));
   			var EndDate = new Date(today.setDate(date + 7 * weekCount));
		    return [StartDate, EndDate];
		};


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

		$scope.UpdateCalenderViewDates 	=	function(calenderCurrentData,nav){
			$scope.activeRangeMenu     = 'fullmonth';
			$scope.scheduleRange       = false;
			
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

		function setSchedulerOnLoad()
		{
			$scope.activeRangeMenu = 1;
			var dateArray    				    = new Date().getDateAccordingToCurrentWeek('',1);
			$scope.datesData.dates        		= AllDates(dateArray[0],dateArray[1]);
			$scope.datesData.monthStartDate     = new Date(date.getFullYear(), date.getMonth(), 1);

			if(dateArray[0].getMonth() != dateArray[1].getMonth())
			{
				$scope.dateLabel 		 = {from:dateArray[0], to:dateArray[1]};
				$scope.scheduleRange     = true;
			} 


			$scope.getSchedule(dateArray[0],dateArray[1]);
		}
		setSchedulerOnLoad();

		/**************************************************
		* Set end date of calender and filter accordingly
		**************************************************/

		$scope.setVeiwRange = function(countDate){

			var firstViewDay,lastViewDay,firstDay,lastDay;
			date = new Date();

			$scope.activeRangeMenu    =  countDate;

			if(countDate == 'today')
			{
				firstViewDay = lastViewDay   = new Date(date.getFullYear(),date.getMonth(), date.getDate());
				firstDay = lastDay   = new Date(date.getFullYear(),date.getMonth(), date.getDate());

			} else if(countDate == 'fullmonth') {
				firstViewDay = firstDay   = new Date(date.getFullYear(), date.getMonth(), 1);
				lastViewDay = lastDay    = new Date(date.getFullYear(), date.getMonth() + 1, 0);
			} else {
				var dateArray   = date.getDateAccordingToCurrentWeek('',countDate);
				firstViewDay = firstDay    	= dateArray[0];
				lastViewDay = lastDay 		= dateArray[1];
			}			
			
			$scope.scheduleRange     = false;
			if(firstViewDay.getMonth() != lastViewDay.getMonth())
			{
				$scope.dateLabel 		 = {from:firstViewDay, to:lastViewDay};
				$scope.scheduleRange     = true;
			} 

			$scope.datesData.dates    = AllDates(firstViewDay,lastViewDay);
			$scope.getSchedule(firstDay,lastDay);


		};


		/**************************************************
		* Set calender view by date range
		**************************************************/

		$scope.setVeiwRangeByDate = function(selectElement){

			if(selectElement == '')
			{
				$scope.scheduleRange     = false;
				setSchedulerOnLoad();

			} else {

				$scope.activeRangeMenu = '';
				var scheduleFrom       = $scope.scheduleFrom;
				var scheduleTo  	   = $scope.scheduleTo;

				$scope.startRange = {min:"", max:""};
				$scope.endRange = {min:"", max:""};

				if(selectElement == 'start')
				{
					var rangeDate = new Date(scheduleFrom);
					$scope.scheduleTo = '';
					$scope.endRange.min = new Date(rangeDate.setDate(rangeDate.getDate()+1));
					$scope.endRange.max = new Date(rangeDate.setDate(rangeDate.getDate()+30));					
				}			

				if(scheduleFrom && scheduleTo)
				{
					$scope.dateLabel 		 = {from:scheduleFrom, to:scheduleTo};
					$scope.scheduleRange     = true;
					$scope.datesData.dates   = AllDates(scheduleFrom,scheduleTo);
					$scope.getSchedule(scheduleFrom,scheduleTo);
				}

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
		* Blank all field before open form
		*************************************/
		


		function blankOnSucess(){
			$scope.shift_name = "";		
			$scope.shift_time = "";		
			$scope.ctlr.bgcolor = "";		
			$scope.department_name = "";			
		}

		$scope.blank = function(){
			blankOnSucess();		
			$scope.shiftListResult = "";		
		};
		

		/************************************
		* Add shift timing
		*************************************/

		$scope.addshift = function(){
		 	var shiftTimeRequest = {
		            url:window.__API_PATH.ADD_HOTELSHIFT,
		            method:"POST",
		            data:{
		            	hotel_id        :  $rootScope.activeHotelData._id,		
		            	shift_name      :  $scope.shift_name,
		            	department_name :  $scope.department_name,
		            	bgcolor       	:  $scope.ctlr.bgcolor,
		            	start_time      :  $scope.start_time,		
		            	end_time        :  $scope.end_time,			
		            }
		          };
			globalRequest.jotCRUD(shiftTimeRequest).then(function(response){		
				var popup;
			 	if(response.status == 1)
			 	{
			 		blankOnSucess();
			 		if(!$scope.shiftList)
			 		{
			 			$scope.shiftList = [];
			 		}
			 		$scope.shiftList.push(response.result);		
					globalRequest.getShiftTime();
					popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {
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



		/*********************************************************************
		* Keep selected field value in scope
		*********************************************************************/

		var selectedField  = [];
		
		
		$scope.storeFieldValue = function(d,member,dept,fieldValue){
			
			if(fieldValue)
			{
				var filterString = d.getDate()+''+(parseInt(d.getMonth())+1) +''+d.getFullYear();	
				selectedField.push({
					department 			:  dept.abbreviation,
					shift_date     		:  new Date(d.getFullYear(),d.getMonth(), d.getDate()).getTime(),
			        shift_filter_date   :  filterString,
			        user_id        		:  member._id,
			        hotel_id       		:  $rootScope.activeHotelData._id
				});
			} else {
				selectedField = selectedField.filter(function(values){
						return values.shift_date != new Date(d.getFullYear(),d.getMonth(), d.getDate()).getTime();
				});

			}
		};

		/*********************************************************************
		* Unselect all select field after scheduled
		*********************************************************************/

		$rootScope.$on('scheduleField', function (event, args) {
			selectedField  = [];
			angular.element(document.querySelectorAll(".md-checked")).removeClass("md-checked");
		
		});

		



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

		/*var isAllCheck = false;	
		function togglecheckboxes(cn){			
		    var cbarray = document.getElementsByName(cn);
		    for(var i = 0; i < cbarray.length; i++){
			        cbarray[i].setAttribute("aria-checked", false);
			}   
		}
*/

		/*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEmpSchedule = function(scheduleDate,empDetail,dept){
			//togglecheckboxes('multipleSchedule');

				$mdDialog.show({
					controller: 'scheduleEmpController',
					templateUrl: '/modules/employee/views/schedule_employee.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{scheduledData:{scheduleDate:scheduleDate,empDetail:empDetail,ScheduleDepartment:dept,multipleSchedule:selectedField}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete shift
		*****************************************/	

		$scope.removeshift = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_HOTELSHIFTS,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				
				$scope.shiftList.splice(index, 1);
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