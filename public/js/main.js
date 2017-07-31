// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	,
			'ngFileUpload'
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





/********************************************************************
* Global variable and api url
********************************************************************/

window.__API_PATH={};

__API_PATH.jotList = '/api/get_jot';

/*
* Login 
*/

__API_PATH.LOGIN   = '/api/login';


/*
* Register 
*/

__API_PATH.REGISTER  = '/api/register';

/*
* Hotels 
*/
__API_PATH.GET_HOTELS  = '/api/get_hotels';
__API_PATH.ADD_HOTEL   = '/api/add_hotel';

/*
* Jot 
*/

__API_PATH.UPLOAD_FILE  = '/api/uploadfile';

__API_PATH.JOT_TYPES 	   = [{name:'issue',class:'active',icon:'warning'},{name:'message',class:'',icon:'email'},{name:'task',class:'',icon:'format_list_bulleted'},{name:'note',class:'',icon:'email'},{name:'lost & found',class:'',icon:'call_missed'},{name:'meeting room',class:'',icon:'room'},{name:'vending',class:'',icon:'shopping_cart'}]; 

__API_PATH.JOT_PRIORITY   = [{name:'urgent',class:'urgent orange'},{name:'high',class:'high red'},{name:'medium',class:'medium yellow'},{name:'low',class:'low green'}]; 

__API_PATH.CREATE_JOT = '/api/create_jot';
__API_PATH.GET_JOT       = '/api/get_jot';

__API_PATH.delete_hotel = '/api/delete_hotel';


__API_PATH.JOT_TAB 	   = [{name:'Quick Jot',id:'quick',src:'assets/images/logo_pic.png',icontype:'image'},{name:'Issue',id:'issue',src:'warning',icontype:'icon'},{name:'Task',id:'task',src:'format_list_bulleted',icontype:'icon'},{name:'Note',id:'note',src:'insert_drive_file',icontype:'icon'},{name:'lost & found',id:'lost&found',src:'local_drink',icontype:'icon'},{name:'Vending Machine',id:'vending_machine',src:'vignette',icontype:'icon'},{name:'Meeting Room',id:'meeting_room',src:'group',icontype:'icon'}]; 


