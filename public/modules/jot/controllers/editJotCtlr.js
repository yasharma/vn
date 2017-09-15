"use strict";

app.controller('editJotCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','$route','toastService',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,$route,toastService) {

		
		
		$scope.edit_jot		   		= jotData;		
		$scope.jot_title   			= $scope.edit_jot.jot_title;
		$rootScope.jot_description	= $scope.edit_jot.jot_description;
		$rootScope.jot_members		= $scope.edit_jot.jot_members;
		$rootScope.due_date    		= new Date($scope.edit_jot.due_date);
		$rootScope.priority    		= $scope.edit_jot.priority;
		$rootScope.department  		= $scope.edit_jot.department;
		$rootScope.hotel_room  		= $scope.edit_jot.hotel_room;

	
		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotQuickEditPopup = function(HtmlName){	
			$mdDialog.show({				
			    templateUrl: '/modules/jot/views/'+HtmlName+'.html',
				multiple: true,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen,				
			}).then(function(answer) {}, function() {});

		};

		/**************************************
		* Open move to dc form
		**************************************/

		$scope.moveDC = function(detail){	
			$mdDialog.show({	
				controller: 'moveDcController',
				controllerAs: 'movectrl',			
			    templateUrl: '/modules/jot/views/move_dc.html',
				multiple: true,
				clickOutsideToClose:true,
				fullscreen: $scope.customFullscreen,
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

		};



		/**************************************
		* Change status
		**************************************/

		$scope.changeStatus = function(){
			if($scope.edit_jot.status == 'close')
			{
				$scope.edit_jot.status = 'open';
			} else {
				$scope.edit_jot.status = 'close';
			}

		};
		
		/**************************************
		* Update Jot
		**************************************/

		$scope.saveUpdatedJot = function(){
			$scope.edit_jot.jot_id				= $scope.edit_jot._id;
			$scope.edit_jot.jot_title			= $scope.jot_title;
			$scope.edit_jot.jot_description		= $rootScope.jot_description;
			$scope.edit_jot.jot_members		    = $rootScope.jot_members;
			$scope.edit_jot.due_date    		= new Date($rootScope.due_date).getTime();
			$scope.edit_jot.priority   		    = $rootScope.priority;
			$scope.edit_jot.department 		 	= $rootScope.department;
			$scope.edit_jot.hotel_room 		 	= $rootScope.hotel_room;
		

			var request={
				url:window.__API_PATH.UPDATE_JOT,
				method:"put",
				data:$scope.edit_jot
			};

			globalRequest.jotCRUD(request).then(function(response){		
				var JotType = $scope.edit_jot.jot_type;
				globalRequest.getJotList(JotType); 	
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});
		};

	
		/**************************************
		* Archive Jot
		**************************************/

		$scope.archiveJot = function(){
			var jotid = {jot_id:$scope.edit_jot._id};

			var request={
				url:window.__API_PATH.DELETE_JOT,
				method:"DELETE",
				params:jotid
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				var JotType = $scope.edit_jot.jot_type;
				globalRequest.getJotList(JotType); 
				$mdDialog.cancel();
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});
		};

		/**************************************
		* Close popup
		**************************************/
		$scope.close = function(){
			 $mdDialog.cancel();
		};
		
	}
]).directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction);
                        }
                    });
                }
            };
    }]);

