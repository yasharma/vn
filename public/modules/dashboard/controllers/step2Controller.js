"use strict";

app.controller('step2Controller', ['$scope','$rootScope','$routeParams','$location','localStorageService','globalRequest',
	function($scope,$rootScope,$routeParams,$location,localStorageService,globalRequest) {	

		
		$scope.defaultBoards = window.__API_PATH.JOT_TYPES;
		var processingHotel = localStorageService.get('processingHotel');

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};

		/************************************************
		* Step2 form submit
		*************************************************/

		$scope.step2FormSubmit = function(){

			$scope.featureResult = {class:"",message:"",status:""};

			var getSelectedValues = [];
			for (var key in $scope.step2Ctlr.selectFeature) {
				if($scope.step2Ctlr.selectFeature[key]){							
			    	getSelectedValues.push($scope.step2Ctlr.selectFeature[key].id);
				}
			}
			
			if(getSelectedValues.length > 0)
			{		

				 var hotelDataObj = {
				 		hotel_id     	   : processingHotel._id,
				 		jot_types 		   : getSelectedValues						
						
				};

				var request={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
											
					if(response.status == 1)
					{
						var nextStep   = parseInt($routeParams.steps) +1;

						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$scope.featureResult.class = 'Autherror';
				$scope.featureResult.message = 'Please Select at least one jot type.';
				$scope.featureResult.status = 1;
			}
		};	



				
	}
]);
