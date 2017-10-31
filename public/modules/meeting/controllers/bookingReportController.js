"use strict";

app.controller('bookingReportController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;

		var that = this;

		    this.isOpen = false;

		    this.openCalendar = function(e) {
		    	console.log('test');
		        e.preventDefault();
		        e.stopPropagation();

		        that.isOpen = true;
		    };


		/************************************
		* Get reports list
		*************************************/			
		
		globalRequest.getBookingReports();


		


		/************************************
		* Cancel booking
		*************************************/

		$scope.cancelBooking = function(id,$index){

			var request={
				url:window.__API_PATH.CANCEL_BOOKING,
				method:"PUT",
				data:{_id:id}
			};

			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getBookingReports();
			});
		};


		/************************************
		* Change payment status
		*************************************/

		$scope.paymentStatus = function(report,status){

			var request={
				url:window.__API_PATH.PAYMENT_STATUS,
				method:"PUT",
				data:{_id:report._id,payment_status:status}
			};

			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getReports();
			});
		};


		/*****************************************
		* Open reports detail
		*****************************************/	

		$scope.openReportDetail = function(detail){
			$mdDialog.show({
				controller: 'detailController',
				templateUrl: '/modules/meeting/views/reports_detail.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{infoDetail:detail}				
			}).then(function(answer) {}, function() {});

		};


		/************************************
		* Show seller information in popup
		*************************************/

		$scope.showSellerInfo = function(report){
				
			var infoDetail = report.seller_detail[0];
			infoDetail.hotel_id = report.hotel_id;
			$mdDialog.show({
					controller: 'detailController',
					templateUrl: '/modules/meeting/views/seller_detail.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{infoDetail:infoDetail}				
				}).then(function(answer) {}, function() {});
		};

		/************************************
		* Show room information in popup
		*************************************/

		$scope.showRoomInfo = function(report){

			var infoDetail = report.room_detail[0];
			infoDetail.hotel_id = report.hotel_id;
			$mdDialog.show({
					controller: 'detailController',
					templateUrl: '/modules/meeting/views/room_detail.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{infoDetail:infoDetail}				
				}).then(function(answer) {}, function() {});
		};
	
		
	}
]);




