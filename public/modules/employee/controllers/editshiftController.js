"use strict";

app.controller('editshiftController', ['$scope','localStorageService','globalRequest','shiftDetail','$mdDialog',
	function($scope,localStorageService,globalRequest,shiftDetail,$mdDialog) {
		var hotel = localStorageService.get('hotel');

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

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(shiftDetail.detail,function (value,key) {

			if(key == 'start_time')
			{

				$scope.start_hour = value[0].hour;
				$scope.start_min = value[0].minute;

			} else if(key == 'end_time'){
	
				$scope.end_hour = value[0].hour;
				$scope.end_min = value[0].minute;

			} else if(key == 'bgcolor'){
	
				$scope.ctlr.bgcolor = value;

			} else {
				$scope[key] = value;
			}
		    
		});


		/************************************
		* Edit employee
		*************************************/		
		

		$scope.updateShift = function(){
	
			var request = {
			            url:window.__API_PATH.UPDATE_HOTELSHIFTS,
			            method:"PUT",
			            data:{
			            	_id      	    :  $scope._id,
			            	shift_name      :  $scope.shift_name,		
		            		department_name :  $scope.department_name,
		            		bgcolor       	:  $scope.ctlr.bgcolor,
		            		start_time      :  { hour:$scope.start_hour,minute:$scope.start_min},		
		            		end_time        :  { hour:$scope.end_hour,minute:$scope.end_min},
	
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	$scope.shiftEditResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getShiftTime();
			 	}
			 	
			});

		};		
		
	}
]);



