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

window.__API_PATH  					=   {};

__API_PATH.jotList 					= '/api/get_jot';
__API_PATH.LOGIN   					= '/api/login';
__API_PATH.REGISTER  				= '/api/register';
__API_PATH.GET_HOTELS  				= '/api/get_hotels';
__API_PATH.ADD_HOTEL  				= '/api/add_hotel';
__API_PATH.CREATE_JOT 				= '/api/create_jot';
__API_PATH.GET_JOT      	 		= '/api/get_jot';
__API_PATH.DELETE_HOTEL 			= '/api/delete_hotel';
__API_PATH.STAFF_SUGGESTION 		= '/api/get_members';
__API_PATH.UPLOAD_FILE  			= '/api/uploadfile';
__API_PATH.UPDATE_JOT  				= '/api/update_jot';
__API_PATH.DELETE_JOT  				= '/api/delete_jot';
__API_PATH.GET_DEPARTMENTS  		= '/api/get_departments';
__API_PATH.FORGET_PASSWORD			= '/api/forgot_password';
__API_PATH.PASSWORD_RESET			= '/api/resetPassword';


__API_PATH.JOT_TYPES = {
							quick:{label:"Quick Jot",id:'quick',src:'assets/images/logo_pic.png',icontype:'image'},
							issue:{label:"Issue",id:'issue',src:'warning',icontype:'icon'},
							task:{label:"task",id:'task',src:'format_list_bulleted',icontype:'icon'},
							note:{label:"Note",id:'note',src:'insert_drive_file',icontype:'icon'},
							lost_found:{label:"Lost & Found",id:'lost_found',src:'local_drink',icontype:'icon'},
							vending_machine:{label:"Vending Machine",id:'vending_machine',src:'vignette',icontype:'icon'},
							meeting_room:{label:"Meeting Room",id:'meeting_room',src:'group',icontype:'icon'}
						};


/*__API_PATH.JOT_TYPES 	   = [{name:'issue',class:'',icon:'warning'},{name:'message',class:'',icon:'email'},{name:'task',class:'',icon:'format_list_bulleted'},{name:'lost & found',class:'',icon:'call_missed'},{name:'meeting room',class:'',icon:'room'},{name:'vending',class:'',icon:'shopping_cart'}];*/ 

__API_PATH.JOT_PRIORITY   = [{name:'urgent',class:'urgent orange'},{name:'high',class:'high red'},{name:'medium',class:'medium yellow'},{name:'low',class:'low green'}]; 


/*__API_PATH.JOT_TAB 	   = [
{name:'Quick Jot',id:'quick',src:'assets/images/logo_pic.png',icontype:'image'},
{name:'Issue',id:'issue',src:'warning',icontype:'icon'},
{name:'Task',id:'task',src:'format_list_bulleted',icontype:'icon'},
{name:'Message',id:'message',src:'insert_drive_file',icontype:'icon'},
{name:'lost & found',id:'lost&found',src:'local_drink',icontype:'icon'},
{name:'Vending Machine',id:'vending_machine',src:'vignette',icontype:'icon'},
{name:'Meeting Room',id:'meeting_room',src:'group',icontype:'icon'}]; */

__API_PATH.DEFAULT_CHECKLIST 	=  [
										{
											name   :"Prepare Room 7 AM @Jon",
											sublist:[{name:"tea1"},{name:"tea2"}]
										},
										{
											name   :"Prepare Room 7 AM @Jon2",
											sublist:[{name:"tea3"},{name:"tea4"}]
										}			
									];




__API_PATH.RECURRING_PATTERN = [
									{
										label 	     :"Daily",
										id    	     :"daily",	
										description  : "Daily Recurring"					
									},
									{
										label        :"Weekly",
										id   		 :"weekly",
										description	 : "Recurring every week" 
									},
									{
										label        :"Monthly",
										id           :"monthly",
										description  : "Recurring every month"
									},
									{
										label        :"Yearly",
										id           :"yearly",
										description  : "Recurring every year"
									}

								]; 


