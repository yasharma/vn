"use strict";

app.controller('hotelEditController', ['$scope','$timeout','globalRequest','$mdDialog','toastService','hotelDetail',
	function($scope,$timeout,globalRequest,$mdDialog,toastService,hotelDetail) {	


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

		/***********************************************
		* Take hotel details in current scope
		***********************************************/

		angular.forEach(hotelDetail,function (value,key) {
		    if(key == 'country'){
		    	$scope.populateState(value);
		    }
		    $scope[key] = value;
		});		
		

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/

		$scope.close = function(){
			 $mdDialog.cancel();
		};

		/***********************************************
		* Update hotel information
		***********************************************/

		$scope.editNewHotel = function(){

			var hotelDataObj = {
			 		hotel_id     	   : $scope._id,
					hotelname          : $scope.hotelname,
					ownername          : $scope.ownername,
					currency           : $scope.currency,
					email              : $scope.email,
					phone              : $scope.phone,
					address            : $scope.address,
					city               : $scope.city,
					zipcode            : $scope.zipcode,
					state              : $scope.state,
					country            : $scope.country	
				};

			var request={
					url:window.__API_PATH.UPDATE_HOTEL,
					method:"PUT",
					data:hotelDataObj
				};


				/***********************************************
				* Upload bachground image
				***********************************************/

				if($scope.uploaedImgage)
				{					
				
					globalRequest.uploadFiles($scope._id,'cover',$scope.uploaedImgage).then(function (response) {
					
	                $timeout(function () {	                 
	                	request.data.image = response.result[0].filename;


	                	/***********************************************
						* Update hotel info with bachground image
						***********************************************/                 	

		                globalRequest.jotCRUD(request).then(function(updateResponse){
							var popup;							
							if(updateResponse.status == 1)
							{
								globalRequest.getHotels();
								$mdDialog.cancel();
								popup = {"message":updateResponse.message,"class":"success"};
								toastService.alert(popup);
							} else {
								var errors = '';
								angular.forEach(updateResponse.errors,function(value,key){
									errors += value.message+'<br>';
								});
								popup = {"message":errors,"class":""};
								toastService.errors(popup);						
							}

						});

	                });
	            });

				} else {


					/***********************************************
					* Update hotel info without bachground image
					***********************************************/


					globalRequest.jotCRUD(request).then(function(response){	
						var popup;
						if(response.status == 1)
						{
							globalRequest.getHotels();
							$mdDialog.cancel();
							popup = {"message":response.message,"class":"success"};
							toastService.alert(popup);
						} else {
							var errors = '';
							angular.forEach(response.errors,function(value,key){
								errors += value.message+'<br>';
							});
							popup = {"message":errors,"class":""};
							toastService.errors(popup);						
						}
					});

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
	    	if(files)
	    	{
				$scope.uploaedImgage = files[0];
			}

	    };
		
	}
]);


