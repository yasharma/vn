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

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
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
.run(['$location','$rootScope','localStorageService','AuthSrv','$templateCache','$cookies','socket',
	function($location, $rootScope,localStorageService,AuthSrv,$templateCache,$cookies,socket){ 	        
        
        $rootScope.$on("$routeChangeStart", 
            function (event, nextRoute, currentRoute) { 

                $rootScope.hideclass            = '';
                $rootScope.currentPage          = $location.$$path;
                $rootScope.activeHotelData      = localStorageService.get('hotel');
                $rootScope.currentUser          = localStorageService.get('user');
                

                /*************************************************
                * Login Remember & redirect user if cookie not set
                *************************************************/

                if(nextRoute.$$route){
                    if(nextRoute.$$route.access){
                        $rootScope.isAuth = nextRoute.$$route.access;
                   } 
                } 
                



               if(!( $cookies.get("hoteljot") && ($cookies.get("hoteljot") == window.btoa('rememberloggedin') || $cookies.get("hoteljot") == window.btoa('sessionloggedin'))  )){

                    localStorageService.remove('token');
                    localStorageService.remove('user');
                    localStorageService.remove('hotel');
                    $cookies.remove("hoteljot");
                    delete $rootScope.user;
                    AuthSrv.isLogged = false;
               }
              


                if ( nextRoute !== null && nextRoute.access !== undefined && nextRoute.access.requiredLogin  && !AuthSrv.isLogged && !localStorageService.get('user')) {
                    AuthSrv.isLogged = 0;                  
                    $location.path("/");
                }



                $rootScope.$watch(function(newValue, oldValue) {
                    $rootScope.logggedin = AuthSrv.isLogged;                   
                });
                $rootScope.$broadcast('handleSidebar'); 

        });

        $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
          $rootScope.hideclass = 'hideclass';
          $templateCache.removeAll(); 
        });


    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            socket.emit('web.logout',localStorageService.get('user'));
            localStorageService.remove('token');
            localStorageService.remove('user');
            localStorageService.remove('hotel');
            $cookies.remove("hoteljot");
            delete $rootScope.user;
            AuthSrv.isLogged = false;            
            $location.path('/');
        };
	
}]);
