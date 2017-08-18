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
            sidebar: 'yes',
            outside:'yes'
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

    .when("/dashboard/employee", {
        templateUrl : "/modules/employee/views/employee.html",
        controller  :  "employeeController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/employee_schedule", {
        templateUrl : "/modules/employee/views/employee_schedule.html",
        controller  :  "employeeScheduleController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/department", {
        templateUrl : "/modules/department/views/department.html",
        controller  :  "departmentController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/inventory", {
        templateUrl : "/modules/vending_machine/views/inventory.html",
        controller  :  "inventoryController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/inventory_category", {
        templateUrl : "/modules/vending_machine/views/inventory_category.html",
        controller  :  "inventoryCatController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
   .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);     
}]);