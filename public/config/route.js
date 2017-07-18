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