__API_PATH.DEFAULT_CHECKLIST 	= [
										{
											name   :"Prepare Room 7 AM @Jon",
											sublist:[{name:"tea1"},{name:"tea2"}]
										},
										{
											name   :"Prepare Room 7 AM @Jon2",
											sublist:[{name:"tea3"},{name:"tea4"}]
										}			
									]; 

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


        $rootScope.$on("$routeChangeStart", 
            function (event, nextRoute, currentRoute) {           

            if ( nextRoute !== null && nextRoute.access !== undefined && nextRoute.access.requiredLogin  && !AuthSrv.isLogged && !localStorageService.get('user')) {
              
                AuthSrv.isLogged = 0;
              
                $location.path("/");
            }else {
               
                var token = localStorageService.get('token');
                if(($location.path() === '/login' || $location.path() === '/') && token ){           
                   $location.path("/dashboard");
                }
            }
        });


        $rootScope.$on("$routeChangeSuccess", 
            function (event, nextRoute, currentRoute) {

           if(nextRoute.$$route){
                if(nextRoute.$$route.access){
                    $rootScope.isAuth= nextRoute.$$route.access;
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
            requiredLogin: true, 
            headerType:'hotel_header'
        }
    })
    .when("/dashboard/jot", {
        templateUrl : "/modules/jot/views/dashboard-jot.html",
        controller  :  "jotController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header'
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
				.toastClass(opt.class)
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


app.controller('dashboardController', ['$scope','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','toastService',
	function($scope,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,toastService) {	

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

		/*var data = {
				"user_id":localStorageService.get('user')._id
			};
		var request={
				url:window.__API_PATH.GET_HOTELS,
				method:"POST",
				data:data
			};
		
		dashboardFactory.hotelCRUD(request).then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.result;
			}
		});*/


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.redirectToJot = function(hotelID,hotelName){

			var hotelData  = {
					'hotel_id'   :hotelID,
					'hotel_name' :hotelName
				};
			localStorageService.set('hotel', hotelData);			
			$location.path('/dashboard/jot');
		};


		/*
		* Function
		*
		* Delete hotels
		*
		*/
		
		
		$scope.deleteHotel = function(event,hotelID){

			var storedHotelID = localStorageService.get('hotel');		
			if(storedHotelID && storedHotelID.hotel_id == hotelID)
			{
				localStorageService.remove('hotel');
			}	

			var data = {
				"hotel_id":hotelID
			};
			var request={
					url:window.__API_PATH.delete_hotel,
					method:"DELETE",
					params:data
				};
			
			/*dashboardFactory.hotelCRUD(request).then(function(response){
				if(response.error){
				} else {				
					if(response.success)
					{
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
					}
				}
			});*/		
		};


	}
]);

"use strict";

/**************************************
* Login controller
**************************************/


app.controller('dashboardPopupController', ['$scope','$http','$location','$timeout','localStorageService','dashboardFactory','$rootScope','$mdDialog','$route','toastService',
	function($scope,$http,$location,$timeout, localStorageService,dashboardFactory,$rootScope,$mdDialog,$route,toastService) {	

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
				 		user_id     	   : localStorageService.get('user')._id,
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

				var request={
						url:window.__API_PATH.ADD_HOTEL,
						method:"POST",
						data:hotelDataObj
					};

				dashboardFactory.hotelCRUD(request).then(function(response){			
						
					$scope.message 		 = response.message;
					$scope.validateclass = response.class;
					$scope.success 		 = response.success;
					if(response.success)
					{
						$rootScope.hotels.push(hotelDataObj);
						$mdDialog.cancel();
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);

					}				

				});

			} else {
				$scope.validateclass = 'Autherror';
				$scope.message = ['Please accept terms and conditions.'];
			}	
			
		};
		
	}
]);



'use strict';

app.factory('dashboardFactory', ['$http', function ($http) {
	return{		
		
		hotelCRUD: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},			
	};
}]);
"use strict";

