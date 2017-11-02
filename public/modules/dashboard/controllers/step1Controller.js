"use strict";

app.controller('step1Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService','$timeout','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService,$timeout,toastService) {	
		var hotelData       = localStorageService.get('processingHotel');

		$scope.currencyList = window.__API_PATH.CURRENCY_LIST;
		$scope.countryList  = window.countryList;
		var stateList       = window.stateList;
		
		/************************************************
		* Change states according to country
		*************************************************/


		$scope.populateState = function(countryName){
			var countryIndex = $scope.countryList.indexOf(countryName);
			$scope.stateList = stateList[countryIndex+1].split('|');
		};
		
		/************************************************
		* Append value if hotel already exists
		*************************************************/
		$scope.checked = false;
		if(hotelData)
		{

			globalRequest.getHotelStatus(hotelData._id).then(function(response){
					angular.forEach(response[0],function (value,key) {	
						$scope[key] = value;												    
					});

			});
			$scope.checked = true;
		}

		/************************************************
		* Step1 submit to create the hotel
		*************************************************/

		$scope.step1FormSubmit = function(){			
			
			var acceptTerm = $scope.terms;	
			
			$scope.hotelResult = {class:"",message:"",status:""};
			if(acceptTerm)
			{
				$rootScope.hoteljotLoader = true;


				 var hotelDataObj = {
				 		user_id     	   : $rootScope.currentUser._id,
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
					request.data.image    = $scope.image;
				}
				
				globalRequest.jotCRUD(request).then(function(response){

					localStorageService.set('processingHotel',response.result);							
					if(response.status == 1)
					{	
						var nextStep;
						if($scope.image)
						{
							$rootScope.hoteljotLoader = false;
							nextStep   = parseInt($routeParams.steps)+1;				
						    $location.path('/dashboard/hotel-setup/'+nextStep);
						} else{
							if ($scope.uploaedImgage && $scope.uploaedImgage.length) 
							{	
								uploadCoverIMage(response.result._id);
							} else {	
								$rootScope.hoteljotLoader = false;	
								nextStep   = parseInt($routeParams.steps)+1;
							    $location.path('/dashboard/hotel-setup/'+nextStep);
							}
						}
						
					}	else {						
							$rootScope.hoteljotLoader = false;
							var errors = '<ul class="mdToast-error-list">';
							angular.forEach(response.errors,function(value,key){
								errors += '<li>'+value.message+'</li>';
							});
							errors += '</ul>';

							var popup = {"message":errors,"class":""};
							toastService.errors(popup);
					}	

				});

			} else {				

				var popup = {"message":"Please accept terms and conditions.","class":""};
				toastService.errors(popup);
			}
		};	


		/*****************************************
		* Hotel image upload
		*****************************************/	

		$scope.$watch('files', function () {
        	$scope.uploadCover($scope.files);
	    });

	    $scope.$watch('file', function () {
	        if ($scope.file != null) {
	            $scope.files = [$scope.file];
	        }
	    });

	    $scope.uploadCover = function(files, errFiles) {			
			$scope.uploaedImgage = files;
			$scope.image = '';
	    };

	    function uploadCoverIMage(hotelId){

    		globalRequest.uploadFiles(hotelId,'cover',$scope.uploaedImgage).then(function (response) {	 
            
                $timeout(function () {	                 

                 var ImageRequest={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:{hotel_id:hotelId,image:response.result[0].filename}
					};

                 globalRequest.jotCRUD(ImageRequest).then(function(updateResponse){
												
						if(updateResponse.status == 1)
						{	
							var processingHotel  = localStorageService.get('processingHotel');

							processingHotel.image = response.result[0].filename;
							localStorageService.set('processingHotel',processingHotel);
							$rootScope.hoteljotLoader = false;
							var nextStep   = parseInt($routeParams.steps)+1;
						    $location.path('/dashboard/hotel-setup/'+nextStep);
						}		

					});

                });
            });	        

	    }			
				
	}
]);