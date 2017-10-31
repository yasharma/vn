"use strict";

app.factory('globalRequest',['$http','localStorageService','$rootScope','Upload','$timeout',function($http,localStorageService,$rootScope,Upload,$timeout){
	return{
		
		/**************************************************
		* Function for GET, POST, PUT, DELETE request
		**************************************************/

		jotCRUD: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},


		uploadFiles: function(hotelID,directoryName,files){
		
			var fileArgs;

			if(hotelID)
			{
				fileArgs = {	                    
								hotel_id     : hotelID,
								folder_name  : directoryName,	                    
								file         : files
							};
			} else {
				fileArgs = {	
								folder_name  : directoryName,	                    
								file         : files
							};
			}		


			if (files) {				
	          return  Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: fileArgs
	            }).then(function (response) {
	                return $timeout(function () {           
	                   return response.data;	                   
	                });
	            });
	        }
		},


		getHotelStatus:function(hotelID){
			$rootScope.hotelStatus = '';
			var hotelstatusrequest = {
					url:window.__API_PATH.GET_HOTEL_STATUS,
					method:"GET",
					params: { 
								"hotel_id":hotelID						
							}
				};

			
			return $http(hotelstatusrequest).then(function(response){	
				return response.data.result;

			}, function(response){
				$rootScope.hotelStatus = response.data.errors;				
			});
		},

		getHotels:function(){
			$rootScope.hotels = '';
			var userData   	  = localStorageService.get('user');
			var paramsData 	  = { 
						"user_id":userData._id						
				};
			var hotellistrequest={
				url:window.__API_PATH.GET_HOTELS,
				method:"GET",
				params:paramsData
			};
		
			return $http(hotellistrequest).then(function(response){	
				$rootScope.hotels = response.data.result;
			}, function(response){
				$rootScope.hotels = response.data.errors;				
			});
		},


		getHotelDetail:function(hotelID){						
			var paramsData 	  = { 
						"hotel_id":hotelID						
				};
			var hotellistrequest={
				url:window.__API_PATH.GET_HOTEL_DETAIL,
				method:"GET",
				params:paramsData
			};

			return $http(hotellistrequest).then(function(response){	
				return response.data;				
			});
		},

		getStaff:function(){
			var hotel   = localStorageService.get('hotel');
			var request = {
						url:window.__API_PATH.STAFF_SUGGESTION,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.staffList = response.data.result;
			}, function(response){
				$rootScope.staffList = response.data.errors;				
			});
		},


		getPositionList:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_POSITION,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.potisionList = response.data.result;			

			}, function(response){
				$rootScope.potisionList = response.data.errors;				
			});
		},


		getDepartments:function(){
			var hotel   = localStorageService.get('hotel');
			var request = {
						url:window.__API_PATH.GET_DEPARTMENTS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.departmentList = response.data.result;
			}, function(response){
				$rootScope.departmentList = response.data.errors;				
			});
		},

		getShiftTime:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_HOTELSHIFTS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.shiftList = response.data.result;
			}, function(response){
				$rootScope.shiftList = response.data.errors;				
			});
		},

		getVendingItems:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_ITEMS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.inverntoryList = response.data.result;
			}, function(response){
				$rootScope.inverntoryList = response.data.errors;				
			});
		},

		getReports:function(){
			$rootScope.reportsList = '';
			var reportsRequest = {
					url:window.__API_PATH.GET_REPORTS,
					method:"GET",
					params: { 
								"hotel_id" : $rootScope.activeHotelData._id,
								"user_id"  : $rootScope.currentUser._id,						
							}
				};			
			return $http(reportsRequest).then(function(response){	
				$rootScope.reportsList =  response.data.result;

			}, function(response){
				$rootScope.reportsList = response.data.errors;				
			});
		},

		getBookingReports:function(){
			$rootScope.bookingReportsList = '';
			var bookReportsRequest = {
					url:window.__API_PATH.GET_BOOK_REPORTS,
					method:"GET",
					params: { 
								"hotel_id" : $rootScope.activeHotelData._id,					
							}
				};			
			return $http(bookReportsRequest).then(function(response){	
				$rootScope.bookingReportsList =  response.data.result;

			}, function(response){
				$rootScope.bookingReportsList = response.data.errors;				
			});
		},

		getVendingCategory:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_INVENTORY_CATEGORY,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.invtList = response.data.result;
			}, function(response){
				$rootScope.invtList = response.data.errors;				
			});
		},

		getFoundList:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_LOST_FOUND,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.LstFndList = response.data.result;
			}, function(response){
				$rootScope.LstFndList = response.data.errors;				
			});
		},

		getContactList:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_CONTACTS,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.ContactList = response.data.result;
			}, function(response){
				$rootScope.ContactList = response.data.errors;				
			});
		},


		getDocument:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_DOCUMENT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.documentList = response.data.result;
			}, function(response){
				$rootScope.documentList = response.data.errors;				
			});
		},



		getJotCount:function(){
				var hotel   = localStorageService.get('hotel');
				var user   = localStorageService.get('user');

				var request = {
			            url:window.__API_PATH.JOT_COUNT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	contact_number  :  user.contact_number
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotCount = response.data.result;			

			}, function(response){
				$rootScope.JotCount = response.data.errors;				
			});
		},


		getRoomList:function(range){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_MEETINGROOMS,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	range           :  range
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.meetingRoomList = response.data.result;			

			}, function(response){
				$rootScope.meetingRoomList = response.data.errors;				
			});
		},

		getJotList:function(JotType){
				var hotel   	 = localStorageService.get('hotel');
				var userDetail   = localStorageService.get('user');
				
				var request = {
			            url:window.__API_PATH.GET_JOT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	jot_type      	:  JotType,			            	
			            	contact_number  :  userDetail.contact_number
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotListData = response.data.result;			

			}, function(response){
				$rootScope.JotListData = response.data.errors;				
			});
		},


		getAlertList:function(){
			var userDetail   = localStorageService.get('user');
			var getAlertRequest = {
			            url:window.__API_PATH.GET_ALERTS,
			            method:"GET"			            			            
			          };
			return $http(getAlertRequest).then(function(response){				
				$rootScope.alertList = response.data.result;


			}, function(response){
				$rootScope.alertList = response.data.errors;				
			});
		},
		getNotification:function(){
			var userDetail   = localStorageService.get('user');
			var hotel   = localStorageService.get('hotel');
			var getAlertRequest = {
			            url:window.__API_PATH.GET_NOTIFICATION,
			            method:"GET",
			            params:{
			            	user_id      	:  userDetail._id,
			            	user_name      	:  userDetail.user_name,
			            	contact_number  :  userDetail.contact_number,
			            	hotels          :  userDetail.hotel_id,
			            	
			            }			            
			          };
			return $http(getAlertRequest).then(function(response){				
				$rootScope.message	 = response.data.result;				


			}, function(response){
				$rootScope.alertList = response.data.errors;				
			});
		},

		
	};

}]);