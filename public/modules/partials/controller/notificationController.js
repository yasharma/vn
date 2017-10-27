"use strict";

app.controller('notificationController', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {

		/*****************************************
		* Delete notification
		*****************************************/	

		$scope.removeNotification = function(aid,index){
			
			var request={
				url:window.__API_PATH.UPDATE_ALERT,
				method:"PUT",
				data:{_id:aid, user_id:$rootScope.currentUser._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){
				$rootScope.message.splice(index, 1);
			});

		};

	}
]);


