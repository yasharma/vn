"use strict";

app.controller('jotFormCtrl', ['$scope','$location','localStorageService','jotFactory','$rootScope','$mdDialog','toastService','$filter',
	function($scope,$location, localStorageService,jotFactory,$rootScope,$mdDialog,toastService,$filter) {	


		/*
		* Function
		*
		* Cteate jot.
		*
		*/
		$scope.createJot = function(){
			/*console.log($rootScope.jot_type);			
			return false;*/
			$scope.message = ' ';

			var hotel = localStorageService.get('hotel');


			var jotDataArray = {
					jot_title          : $scope.jot_title,
					priority           : $scope.jot_priority,
					hotel_id		   : hotel.hotel_id,
					jot_type           : $rootScope.jot_type,
					due_date   		   : new Date($scope.outsource.due_date).getTime(),
					department		   : $scope.outsource.department,
					assigned_to 	   : $scope.outsource.assigned_to,
					checklist		   : $rootScope.checklist,	
					image		   	   : $rootScope.issueImages	
			};

			var request={
				url:window.__API_PATH.CREATE_JOT,
				method:"POST",
				data:jotDataArray
			};
			
			jotFactory.jotCRUD(request).then(function(response){
				
				if(response.status == 1)
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
		                if(value._id == $rootScope.jot_type)
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
				                				"_id"	  :$rootScope.jot_type,
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
		* Select tab
		*
		*/
		$scope.jotTab        = window.__API_PATH.JOT_TAB;
		$scope.currentNavItem=	$scope.jotTab[0].id;

	

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		$scope.jot_priority 	= $scope.jotPriorityList[0].name;

		$scope.selectPriority = function(event,value){
			 $scope.jot_priority = value;
		};

	}
]).directive('jotTemplate', [function(){
	return {
		scope:{jotTemplate:'='},
		template:'<span ng-include="template"></span>',
		// controller: 'jotTabsCtlr',
		link: function(scope,ele){			
			scope.$watch('jotTemplate', function(templateName){
				scope.template='/modules/jot/views/'+templateName+'.html';
				console.log('templateName');	
				console.log(templateName);
				scope.jot_type	 = templateName;			
			});

		}
	};
}]);
