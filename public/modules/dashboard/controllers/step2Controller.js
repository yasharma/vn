"use strict";

app.controller('step2Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,toastService) {	

		
		$scope.defaultBoards = window.__API_PATH.JOT_TYPES;
		


		/*angular.forEach*/

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
			$rootScope.hoteljotLoader = true;

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
				 		hotel_id     	   : $rootScope.newProcessingHotel._id,
				 		jot_types 		   : getSelectedValues						
						
				};
				var request={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					$rootScope.hoteljotLoader = false;						
					if(response.status == 1)
					{						
						var nextStep   = parseInt($routeParams.steps) +1;
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$rootScope.hoteljotLoader = false;				
				var popup = {"message":"Please Select at least one jot type.","class":""};
				toastService.errors(popup);
			}
		};	



				
	}
]);
