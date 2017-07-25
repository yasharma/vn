"use strict";

app.controller('createJotCtrl', ['$scope','$location','localStorageService','jotFactory','$rootScope','$mdDialog','toastService','$filter',
	function($scope,$location, localStorageService,jotFactory,$rootScope,$mdDialog,toastService,$filter) {	


		/*
		* Function
		*
		* Cteate jot.
		*
		*/
		$scope.createJot = function(){

			$scope.message = ' ';	


			var hotelID = localStorageService.get('hotel');

			var jotDataArray = {
					jot_title          : $scope.jot_title,
					priority           : $scope.jot_priority,
					hotel_id		   : hotelID.hotel_id,
					jot_type           : $scope.jot_type,
					due_date   		   : new Date($scope.due_date).getTime(),
					department		   : $scope.department,
					assigned_to 	   : $scope.assigned_to		
			};

			var request={
				url:window.__API_PATH.CREATE_JOT,
				method:"POST",
				data:jotDataArray
			};
			
			jotFactory.jotCRUD(request).then(function(response){

				if(response.success)
				{

					$mdDialog.cancel();
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
					

					/******************************************************
					* Jot object iteration
					****************************************************/

					var keyFoundInObj = false;

					angular.forEach($rootScope.jots,function(value,index){
						

						/******************************************************
						* Check jot type(message,issue etc.) is new or already in object 
						****************************************************/
		                if(value._id == $scope.jot_type)
		                {                	
		                	value.jot_data.push(jotDataArray);
		                	keyFoundInObj = true;
		                }		                
		            });
					

		            /******************************************************
					* Push new jot data if  jot type(message,issue etc.) is not in jot object
					****************************************************/
					
					if(!keyFoundInObj)
					{
						var jotDataArrayInObj = [jotDataArray];
			            var newcreatedJot = {
				                				"_id"	  :$scope.jot_type,
				                				"jot_data": jotDataArrayInObj
						                	};
			            		                	
			            $rootScope.jots.push(newcreatedJot);
		            
			        }

				}
			});

		};

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
		* Function
		*
		* Set default jot type when popup open
		*
		*/

		$scope.jotList        = window.__API_PATH.JOT_TYPES;
		$scope.jot_type       = $scope.jotList[0].name;	

		/*
		* Function
		*
		* Set jot type on click
		*
		*/

		$scope.jotSelect = function(event,value){
				
			$scope.jot_type = value;
		};

		/*
		* Function
		*
		* Set default jot priority when popup open
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		$scope.jot_priority 	= $scope.jotPriorityList[0].name;

		/*
		* Function
		*
		* Set jot priority type on click
		*
		*/

		$scope.selectPriority = function(event,value){
			 $scope.jot_priority = value;
		};

	}
]);
