'use strict';

var app = angular.module("hoteljotApp", [
	"ngRoute",
	"LocalStorageModule"
]);

'use strict';

app.factory('AuthSrv', function () {
    var auth = {
        isLogged: false
    };
    return auth;
});
'use strict';


/*Angular interceptors are service factories that are registered with the $httpProvider */
app.config(['$httpProvider', function($httpProvider){
	var interceptor = ['$q', '$location','localStorageService','AuthSrv','$rootScope', function ($q, $location,localStorageService,AuthSrv,$rootScope) {

		/* Get the application storage type default (localstorage) */
		return {
			request: function (config) {
                //console.log($rootScope);
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
            	// if(rejection.status === 401 && rejection.data.errors.code !== undefined){
            	// 	$rootScope.$broadcast( 'TokenExpiredError', { message: 'Session has been expired, please login again.' } );
            	// 	localStorageService.remove('token');
            	// 	localStorageService.remove('admin');
            	// 	delete $rootScope.admin;
            	// 	AuthSrv.isLogged = false;
            	// 	$location.path("/");
            	// }
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
        // case 'localhost': // for qa server
        //     prefix = 'admin_local'
        //     break;
        default:
            prefix = 'default';
   }    
  localStorageServiceProvider.setPrefix(prefix);
}])
.run(['$location','$rootScope','localStorageService','AuthSrv',
	function($location, $rootScope,localStorageService,AuthSrv){
    	$rootScope.$on("$routeChangeStart", function (event, nextRoute, currentRoute) {
            
    		if ( nextRoute !== null && nextRoute.access !== undefined && nextRoute.access.requiredLogin  && !AuthSrv.isLogged && !localStorageService.get('user')) {
    		    console.log('inside if');
                AuthSrv.isLogged = 0;
                console.log(AuthSrv);
    		    $location.path("/");
           	}else {
                console.log('else if');
                var token = localStorageService.get('token');
                if(($location.path() === '/' || $location.path() === '/login') && token ){           
                   $location.path("/dashboard");
                }
            }
    	});
    	
    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            // localStorageService.remove('token');
            // localStorageService.remove('admin');
            // delete $rootScope.admin;
            // AuthSrv.isLogged = false;
            // $location.path('/login');
        };

        // $rootScope.$on( 'TokenExpiredError', function( event, eventData ) {
        //    toastService.alert( {message: eventData.message , class: 'error'});
        // });
        
        /* Set user for entire application */
    	//$rootScope.admin = localStorageService.get('admin');

	
}]);


"use strict";


app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',  {
        templateUrl : "/modules/home/home.html",
        controller: "loginController",
    })
    .when("/login", {
        templateUrl : "/modules/login/views/login.html",
        controller: "loginController",
        access: {
            requiredLogin: false
        }
    })
    .when("/register", {
        templateUrl : "/modules/register/views/register.html",
        controller  :  "registerController" ,
        access: {
            requiredLogin: false
        }
    })
    .when("/dashboard", {
        templateUrl : "/modules/dashboard/examples/dashboard.html",
        access: {
            requiredLogin: true
        }
    });
    /*.when("/dashboard.html", {
        templateUrl : "/views/dashboard/examples/dashboard.html"
    })
    
    .when("/user.html", {
        templateUrl : "/views/dashboard/examples/user.html"
    })
    .when("/table.html", {
        templateUrl : "/views/dashboard/examples/table.html"
    })
    .when("/typography.html", {
        templateUrl : "/views/dashboard/examples/typography.html"
    })
    .when("/icons.html", {
        templateUrl : "/views/dashboard/examples/icons.html"
    })
    .when("/maps.html", {
        templateUrl : "/views/dashboard/examples/maps.html"
    })
    .when("/notifications.html", {
        templateUrl : "/views/dashboard/examples/notifications.html"
    });*/
    $locationProvider.html5Mode(true);     
}]);

"use strict";

/**************************************
* Login controller
**************************************/

app.controller('loginController', ['$scope','$http','$location','$timeout','localStorageService',
	function($scope,$http,$location,$timeout, localStorageService) {
		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};		
			
	         $http.post('/api/login', dataObj ).then(function(response){
						var data = response.data;
						if(data.result.success)
						{
							localStorageService.set('user', data.result.user);
							localStorageService.set('token', data.result.token);

							// console.log(response);
							$location.path('/dashboard');
						}	
						$scope.result = data.result;	

				});       
	};
}]);




"use strict";

/**************************************
* Register controller
**************************************/

app.controller('registerController', function($scope,$http) {
	$scope.registerUser = function (obj) {
		var error = false;
		

	        var dataObj = {
					name : $scope.name,
					email : $scope.email,
					password : $scope.password
			};	

         $http.post('/api/register', dataObj
			).then(function(respnse){			
					$scope.result = respnse.data;				
			});
		
       
	};
});
