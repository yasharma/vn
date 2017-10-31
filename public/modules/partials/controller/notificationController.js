"use strict";

app.controller('notificationController', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {

		/*****************************************
		* Delete notification
		*****************************************/	

		$scope.removeNotification = function(aid){
			
			var request={
				url:window.__API_PATH.UPDATE_NOTIFICATION,
				method:"PUT",
				data:{_id:aid, contact_number:$rootScope.currentUser.contact_number}
			};
			
			globalRequest.jotCRUD(request).then(function(response){
				globalRequest.getNotification();
			});

		};

	}
]);


