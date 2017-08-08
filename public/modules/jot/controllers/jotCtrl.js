"use strict";

app.controller('jotController', ['$scope','$location','jotFactory','$rootScope','$mdDialog','localStorageService',
	function($scope,$location,jotFactory,$rootScope,$mdDialog,localStorageService) {


		/**************************************
		* Redirect if hotel not selected
		**************************************/
		
		var hotel = localStorageService.get('hotel');

		if(!hotel || hotel == ""){
			$location.path('/dashboard');
		}

		/**************************************
		* Get jot list
		**************************************/
		$rootScope.task_iteration = [];
		$rootScope.task_iteration.data = [];
		$rootScope.task_iteration.type = [];
		$rootScope.note_iteration = [];
		$rootScope.note_iteration.data = [];
		$rootScope.note_iteration.type = [];
		$rootScope.issue_iteration = [];
		$rootScope.issue_iteration.data = [];
		$rootScope.issue_iteration.type = [];
		$rootScope.others_iteration = [];
		$rootScope.others_iteration.data = [];
		$rootScope.others_iteration.type = [];	


		var request= {
			url:window.__API_PATH.GET_JOT,
			method:"GET",
			params:{hotel_id :hotel.hotel_id}
		};	

		jotFactory.jotCRUD(request)
		.then(function(response){
			//$rootScope.jots = response.result;

			angular.forEach(response.result,function(value,index){
				
				if(value._id == 'task')
				{
					$rootScope.task_iteration.data  = value.jot_data;
					$rootScope.task_iteration.type  = value._id;
				} else if(value._id == 'note') {
					$rootScope.note_iteration.data = value.jot_data;
					$rootScope.note_iteration.type  = value._id;
				} else if(value._id == 'issue') {
					$rootScope.issue_iteration.data  = value.jot_data;
					$rootScope.issue_iteration.type  = value._id;
				} else {
					$rootScope.others_iteration.data  = value.jot_data;
					$rootScope.others_iteration.type  = value._id;
				}  
		
			});
		});


		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotEditPopup = function(jotData,jotType){
		
			var data={jot_data:jotData,jot_type:jotType};
			$mdDialog.show({
				controller: 'editJotCtlr',
				templateUrl: '/modules/jot/views/edit_jot.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:data}
			})
			.then(function(answer) {
			
			}, function() {
			
			});

		};

				
	}
]);