__API_PATH.MONTH = [
								{
									label 	     : "January",
									value    	 : "1"			
								},
								{
									label 	     : "February",
									value    	 : "2"			
								},
								{
									label 	     : "March",
									value    	 : "3"			
								},
								{
									label 	     : "April",
									value    	 : "4"			
								},
								{
									label 	     : "May",
									value    	 : "5"			
								},
								{
									label 	     : "June",
									value    	 : "6"			
								},
								{
									label 	     : "July",
									value    	 : "7"			
								},
								{
									label 	     : "August",
									value    	 : "8"			
								},
								{
									label 	     : "September",
									value    	 : "9"			
								},
								{
									label 	     : "October",
									value    	 : "10"			
								},
								{
									label 	     : "Novemmber",
									value    	 : "11"			
								},
								{
									label 	     : "December",
									value    	 : "12"			
								},

							];


__API_PATH.WEEK_NAME = [
							
							{
								label :"Monday",
								value :'monday',
							},
							{
								label  :"Tuesday",
								value  :'tuesday'
							},
							{
								label  :"Wednesday",
								value  :'wednesday'
							},	
							{
								label  :"Thursday",
								value  :'thursday'
							},
							{
								label  :"Friday",
								value  :'friday'
							},
							{
								label  :"Saturday",
								value  :'saturday'
							},
							{
								label :"Sunday",
								value :'sunday',						
							},		
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
                
                if(nextRoute.$$route){
                    if(nextRoute.$$route.access){
                        $rootScope.isAuth= nextRoute.$$route.access;
                   } 
                }
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


        /*$rootScope.$on("$routeChangeSuccess", 
            function (event, nextRoute, currentRoute) {
            
           if(nextRoute.$$route){
                if(nextRoute.$$route.access){
                    $rootScope.isAuth= nextRoute.$$route.access;                    
               } 
           }
            
        });*/
    	
    	
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
     .when("/resetpassword/:token", {
        templateUrl : "/modules/login/views/resetpassword.html",
        controller  :  "resetPasswordCtlr",
        access: {
            requiredLogin: false,
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
            headerType:'hotel_header',
            sidebar: 'yes'
        }
    })

   
    .when("/dashboard/jot", {
        templateUrl : "/modules/jot/views/dashboard-jot.html",
        controller  :  "jotController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
   .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);     
}]);

'use strict';

app.factory('cursorPosition', ['$http', function ($http) {
	return{		
		
		GetCaretPosition: function(ctrl){
			var CaretPos = 0; 
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }            
            else if (ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
		},	

		ReturnWord: function(text, caretPos){
			var index = text.indexOf(caretPos);
            var preText = text.substring(0, caretPos);
            if (preText.indexOf(" ") > 0) {
                var words = preText.split(" ");
                return words[words.length - 1]; //return last word
            }
            else {
                return preText;
            }			
		},

	};
}]);
'use strict';

