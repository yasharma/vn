"use strict";

app.controller('createJotCtrl', ['$scope','$http','$location','$timeout','localStorageService','jotFactory','$rootScope','AuthSrv','$mdDialog','toastService',
	function($scope,$http,$location,$timeout, localStorageService,jotFactory,$rootScope,AuthSrv,$mdDialog,toastService) {	


		/*
		* Function
		*
		* Cteate jot.
		*
		*/
		$scope.createJot = function(){

			$scope.message = ' ';		

			var jotDataArray = {
					jot_title          : $scope.jot_title,
					priority           : 'high',
					jot_type           : $scope.jot_type				
			};

			jotFactory.post(CREATE_JOT_API_URL,jotDataArray).then(function(response){

				if(response.result.success)
				{

					$mdDialog.cancel();
					var popup = {"message":response.result.message,"class":"success"};
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
					* Push new jot data if  jot type(message,issue etc.) is not in jot 
					  object
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

		$scope.jotList = JOT_TYPES;
		$scope.jot_type = $scope.jotList[0].name;

		/*
		* Function
		*
		* Set jot type on click
		*
		*/

		$scope.jotSelect = function(event,value){
			 $scope.jot_type = value;
		};

	}
]);
