"use strict";

app.controller('departmentCtlr', ['$scope','$rootScope','localStorageService','jotFactory',
	function($scope,$rootScope,localStorageService,jotFactory) {
		

		/*****************************************
		* Get department List
		******************************************/

		var hotel = localStorageService.get('hotel');
		var request= {
			url:window.__API_PATH.GET_DEPARTMENTS,
			method:"GET",
			params:{hotel_id: hotel.hotel_id}
		};
		jotFactory.jotCRUD(request)
		.then(function(response){
			$scope.departmentSuggetionList = response.result;	
			
		});

	     
	     /*after click on suggestion list*/                                                            
	    $scope.callback = function(){	       
	        $scope.deparmentfocus = true;
	         
	    };

	}
]);