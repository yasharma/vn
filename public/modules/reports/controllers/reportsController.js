"use strict";

app.controller('reportsController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {

		/*******************************************
		* Redirect user if vending machine is disabled
		********************************************/
		$rootScope.redirectSettingsPage('vending_machine');
		
		
		$scope.position_list = window.__API_PATH.POSITION;

		/************************************
		* Get reports list
		*************************************/			
		
		globalRequest.getReports();


		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;




		/************************************
		* Change order status
		*************************************/

		$scope.cancelOrder = function(id,$index){

			var request={
				url:window.__API_PATH.CANCEL_ORDER,
				method:"PUT",
				data:{_id:id}
			};

			globalRequest.jotCRUD(request).then(function(response){
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getReports();
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
				controller: 'reportDetailController',
				templateUrl: '/modules/reports/views/reports_detail.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{reportDetail:detail}				
			}).then(function(answer) {}, function() {});

		};
	
		
	}
]);