app.factory('replaceOccurence', ['$http', function ($http) {
	return{	
		replaceAll: function(string, search, replacement){
			
            return string.replace(new RegExp(search, 'g'), replacement);
		}
	};
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
					url:window.__API_PATH.DELETE_HOTEL,
					method:"DELETE",
					params:data
				};
			
			dashboardFactory.hotelCRUD(request).then(function(response){
				if(response.error){
				} else {				
					if(response.success)
					{
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
					}
				}
			});		
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
		$scope.hotelResult = {message:'',class:'',status:''};
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
					$scope.hotelResult 	 = response;
					
					if(response.status == 1)
					{
						$rootScope.hotels.push(response.result);
						$mdDialog.cancel();
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
					}				

				});

			} else {
				$scope.hotelResult.class = 'Autherror';
				$scope.hotelResult.message = 'Please accept terms and conditions.';
				$scope.hotelResult.status = 1;
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

app.controller('departmentCtlr', ['$scope','$rootScope','localStorageService','jotFactory',
	function($scope,$rootScope,localStorageService,jotFactory) {
		

		/*****************************************
		* Get department List
		******************************************/

		var hotel = localStorageService.get('hotel');
		var request= {
			url:window.__API_PATH.GET_DEPARTMENTS,
			method:"GET",
			params:{hotel_id: hotel.hotel_id}
		};
		jotFactory.jotCRUD(request)
		.then(function(response){
			$scope.departmentSuggetionList = response.result;	
			
		});

	     
	     /*after click on suggestion list*/                                                            
	    $scope.callback = function(){	       
	        $scope.deparmentfocus = true;
	         
	    };

	}
]);
"use strict";

app.controller('dueDataCtlr', ['$scope','$rootScope','$mdDialog',
	function($scope,$rootScope) {

		/*
		*
		* Default Date
		*
		*/
		if(!$rootScope.due_date)
		{
			$rootScope.due_date = new Date(new Date().getTime());
		}

	}
]);

"use strict";

app.controller('editJotCtlr', ['$scope','jotFactory','$rootScope','$mdDialog','jotData','$route','toastService',
	function($scope,jotFactory,$rootScope,$mdDialog,jotData,$route,toastService) {
		
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
				params:$scope.edit_jot.jot_data
			};

			jotFactory.jotCRUD(request).then(function(response){				
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
			
			jotFactory.jotCRUD(request).then(function(response){				
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


"use strict";

app.controller('iconCtlr', ['$scope','$rootScope','Upload','$timeout','localStorageService',
	function($scope,$rootScope,Upload,$timeout,localStorageService) {


		/*****************************************
		* Jot image upload
		*****************************************/

		

		$rootScope.issueImages = '';
		$scope.uploadFiles = function(files, errFiles) {
			var hotel = localStorageService.get('hotel');
			$rootScope.files = files;			
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
	                $rootScope.progress = 
	                    Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
	            });
	        }

	    };

	    /*****************************************
		* Open staff list
		*****************************************/

	    $scope.openMemberList	=	function(userName){	    	
	    	if($rootScope.clickopen)
	    	{
	    		$rootScope.clickopen = false;	    		
	    	} else {
	    		$rootScope.clickopen = true;
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
		$rootScope.jot_type = 'issue';

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
		$rootScope.task_iteration = [];
		$rootScope.task_iteration.data = [];
		$rootScope.task_iteration.type = [];
		$rootScope.note_iteration = [];
		$rootScope.note_iteration.data = [];
		$rootScope.note_iteration.type = [];
		$rootScope.issue_iteration = [];
		$rootScope.issue_iteration.data = [];
		$rootScope.issue_iteration.type = [];
		$rootScope.others_iteration = [];
		$rootScope.others_iteration.data = [];
		$rootScope.others_iteration.type = [];	


		var request= {
			url:window.__API_PATH.GET_JOT,
			method:"GET",
			params:{hotel_id :hotel.hotel_id}
		};	

		jotFactory.jotCRUD(request)
		.then(function(response){
			//$rootScope.jots = response.result;

			angular.forEach(response.result,function(value,index){
				
				if(value._id == 'task')
				{
					$rootScope.task_iteration.data  = value.jot_data;
					$rootScope.task_iteration.type  = value._id;
				} else if(value._id == 'note') {
					$rootScope.note_iteration.data = value.jot_data;
					$rootScope.note_iteration.type  = value._id;
				} else if(value._id == 'issue') {
					$rootScope.issue_iteration.data  = value.jot_data;
					$rootScope.issue_iteration.type  = value._id;
				} else {
					$rootScope.others_iteration.data  = value.jot_data;
					$rootScope.others_iteration.type  = value._id;
				}  
		
			});
		});


		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotEditPopup = function(jotData,jotType){
		
			var data={jot_data:jotData,jot_type:jotType};
			$mdDialog.show({
				controller: 'editJotCtlr',
				templateUrl: '/modules/jot/views/edit_jot.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				locals: {jotData:data}
			})
			.then(function(answer) {
			
			}, function() {
			
			});

		};

				
	}
]);


"use strict";

app.controller('jotFormCtrl', ['$scope','localStorageService','jotFactory','$rootScope','$mdDialog','toastService','ActivateTab',
	function($scope,localStorageService,jotFactory,$rootScope,$mdDialog,toastService,ActivateTab) {	

		$scope.callbackTitleStaff = function(){
	            $scope.titleFocus = true;	
	    };

		/*
		* Blank field before open form
		*/

		$rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.assigned_to = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_title = $rootScope.files  =  '';

		 $rootScope.progress = -1;
		/*
		* Activate tab
		*/
		$scope.currentNavItem       = ActivateTab;
		

		/******************************************************************
		||	Create jot 
		******************************************************************/

		$scope.createJot = function(){
			/*console.log($rootScope);
			console.log($rootScope.selectedPattern);
			return false;*/
			

			/**
			||	Start task Jot Data json 
			**/

			var task = '';
			if($rootScope.taskTime == 'onetime')
			{
				 task = {
					type: 'onetime',
					date: new Date($rootScope.onetime_date).getTime()
				};
			} 

			if($rootScope.taskTime == 'recurring'){

				var pattern = '';
				if($rootScope.selectedPattern == 'weekly')
				{
					 pattern = {
									type : $rootScope.selectedPattern,
									days : $rootScope.selectedDays,
									
								 };
				} 


				if($rootScope.selectedPattern == 'yearly')
				{
					 pattern = {
									type : $rootScope.selectedPattern,
									month: $rootScope.yealy_month,
									date : $rootScope.yearly_day			
								 };
				} 


				if($rootScope.selectedPattern == 'monthly')
				{
					 pattern = {
									type : $rootScope.selectedPattern,
									date : $rootScope.monthly_recurring_date
								 };
				}

				if($rootScope.selectedPattern == 'daily')
				{
					pattern = {
									type : $rootScope.selectedPattern,
									days : $rootScope.selectedDays
								 };
				}

				 task = {
					type       : 'recurring',
					start_date : new Date($rootScope.start_recurring_date).getTime(),
					end_date   : new Date($rootScope.end_recurring_date).getTime(),
					pattern: pattern
				};
			}

			
			/**
			||	End task Jot Data json 
			**/

			$scope.message = ' ';

			var hotel = localStorageService.get('hotel');
			var jotDataArray = {
					jot_title          : $rootScope.jot_title,
					priority           : $rootScope.priority,
					hotel_id		   : hotel.hotel_id,
					jot_type           : $rootScope.jot_type,
					due_date   		   : new Date($rootScope.due_date).getTime(),
					department		   : $rootScope.department,
					assigned_to 	   : $rootScope.assigned_to,
					checklist		   : $rootScope.checklist,	
					image		   	   : $rootScope.issueImages,
					task_type          : task,
					status			   : 'open'
			};

			var request={
				url:window.__API_PATH.CREATE_JOT,
				method:"POST",
				data:jotDataArray
			};
			
			jotFactory.jotCRUD(request).then(function(response){
				var result = response.result;
				if(response.status == 1)
				{
					if($rootScope.jot_type == 'task')
					{
						$rootScope.task_iteration.data.push(result);
					} else if($rootScope.jot_type == 'note') {
						$rootScope.note_iteration.data.push(result);
					} else if($rootScope.jot_type == 'issue') {
						$rootScope.issue_iteration.data.push(result);
					} else {
						$rootScope.others_iteration.data.push(result);
					}					

					$mdDialog.cancel();
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
					

					/******************************************************
					* Jot object iteration
					****************************************************/

					/*var keyFoundInObj = false;

					angular.forEach($rootScope.jots,function(value,index){*/
						

						/******************************************************
						* Check jot type(message,issue etc.) is new or already in object 
						****************************************************/
		               /* if(value._id == $rootScope.jot_type)
		                {                	
		                	value.jot_data.push(jotDataArray);
		                	keyFoundInObj = true;
		                }		                
		            });*/
					

		            /******************************************************
					* Push new jot data if  jot type(message,issue etc.) is not in jot object
					****************************************************/
					
					/*if(!keyFoundInObj)
					{
						var jotDataArrayInObj = [jotDataArray];
			            var newcreatedJot = {
				                				"_id"	  :$rootScope.jot_type,
				                				"jot_data": jotDataArrayInObj
						                	};
			            		                	
			            $rootScope.jots.push(newcreatedJot);
		            
			        }*/

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
		link: function(scope,ele){			
			scope.$watch('jotTemplate', function(templateName){
				scope.template='/modules/jot/views/'+templateName+'.html';
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

			$scope.jotSelect = function(event,value){
				$rootScope.jot_type = value;
			};
	}
]);

"use strict";

app.controller('noteCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type = 'note';	
	}
]);
"use strict";

app.controller('priorityCtlr', ['$scope','$rootScope','$mdDialog',
	function($scope,$rootScope) {

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		if(!$rootScope.priority)
		{
			$rootScope.priority = window.__API_PATH.JOT_PRIORITY[0].name;
		}		

		$scope.selectPriority = function(event,value){
			 $rootScope.priority 	= value;
		};

	}
]);

"use strict";

app.controller('staffCtlr', ['$scope','$rootScope','localStorageService','jotFactory',
	function($scope,$rootScope,localStorageService,jotFactory) {
		
		/*****************************************
		* Get Staff List
		******************************************/

		var hotel = localStorageService.get('hotel');
		var request= {
					url:window.__API_PATH.STAFF_SUGGESTION,
					method:"GET",
					params:{hotel_id: hotel.hotel_id}
				};
		jotFactory.jotCRUD(request)
		.then(function(response){
			//$scope.staffList = response.result;	
			$rootScope.staffList = response.result;			
		});

	     
	     /*after click on suggestion list*/                                                            
	    $scope.callbackStaff = function(){

	            $scope.staffFocus = true;
        
	    };

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
		$rootScope.jot_type = 'task';		
	
	}
]);

"use strict";

app.controller('taskDatepickerCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	


		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Make task pattern
		*/
		$scope.getMonth = window.__API_PATH.MONTH;
		$scope.patterns = window.__API_PATH.RECURRING_PATTERN;
		$scope.weeks    = window.__API_PATH.WEEK_NAME;
		$rootScope.selectedDays = [];

		 
		/*
		* Show/Hide pattern
		*/

		$scope.patternShow = function(pattern){
			$rootScope.selectedPattern = pattern.id;		
			$scope.selectedPatternDesc = pattern.description;	
	        $rootScope.selectedDays = [];

	        if(pattern.id == 'daily' || pattern.id == 'weekly')
			{	
				/***** Auto check all week value *****/	
				
				angular.forEach($scope.weeks, function (item) {
					if(pattern.id == 'daily')
					{
						item.Selected = true;	
						$rootScope.selectedDays.push(item.value);
					} else {
						item.Selected = false;
						$rootScope.selectedDays = [];
					}		            
		            
		        });				
				
			}
			
			

		};		

		/*
		* Store pattern on temp variable
		*/

		  
		  $scope.toggleWeek = function(selected,weekValue) {
			  var index = $rootScope.selectedDays.indexOf(weekValue);		 
			  if (index > -1) 
			  {
				$rootScope.selectedDays.splice(index, 1);
			  }
			  else
			  {
			    $rootScope.selectedDays.push(weekValue);
			  }
			  
		  };
				
	}
]);

"use strict";

app.directive('departmentypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            departmentypeahead: '=',
            departmenttypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (departmentypeahead | filterdepartment:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}}</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {
                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('#');
              replaceWord       = '#'+replaceWord[1];

        			var selectedValue = "#"+item.department_name+" ";

    
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);  

        			scope.ngModel = replacedValue;
        			scope.selected = item;

              if(scope.departmenttypeaheadCallback) {
                    scope.departmenttypeaheadCallback(item);
              }
              elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				        if(scope.selected && scope.selected.department_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusDepartment', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.deparmentfocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.deparmentfocus = false;
                     }
              });
          }
      };
    });

"use strict";

app.directive('iconstafflistsuggestion', ['$compile', '$timeout','$rootScope', function($compile, $timeout,$rootScope) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            iconstafflistsuggestion: '=',
            iconstaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {

              var template = '<ul class="" style="display:block;"><li ng-repeat="item in filitered = (iconstafflistsuggestion | filter:$root.filtermember) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {

                  if($event.keyCode == 38 && scope.active > 0) { 
                      scope.active--;
                      scope.$digest();
                  } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                      scope.active++;
                      scope.$digest();
                  } else if($event.keyCode == 13) {
                      scope.click(scope.filitered[scope.active]);
                  }
              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                
                var username  = item.user_name;
                    username  = username.trim();                
                var appendValue = "@"+username+" ";
                $rootScope.$broadcast('addUserNameAtMousePosition',appendValue);
                $rootScope.clickopen = false;
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
                
                  if(scope.selected && scope.selected.user_name == input) {
                        return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));                       
        }
    };
}]);
"use strict";

