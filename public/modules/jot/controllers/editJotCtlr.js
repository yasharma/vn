"use strict";

app.controller('editJotCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','$route','toastService',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,$route,toastService) {
		
		$scope.edit_jot		   = jotData;
		
		$scope.jot_title	   = $scope.edit_jot.jot_data.jot_title;
		$rootScope.assigned_to = $scope.edit_jot.jot_data.assigned_to;
		$rootScope.due_date    = new Date($scope.edit_jot.jot_data.due_date);
		$rootScope.priority    = $scope.edit_jot.jot_data.priority;
		$rootScope.department  = $scope.edit_jot.jot_data.department;



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
		* Change status
		**************************************/

		$scope.changeStatus = function(){
			if($scope.edit_jot.jot_data.status == 'close')
			{
				$scope.edit_jot.jot_data.status = 'open';
			} else {
				$scope.edit_jot.jot_data.status = 'close';
			}

		};
		
		/**************************************
		* Update Jot
		**************************************/

		$scope.saveUpdateedJot = function(){
			$scope.edit_jot.jot_data.jot_id      = $scope.edit_jot.jot_data._id;
			$scope.edit_jot.jot_data.jot_title   = $scope.jot_title;
			$scope.edit_jot.jot_data.assigned_to = $rootScope.assigned_to;
			$scope.edit_jot.jot_data.due_date    = new Date($rootScope.due_date).getTime();
			$scope.edit_jot.jot_data.priority    = $rootScope.priority;
			$scope.edit_jot.jot_data.department  = $rootScope.department;
		

			var request={
				url:window.__API_PATH.UPDATE_JOT,
				method:"put",
				data:$scope.edit_jot.jot_data
			};

			globalRequest.jotCRUD(request).then(function(response){				
				$scope.result = {message:response.message,class:response.class}; 	
			});
		};

	
		/**************************************
		* Archive Jot
		**************************************/

		$scope.archiveJot = function(){
			var jotid = {jot_id:$scope.edit_jot.jot_data._id};

			var request={
				url:window.__API_PATH.DELETE_JOT,
				method:"DELETE",
				params:jotid
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$route.reload();
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

