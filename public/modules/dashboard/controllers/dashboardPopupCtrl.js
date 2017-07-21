"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardPopupController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','$route',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,$route) {	

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/

		$scope.close = function(){
			 $mdDialog.cancel();
		};

		/*
		* Factory method
		*
		* Add new hotel data
		*
		*/

		$scope.addNewHotel = function(){
			var acceptTerm = $scope.terms;	
			if(acceptTerm)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		user_id     	   : '',
						hotelname          : $scope.hotelname,
						ownername          : $scope.ownername,
						email              : $scope.email,
						phone              : $scope.phone,
						address            : $scope.address,
						city               : $scope.city,
						zipcode            : $scope.zipcode,
						state              : $scope.state,
						country            : $scope.country,
						no_of_guestrooms   : $scope.no_of_guestrooms,
						room_no            : $scope.room_no,
						vending_area       : $scope.vending_area,
						no_of_employee     : $scope.no_of_employee,
						no_of_meetingrooms : $scope.no_of_meetingrooms,
						no_of_floors       : $scope.no_of_floors,
						arrangement_type   : $scope.arrangement_t
				};

				dashboardFactory.post('/api/add_hotel',hotelDataObj).then(function(response){				
					$scope.message = response.data.result.message;
					$scope.validateclass = response.data.result.class;
					if(response.data.result.success)
					{
						$rootScope.hotels.push(hotelDataObj);
						$mdDialog.cancel();
					}				

				});

			} else {
				$scope.message = 'Please accept  terms and conditions.';
			}	
			
		};
		
	}
]);