app.directive('textareastaffsuggestion', ['$compile', '$timeout','$rootScope','replaceOccurence', function($compile, $timeout,$rootScope,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            textareastaffsuggestion: '=',
            textareastaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {

              var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (textareastaffsuggestion | filterstaffJotTitle:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {

                  if($event.keyCode == 38 && scope.active > 0) { 
                      scope.active--;
                      scope.$digest();
                  } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                      scope.active++;
                      scope.$digest();
                  } else if($event.keyCode == 13) {

                      scope.$apply(function() {
                          scope.click(scope.filitered[scope.active]);
                      });
                  }
              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                
              	var replaceString     = scope.ngModel;
          			var replaceWord       = scope.matchWord;
                replaceWord           = replaceWord.split('@');
                replaceWord           = '@'+replaceWord[1];
          			var selectedValue     = "@"+item.user_name+" ";

          			var replacedValue     = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);
                
          				scope.ngModel = replacedValue;
          				scope.selected = item;

                  if(scope.textareastaffsuggestionCallback) {
                      scope.textareastaffsuggestionCallback(item);
                  }
                  elem[0].blur();
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
              	
      				    if(scope.selected && scope.selected.user_name == input) {
                      	return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));

            /*********************************************
            * Add user name on click user suggestion list
            **********************************************/

            $rootScope.$on('addUserNameAtMousePosition', function(e, val) {
                var domElement = elem[0];

                if (document.selection) {
                  domElement.focus();
                  var sel = document.selection.createRange();
                  sel.text = val;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                  
                } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                  var startPos = domElement.selectionStart;
                  var endPos = domElement.selectionEnd;
                  //var scrollTop = domElement.scrollTop;
                  domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);
                  domElement.selectionStart = startPos + val.length;
                  domElement.selectionEnd = startPos + val.length;
                  //domElement.scrollTop = scrollTop;

                  $timeout(function() {                        
                      domElement.focus();
                  });
                } else {
                  
                  domElement.value += val;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                }

              }); 

            
        }
    };
}]).directive('focusTitle', function($timeout, $parse) {
      return {          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
              		
                     if(value.titleFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.titleFocus = false;
                     }
              });
          }
      };
    });
