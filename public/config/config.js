'use strict';


/*Angular interceptors are service factories that are registered with the $httpProvider */
app.config(['$httpProvider', function($httpProvider){
	var interceptor = ['$q', '$location','localStorageService','AuthSrv','$rootScope', function ($q, $location,localStorageService,AuthSrv,$rootScope) {

		/* Get the application storage type default (localstorage) */
		return {
			request: function (config) {

                config.headers = config.headers || {};
				var token = localStorageService.get('token');
				if (token) {
					config.headers.Authorization = 'Bearer '+ token;
					AuthSrv.isLogged = 1;
				}
				return config;
			},

			requestError: function (rejection) {
				return $q.reject(rejection);
			},

			response: function (response) {
				return response || $q.when(response);
			},

            // Revoke client authentication if 400 is received
            responseError: function (rejection) {
            	return $q.reject(rejection);
            }
        };
    }];

    $httpProvider.interceptors.push(interceptor);
}])
.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
   
   var hostname = window.location.hostname, prefix;
   switch(hostname) {
        case 'localhost':
            prefix = 'admin_local';
            break;
        default:
            prefix = 'default';
   }    
  localStorageServiceProvider.setPrefix(prefix);
}])
.run(['$location','$rootScope','localStorageService','AuthSrv','$templateCache','$timeout',
	function($location, $rootScope,localStorageService,AuthSrv,$templateCache,$timeout){   	
        
        
        $rootScope.$on("$routeChangeStart", 
            function (event, nextRoute, currentRoute) { 
                
                if(nextRoute.$$route){
                    if(nextRoute.$$route.access){
                        $rootScope.isAuth= nextRoute.$$route.access;
                   } 
                }
                
                if ( nextRoute !== null && nextRoute.access !== undefined && nextRoute.access.requiredLogin  && !AuthSrv.isLogged && !localStorageService.get('user')) {
                    AuthSrv.isLogged = 0;                  
                    $location.path("/");
                }/*else {
                   
                    var token = localStorageService.get('token');
                    if(($location.path() === '/login' || $location.path() === '/') && token ){           
                       $location.path("/dashboard");
                    }
                }*/

                $rootScope.$watch(function(newValue, oldValue) {
                    $rootScope.logggedin = AuthSrv.isLogged;
                });

        

        });

        $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
          $templateCache.removeAll(); 

          /*$timeout(function() {
            var viewHeight,windowHeightl,containerHeight;

            viewHeight = document.getElementsByTagName('ng-view')[0].clientHeight;
            windowHeight = window.innerHeight;
            if(windowHeight > viewHeight)
            {

                containerHeight = windowHeight-70;
            }

            if(windowHeight < viewHeight)
            {

                containerHeight = viewHeight-70;
            }


            window.addEventListener('resize', setWindowSize);

              function setWindowSize() { 
                    $rootScope.$apply(function(){
                        viewHeight = document.getElementsByTagName('ng-view')[0].clientHeight;
                        windowHeight = window.innerHeight;
                        if(windowHeight > viewHeight)
                            {

                                containerHeight = windowHeight-70;
                            }

                            if(windowHeight < viewHeight)
                            {

                                containerHeight = viewHeight-70;
                            }
                            $rootScope.iframeHeight = containerHeight;

                    });
              }
          });        

          $rootScope.iframeHeight = window.innerHeight-70;
          window.addEventListener('resize', setWindowSize);
          function setWindowSize() { 
                $rootScope.$apply(function(){$rootScope.iframeHeight = window.innerHeight-70;});
          }*/
        });


    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            localStorageService.remove('token');
            localStorageService.remove('user');
            localStorageService.remove('hotel');
            delete $rootScope.user;
            AuthSrv.isLogged = false;
            $location.path('/');
        };

        // $rootScope.$on( 'TokenExpiredError', function( event, eventData ) {
        //    toastService.alert( {message: eventData.message , class: 'error'});
        // });
        
        /* Set user for entire application */
    	//$rootScope.admin = localStorageService.get('admin');

	
}]);
