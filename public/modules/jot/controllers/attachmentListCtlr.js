"use strict";

app.controller('attachmentListCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

			$scope.deleteAttachment = function(hashKey){

				$rootScope.files = $rootScope.files.filter(function(key){
					return key.$$hashKey != hashKey;
				});
			};
	}
]);