"use strict";

app.controller('step1Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService) {	

		$scope.currencyList = window.__API_PATH.CURRENCY_LIST;
		var hotelData   = localStorageService.get('processingHotel');

		$scope.countryList = window.__API_PATH.COUNTRY_LIST;
		$scope.stateList = window.__API_PATH.US_STATE;


		/************************************************
		* Append value if hotel already exists
		*************************************************/

		if(hotelData)
		{

			globalRequest.getHotelStatus(hotelData._id).then(function(response){
					angular.forEach(response[0],function (value,key) {					
							$scope[key] = value;					    
					});
			});
		}

		/************************************************
		* Step1 submit to create the hotel
		*************************************************/

		$scope.step1FormSubmit = function(){
			var acceptTerm = $scope.terms;	
			$scope.hotelResult = {class:"",message:"",status:""};
			if(acceptTerm)
			{
			

				 var hotelDataObj = {
				 		user_id     	   : localStorageService.get('user')._id,
						hotelname          : $scope.hotelname,
						ownername          : $scope.ownername,
						currency           : $scope.currency,
						email              : $scope.email,
						phone              : $scope.phone,
						address            : $scope.address,
						city               : $scope.city,
						zipcode            : $scope.zipcode,
						state              : $scope.state,
						country            : $scope.country,
						hotel_id		   : null
						
				};



				var request={
						url:window.__API_PATH.ADD_HOTEL,
						method:"POST",
						data:hotelDataObj
					};

				if(hotelData)
				{
					request.url 		  = window.__API_PATH.UPDATE_HOTEL;
					request.method 		  = "PUT";
					request.data.hotel_id = hotelData._id;
				}
				
				globalRequest.jotCRUD(request).then(function(response){						
					
					localStorageService.set('processingHotel',response.result);							
					if(response.status == 1)
					{	var nextStep   = parseInt($routeParams.steps)+1;					
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}		

				});

			} else {
				$scope.hotelResult.class = 'Autherror';
				$scope.hotelResult.message = 'Please accept terms and conditions.';
				$scope.hotelResult.status = 1;
			}
		};		
				
	}
]);
