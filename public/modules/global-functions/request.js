"use strict";

app.factory('globalRequest',['$http','localStorageService','$rootScope',function($http,localStorageService,$rootScope){
	return{
		
		/*************************************
		* Function for GET, POST, PUT, DELETE request
		**************************************/

		jotCRUD: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
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
				console.log(response.data.result);
				localStorageService.set('hotel', response.data.result);
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

				var request = {
			            url:window.__API_PATH.JOT_COUNT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotCount = response.data.result;			

			}, function(response){
				$rootScope.JotCount = response.data.errors;				
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
			            	user_name  		:  userDetail.user_name
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotListData = response.data.result;			

			}, function(response){
				$rootScope.JotListData = response.data.errors;				
			});
		},
		
	};

}]);