app.controller('checklistCtlr', ['$scope','$rootScope','Upload','$timeout','localStorageService',
	function($scope,$rootScope,Upload,$timeout,localStorageService) {


		/*
		*
		* Set default jot type
		*
		*/		
		$rootScope.jot_type = 'issue';

		/*
		* Default checklist
		*/

		$scope.checkList = window.__API_PATH.DEFAULT_CHECKLIST;


		/**********************************************************
		* Store value of checklist on change to add item in checklist
		**********************************************************/


		var selectedCheckBox = [];	
		$scope.lookup = function (selectedItem, list) {
			if( selectedItem ) {
				selectedCheckBox.push(list.name);
			} else {
				selectedCheckBox = selectedCheckBox.filter(function( obj ) {
				    return obj != list.name;
				});
			}


		};

		/***********************************************************************
		* Store value of checklist on change of checklist checkbox to save items
		***********************************************************************/
		var CheckBoxValue =  [];	
		$scope.storeValue = function(checkListType,currentValue,isCheck,parantValue){


			/**************************
			* Parent item List 
			*************************/

			if(checkListType == 'parentlist')				
			{
				var  parentItem = {
								name   :currentValue,
								sublist:[]
							};

				if(isCheck)
				{
					/*********** Push value on check  *********/

					CheckBoxValue.push(parentItem);		
				} else {

					/*********** Remove value on uncheck  *********/

					CheckBoxValue = CheckBoxValue.filter(function( obj ) {			    
				    	return obj.name != currentValue;
				    });
				}							
				
			}

			/**************************
			* Sub-item List 
			*************************/

			if(checkListType == 'sublist')
			{

				
				var storedSubList =  '';
				angular.forEach(CheckBoxValue,function(value,index){
					if( value.name == parantValue ) {
						storedSubList = value.sublist;
					  	//value.sublist.push(subItem);
					  	if(isCheck)
						{
							/*********** Push subitem on check  *********/

							var subItem = {name:currentValue};
							storedSubList.push(subItem);
						} else {	

							/*********** Remove subitem on uncheck  *********/					
							value.sublist = storedSubList.filter(function( obj ) {	
						    	return obj.name != currentValue;
						    });
						}
					}	               
		        });

			}

			$rootScope.checklist = CheckBoxValue;			

		};


		/*****************************************
		* Add item in checklist
		*****************************************/
		

		$scope.addchecklist = function(itemType){
				console.log($scope.checklistdate);
				$scope.itemError = '';
				var storedCheckbox = $scope.checkList;
				var ItemToAdd = '';
				if($scope.listItemName)
				{
					ItemToAdd = $scope.listItemName;
					ItemToAdd 	  = ItemToAdd.replace(/(^[\s]+|[\s]+$)/g, '');
				} else {
					$scope.itemError = 'Please fill the blank teatarea.';
					return false;
				}
			
				var  parentItem = {
								name   :ItemToAdd,
								sublist:[]
							};
				var  subItem = {name:ItemToAdd};	


				if(itemType == 'parentlist')
				{
					if(storedCheckbox.length == 0)
					{
						$scope.checkList.push(parentItem);

					} else {
						var valueFind = false;
						for (var key in storedCheckbox) {
						  if (storedCheckbox.hasOwnProperty(key)) {
						  	if(storedCheckbox[key].name == ItemToAdd)
						  	{
						  		valueFind = true;
						  	}
						  }
						}

						if(!valueFind)
						{
							storedCheckbox.push(parentItem);
						} else {
							$scope.itemError = 'Item already exists.';
							
						}
					}
				}

				if(itemType == 'sublist')
				{

					if( selectedCheckBox.length >0){
						angular.forEach($scope.checkList,function(value,index){	
							 selectedCheckBox.find( function( obj ) { 
								if( obj == value.name ) {
									var storedSublist = value.sublist;
									var valueFind = false;
									for (var key in storedSublist) {
									  if (storedSublist.hasOwnProperty(key)) {
									  	if(storedSublist[key].name == ItemToAdd)
									  	{
									  		valueFind = true;
									  	}
									  }
									}

									if(!valueFind)
									{
										storedSublist.push(subItem);
										
									} else {
										$scope.itemError = 'Subitem already exists for "'+value.name+'".';
										
									}
								  	
								}						  
							});                
			            });
					} else {
						$scope.itemError = 'Please select item.';						
					}

				}
			storedCheckbox = selectedCheckBox;
		};

		$scope.showTextArea = function(btnType){
			$scope.showArea = true;
			$scope.itemType = btnType;

		};
		
	}
]);

"use strict";

app.controller('departmentCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
		
	}
]);

"use strict";

app.controller('imageCtlr', ['$scope','$rootScope','Upload','$timeout','localStorageService',
	function($scope,$rootScope,Upload,$timeout,localStorageService) {
	

		/*****************************************
		* Jot image upload
		*****************************************/

		$rootScope.issueImages = '';
		$scope.uploadFiles = function(files, errFiles) {
			var hotel = localStorageService.get('hotel');
			$scope.files = files;
	        if (files && files.length) {
	            Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                data: {	                    
	                    hotel_id : hotel.hotel_id,
	                    files    : files
	                }
	            }).then(function (response) {
	                $timeout(function () {
	                   var result = response.data.result;
	                   var uploadedImagesName = []; 
	                    angular.forEach(result, function(data) {				
				            if(data.status){
				            	uploadedImagesName.push(data.filename);
				            }
				        });
				        $rootScope.issueImages = uploadedImagesName;
	                });
	            }, function (response) {
	                if (response.status > 0) {
	                    $scope.errorMsg = response.status + ': ' + response.data;
	                }
	            }, function (evt) {
	                $scope.progress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };

		
	}
]);

"use strict";

app.controller('issueCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Set default jot type
		*
		*/		
		/*$scope.jot_type = 'issue';*/		
	}
]);

