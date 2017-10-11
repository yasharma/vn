'use strict';

app.factory('toastService', ['$mdToast','$timeout','$rootScope', function ($mdToast, $timeout,$rootScope) {
	return{
		alert: function(opt){
			$mdToast.hide();	
			$timeout(function(){
				var toast = $mdToast.simple()
				.textContent(opt.message)
				.position('bottom right')
				.toastClass(opt.class)
				.action('x')
				.hideDelay(3000);


				$mdToast.show(toast).then(function(response) {
				    if ( response == 'ok' ) {
				    	$mdToast.hide();
				    }
				});
			},1000);
		},



		errors: function(opt){
					$rootScope.closeToast = function () {
			            $mdToast.hide();
			        };

					$mdToast.hide();	
					$timeout(function(){
					var errorToast = {
						  	  hideDelay   : 5000,
					          position    : 'bottom right',
					          action      : true,				         
					          template : '<md-toast md-theme="default" class="ng-scope md-toast-error '+opt.class+'" _md md-bottom md-right md-default-theme" style=""><div class="md-toast-content"><span class="md-toast-text ng-binding" role="alert" aria-relevant="all" aria-atomic="true">'+opt.message+'</span> <button class="md-action md-button ng-scope md-default-theme md-ink-ripple" type="button" ng-click="$root.closeToast()" ng-class="highlightClasses">      x    </button></div></md-toast>'
					};
				$mdToast.show(errorToast);
			},1000);
		}
	};
}]);