// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	
			])

.config(['localStorageServiceProvider',
	function (localStorageServiceProvider) {
	  	localStorageServiceProvider
	    .setPrefix('hoteljotApp');
	}
]);

app.run(['$log',function($log){
	$log.info("Application is running");
}]);

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
                if(($location.path() === '/login' || $location.path() === '/') && token ){           
                   $location.path("/dashboard");
                }
            }
    	});
    	
    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            localStorageService.remove('token');
            localStorageService.remove('user');
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


"use strict";


app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',  {
       templateUrl : "/modules/login/views/login.tpl.html",
        controller: "loginController",
        access: {
            requiredLogin: false
        }
    })

    .when("/login", {
        templateUrl : "/modules/login/views/login.html",
        controller: "loginController",
        access: {
            requiredLogin: false
        }
    })
    .when("/register", {
        templateUrl : "/modules/register/views/register.tpl.html",
        controller  :  "registerController",
        access: {
            requiredLogin: false
        }
    })
    .when("/dashboard", {
        templateUrl : "/modules/dashboard/views/dashboard-home.html",
        controller  :  "dashboardController",
        access: {
            requiredLogin: true
        }
    })
    .when("/dashboard/jot", {
        templateUrl : "/modules/jot/views/dashboard-jot.html",
        controller  :  "jotController",
        access: {
            requiredLogin: true
        }
    });
   
    $locationProvider.html5Mode(true);     
}]);

'use strict';

app.factory('toastService', ['$mdToast','$timeout', function ($mdToast, $timeout) {
	return{
		alert: function(opt){
			$mdToast.hide();	
			$timeout(function(){
				var toast = $mdToast.simple()
				.textContent(opt.message)
				.position('bottom right')
				// .toastClass('fixed '+ opt.class)
				.action('x')
				.hideDelay(3000);
				

				$mdToast.show(toast).then(function(response) {
				    if ( response == 'ok' ) {
				    	$mdToast.hide();
				    }
				});
			},1000);
		}
	};
}]);
"use strict";

/**************************************
* Login controller
**************************************/


app.controller('jotController', ['$scope','$http','$location','$timeout','localStorageService','jotFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,jotFactory,$rootScope,AuthSrv,$mdDialog) {



		/**************************************
		* Get jot
		**************************************/

		jotFactory.get('/api/get_jot','').then(function(response){
				
				$rootScope.jots = response.data;	
		});	

		/**************************************
		* Cteate jot
		**************************************/	
		$scope.createJot = function(){
		};

	}
]);

'use strict';

app.factory('jotFactory', ['$http', function ($http) {
	return{		
		get: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		post: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		put: function(apiUrl, data){
			return $http.put(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		}			
	};
}]);
"use strict";

/**************************************
* Login controller
**************************************/


app.controller('loginController', ['$scope','$http','$location','$timeout','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog) {	


		$scope.login = function(){
			$mdDialog.show({
				controller: "loginController",
				templateUrl: '/modules/login/views/login.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
			})
			.then(function(answer) {			
			}, function() {			
			});
		};


		$scope.close = function(){
			 $mdDialog.cancel();
		};


		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};	

			loginFactory.login('/api/login',dataObj).then(function(response){				
				if(response.errors){
					//toastService.alert({message: response.errors.message, class: 'error'});
				} else {
					if(response.success)
					{
						localStorageService.set('token', response.token);
						localStorageService.set('user', response.user);
						AuthSrv.isLogged = true;
						$location.path('/dashboard');
					}
					$scope.result = response.message;				
				}
			});				
	               
		};



		$scope.openSignupForm = function (obj) {	
	        			
	           $location.path('/register');    
		};
	}
]);

'use strict';

app.factory('loginFactory', ['$http', function ($http) {
	return{		
		login: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response.data.result;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		}			
	};
}]);
"use strict";

/**************************************
* Register controller
**************************************/


app.controller('registerController', ['$scope','registerFactory','$location',
	function($scope,registerFactory,$location) {

		$scope.registerUser = function (obj) {

		        var dataObj = {
						name : $scope.name,
						email : $scope.email,
						password : $scope.password
				};	

				registerFactory.register('/api/register',dataObj).then(function(response){
					$scope.result = response.result;
					
				});       
		};	


		$scope.openLoginForm = function (obj) {		
	        			
	           $location.path('/');    
		};	

		
	}
]);


'use strict';

app.factory('registerFactory', ['$http', function ($http) {
	return{		
		register: function(apiUrl, data){
			return $http.post(apiUrl, data)
			 .then(function(response){
				return  response.data;	
			});
		}			
	};
}]);
"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,AuthSrv,$mdDialog) {	

		/*
		* Function
		*
		* Open popup to add new hotel.
		*
		*/

		$scope.openAddHotelPopup = function(){
			$mdDialog.show({
				controller:'dashboardPopupController',	          
				templateUrl: '/modules/dashboard/views/add-new-hotel.tpl.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
			})
			.then(function(answer) {
			}, function() {

			});

		};



		/*
		* Factory method
		*
		* Display hotels
		*
		*/
		
		dashboardFactory.get('/api/get_hotels','').then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.data;
			}
		});
	}
]);



"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardPopupController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','$route',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,$route) {	

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
		* Factory method
		*
		* Add new hotel data
		*
		*/

		$scope.addNewHotel = function(){
			var acceptTerm = $scope.terms;	
			if(acceptTerm)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		user_id     	   : '',
						hotelname          : $scope.hotelname,
						ownername          : $scope.ownername,
						email              : $scope.email,
						phone              : $scope.phone,
						address            : $scope.address,
						city               : $scope.city,
						zipcode            : $scope.zipcode,
						state              : $scope.state,
						country            : $scope.country,
						no_of_guestrooms   : $scope.no_of_guestrooms,
						room_no            : $scope.room_no,
						vending_area       : $scope.vending_area,
						no_of_employee     : $scope.no_of_employee,
						no_of_meetingrooms : $scope.no_of_meetingrooms,
						no_of_floors       : $scope.no_of_floors,
						arrangement_type   : $scope.arrangement_t
				};

				dashboardFactory.post('/api/add_hotel',hotelDataObj).then(function(response){				
					$scope.message = response.data.result.message;
					$scope.validateclass = response.data.result.class;
					if(response.data.result.success)
					{
						$rootScope.hotels.push(hotelDataObj);
						$mdDialog.cancel();
					}				

				});

			} else {
				$scope.message = 'Please accept  terms and conditions.';
			}	
			
		};
		
	}
]);



'use strict';

app.factory('dashboardFactory', ['$http', function ($http) {
	return{		
		post: function(apiUrl, data){
			return $http.post(apiUrl, data).then(function(response){
				return response;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},

		get: function(apiUrl, data){			
			return $http.post(apiUrl, data).then(function(response){
				return response;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		}			
	};
}]);