"use strict";

app.controller('editshiftController', ['$scope','globalRequest','shiftDetail','$mdDialog','toastService',
	function($scope,globalRequest,shiftDetail,$mdDialog,toastService) {
		

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

			if(key == 'bgcolor'){	
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
		            		start_time      :  $scope.start_time,		
		            		end_time        :  $scope.end_time,
	
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getShiftTime();
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