"use strict";

app.controller('jotController', ['$scope','$location','jotFactory','$rootScope','$mdDialog','localStorageService',
	function($scope,$location,jotFactory,$rootScope,$mdDialog,localStorageService) {


		/**************************************
		* Redirect if hotel not selected
		**************************************/
		
		var hotel = localStorageService.get('hotel');

		if(!hotel || hotel == ""){
			$location.path('/dashboard');
		}

		/**************************************
		* Get jot list
		**************************************/
				
		var request= {
			url:window.__API_PATH.GET_JOT,
			method:"GET",
			params:{hotel_id :hotel.hotel_id}
		};	

		jotFactory.jotCRUD(request)
		.then(function(response){
			$rootScope.jots = response.result;
		});

		
	}
]);


"use strict";

app.controller('jotFormCtrl', ['$scope','$location','localStorageService','jotFactory','$rootScope','$mdDialog','toastService','$filter',
	function($scope,$location, localStorageService,jotFactory,$rootScope,$mdDialog,toastService,$filter) {	


		/*
		* Function
		*
		* Cteate jot.
		*
		*/
		$scope.createJot = function(){
			/*console.log($rootScope.jot_type);			
			return false;*/
			$scope.message = ' ';

			var hotel = localStorageService.get('hotel');


			var jotDataArray = {
					jot_title          : $scope.jot_title,
					priority           : $scope.jot_priority,
					hotel_id		   : hotel.hotel_id,
					jot_type           : $rootScope.jot_type,
					due_date   		   : new Date($scope.outsource.due_date).getTime(),
					department		   : $scope.outsource.department,
					assigned_to 	   : $scope.outsource.assigned_to,
					checklist		   : $rootScope.checklist,	
					image		   	   : $rootScope.issueImages	
			};

			var request={
				url:window.__API_PATH.CREATE_JOT,
				method:"POST",
				data:jotDataArray
			};
			
			jotFactory.jotCRUD(request).then(function(response){
				
				if(response.status == 1)
				{

					$mdDialog.cancel();
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
					

					/******************************************************
					* Jot object iteration
					****************************************************/

					var keyFoundInObj = false;

					angular.forEach($rootScope.jots,function(value,index){
						

						/******************************************************
						* Check jot type(message,issue etc.) is new or already in object 
						****************************************************/
		                if(value._id == $rootScope.jot_type)
		                {                	
		                	value.jot_data.push(jotDataArray);
		                	keyFoundInObj = true;
		                }		                
		            });
					

		            /******************************************************
					* Push new jot data if  jot type(message,issue etc.) is not in jot object
					****************************************************/
					
					if(!keyFoundInObj)
					{
						var jotDataArrayInObj = [jotDataArray];
			            var newcreatedJot = {
				                				"_id"	  :$rootScope.jot_type,
				                				"jot_data": jotDataArrayInObj
						                	};
			            		                	
			            $rootScope.jots.push(newcreatedJot);
		            
			        }

				}
			});

		};

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
		* Function
		*
		* Select tab
		*
		*/
		$scope.jotTab        = window.__API_PATH.JOT_TAB;
		$scope.currentNavItem=	$scope.jotTab[0].id;

	

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		$scope.jot_priority 	= $scope.jotPriorityList[0].name;

		$scope.selectPriority = function(event,value){
			 $scope.jot_priority = value;
		};

	}
]).directive('jotTemplate', [function(){
	return {
		scope:{jotTemplate:'='},
		template:'<span ng-include="template"></span>',
		// controller: 'jotTabsCtlr',
		link: function(scope,ele){			
			scope.$watch('jotTemplate', function(templateName){
				scope.template='/modules/jot/views/'+templateName+'.html';
				console.log('templateName');	
				console.log(templateName);
				scope.jot_type	 = templateName;			
			});

		}
	};
}]);

