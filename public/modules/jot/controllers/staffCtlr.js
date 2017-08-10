"use strict";

app.controller('staffCtlr', ['$scope','$rootScope','localStorageService','jotFactory',
	function($scope,$rootScope,localStorageService,jotFactory) {
		
		/*****************************************
		* Get Staff List
		******************************************/

		var hotel = localStorageService.get('hotel');
		var request= {
					url:window.__API_PATH.STAFF_SUGGESTION,
					method:"GET",
					params:{hotel_id: hotel.hotel_id}
				};
		jotFactory.jotCRUD(request)
		.then(function(response){
			//$scope.staffList = response.result;	
			$rootScope.staffList = response.result;			
		});

	     
	     /*after click on suggestion list*/                                                            
	    $scope.callbackStaff = function(){

	            $scope.staffFocus = true;
        
	    };

	}

]);