"use strict";

app.directive('stafftypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            stafftypeahead: '=',
            stafftypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (stafftypeahead | filterstaff:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {

                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('@');
              replaceWord       = '@'+replaceWord[1];
        			var selectedValue = "@"+item.user_name+" ";
              
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);             
              
      				scope.ngModel = replacedValue;
      				scope.selected = item;

                if(scope.stafftypeaheadCallback) {
                    scope.stafftypeaheadCallback(item);
                }
                elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				if(scope.selected && scope.selected.user_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusStaff', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.staffFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.staffFocus = false;
                     }
              });
          }
      };
    });

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

app.filter("filterdepartment", function(cursorPosition) {


         return function(input,scope) {
         	
         	var text     = document.getElementById("department");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\#[a-z]+/gm);
			var countAtRate    = word.match(/\#/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var removeHash = word.split("#");
				removeHash = removeHash[1];
				scope.matchWord = word;		

				var searchedString 	= [];
				angular.forEach(input,function(value,key){
					var listedDepartment = value.department_name;
					listedDepartment     = listedDepartment.toLowerCase();
					removeHash           = removeHash.toLowerCase();
					
					if(listedDepartment.startsWith(removeHash))
					{						
						searchedString.push(value);
					}
				});				
				return searchedString;
			}
			
         };
});