"use strict";

app.controller('jotQuickCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
			
			/*
			*
			* Set jot type list
			*
			*/
			$rootScope.jot_type = 'quick';
			$scope.jotList   = window.__API_PATH.JOT_TYPES;

			$scope.jotSelect = function(event,value){
				$scope.jot_type = value;	
				$rootScope.jot_type = value;
			};
	}
]);

"use strict";

app.controller('staffCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

	}
]);

"use strict";

app.controller('taskCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
		/*
		*
		* Set default jot type
		*
		*/		
		/*$scope.jot_type = 'task';*/		
	}
]);

"use strict";

app.controller('taskDatepickerCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		* Show/Hide datepicker according to type
		* Clear previous value before datepicker display
		*/
		
		$scope.taskTime = function(taskType){
			$scope.oneTime   = false;
			$scope.recurring = false;
			if(taskType == 'oneTime')
			{
				$scope.onetime = '';
				$scope.oneTime = true;
			}
			if(taskType == 'recurring')
			{
				$scope.start_recurring = '';
				$scope.end_recurring   = '';
				$scope.recurring = true;
			}
		};

		
				
	}
]);

'use strict';

app.factory('jotFactory', ['$http', function ($http) {
	return{		
		
		jotCRUD: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},					
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

			var request={
					url:window.__API_PATH.LOGIN,
					method:"POST",
					data:dataObj
				};

			loginFactory.login(request).then(function(response){	

				if(response.errors){
					//toastService.alert({message: response.errors.message, class: 'error'});
				} else {
					if(response.status == 1)
					{
						localStorageService.set('token', response.result.token);
						localStorageService.set('user', response.result.user);
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
		
		login: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},		
	};
}]);
"use strict";

app.controller('headerController', ['$scope','$location','localStorageService','headerFactory','$rootScope','$mdDialog','$route',
	function($scope,$location,localStorageService,headerFactory,$rootScope,$mdDialog,$route) {	


		/*
		* Factory method
		*
		* Display hotels
		*
		*/
		
		var data = {
				"user_id":localStorageService.get('user')._id
			};

			
		var request={
				url:window.__API_PATH.GET_HOTELS,
				method:"GET",
				params:data
			};
		
		

		headerFactory.get(request).then(function(response){
			if(response.error){
			} else {				
				$rootScope.hotels = response.result;				
			}
		});


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		$scope.hotel = localStorageService.get('hotel');
		$scope.changeJotView = function(hotelID,hotelName){
			var hotelData  = {
				'hotel_id':hotelID,
				'hotel_name':hotelName
			};
			localStorageService.set('hotel', hotelData);
			$scope.hotel = hotelData;
			$route.reload();
		};




		/**************************************
		* Open jot popup
		**************************************/

		$scope.quickTaskPopup = function(){
			$mdDialog.show({
				controller: 'jotFormCtrl',
				templateUrl: '/modules/jot/views/jot-form.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
			}).then(function(answer) {}, function() {});

		};


	}
]);

"use strict";

app.directive('header',['$rootScope',function($rootScope){
	return{
		templateUrl:'/modules/partials/header.html',
		link: function(scope,ele){}
	
	};
}]);



app.factory('headerFactory', ['$http', function ($http) {
	return{	
		
		get: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},			
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
					name     : $scope.name,
					email    : $scope.email,
					password : $scope.password
			};

			var request={
					url:window.__API_PATH.REGISTER,
					method:"POST",
					data:dataObj
				};

			registerFactory.register(request).then(function(response){
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
	
		register: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},		
	};
}]);