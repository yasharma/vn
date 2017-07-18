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
        templateUrl : "/modules/dashboard/dashboard.html",
        access: {
            requiredLogin: true
        }
    });
   
    $locationProvider.html5Mode(true);     
}]);