app.filter("filterstaff", function(cursorPosition) {

         return function(input,scope) {

         	var text     = document.getElementById("staff");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\@[a-z]+/gm);
			var countAtRate    = word.match(/\@/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var removeAtRate = word.split("@");
				
				removeAtRate = removeAtRate[1];
				scope.matchWord = word;		

				var searchedString 	= [];
				angular.forEach(input,function(value,key){
					var listedstaff = value.user_name;
					listedstaff     = listedstaff.toLowerCase();
					removeAtRate    = removeAtRate.toLowerCase();
					
					if(listedstaff.startsWith(removeAtRate))
					{						
						searchedString.push(value);
					}
				});				
				return searchedString;
			}
			
         };
});



app.filter("filterstaffJotTitle", function(cursorPosition) {

         return function(input,scope) {
         		
	         	var text     = document.getElementById("jot_title");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\@[a-z]+/gm);
				var countAtRate    = word.match(/\@/gm);
				
				if(detectUserName && countAtRate.length == 1)
				{
					var removeAtRate = word.split("@");
					
					removeAtRate = removeAtRate[1];
					scope.matchWord = word;		

					var searchedString 	= [];
					angular.forEach(input,function(value,key){
						var listedstaff = value.user_name;
						listedstaff     = listedstaff.toLowerCase();
						removeAtRate    = removeAtRate.toLowerCase();
						
						if(listedstaff.startsWith(removeAtRate))
						{						
							searchedString.push(value);
						}
					});				
					return searchedString;
				}
			
         };
});
"use strict";

/**************************************
* Login controller
**************************************/


app.controller('loginController', ['$scope','$http','$location','$timeout','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog',
	function($scope,$http,$location,$timeout, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog) {	


		/*********************************************
		* Submit login form
		***********************************************/
		
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
				$scope.loginresult = response;
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
				}
				
			});				
	               
		};

		/*********************************************
		* Forget password
		***********************************************/

		$scope.forgetPassword = function(){

			var data = {email:$scope.forget_email};
			var request={
					url:window.__API_PATH.FORGET_PASSWORD,
					method:"POST",
					data:data
				};

			loginFactory.login(request).then(function(response){
					$scope.forgetresult = response;
			});

		};

		/*********************************************
		* Redirect to signup form
		***********************************************/

		$scope.openSignupForm = function (obj) {
	           $location.path('/register');    
		};
	}
]);

"use strict";

/**************************************
* Login controller
http://localhost:3000/resetpassword/0c02baa57acfbb5a51cb0a04c587b8eec2099e3d
**************************************/


app.controller('resetPasswordCtlr', ['$scope','loginFactory','$rootScope','$routeParams','$location',
	function($scope,loginFactory,$rootScope,$routeParams,$location) {	
		console.log($routeParams);
		var token = $routeParams.token;
		
		

		/*********************************************
		* Forget password
		***********************************************/
		$scope.resetResult = {message:"",class:""};
		
		$scope.resetPass = function(){
			if($scope.forget_password == $scope.forget_confirm_password)
			{
				var data = {password:$scope.forget_password,token:token};
				var request={
						url:window.__API_PATH.PASSWORD_RESET,
						method:"POST",
						data:data
				};

				loginFactory.login(request).then(function(response){
						$scope.resetResult = response;
				});
			} else {
				$scope.resetResult.message = 'Password is not match with confirm password.';
				$scope.resetResult.class = 'Autherror';
			}			
			
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
		* Jot form tab list
		*/

		$rootScope.jotTypes        	= window.__API_PATH.JOT_TYPES;

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
				locals: {ActivateTab:'quick'}
			}).then(function(answer) {}, function() {});

		};


		/**************************************
		* Open popup direct by jot type 
		**************************************/

		$rootScope.openFormByType = function(formType){
		
			$mdDialog.show({
				controller: 'jotFormCtrl',
				templateUrl: '/modules/jot/views/jot-form.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,				
				locals: {ActivateTab:formType}
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
				console.log(response);
				$scope.registerResult = response;				
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