"use strict";

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
    
    .when("/", {
        templateUrl: "/modules/home/views/home.html",
        controller: "homeController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
             footer:'yes',
        }
    })

    .when("/invitation/:data", {
        templateUrl: "/modules/home/views/home.html",
        controller: "homeController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
             footer:'yes',
        }
    })

    .when("/about-us", {
        templateUrl: "/modules/about/views/about-us.html",
        controller: "aboutUsCtrl",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })

    .when("/contact-us", {
        templateUrl: "/modules/contact/views/contact.html",
        controller: "contactController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })


    .when("/faq", {
        templateUrl: "/modules/faq/views/faq.html",
        controller : "faqController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
             footer:'yes',
        }
    })

    .when("/demo", {
        templateUrl: "/modules/demo/views/demo.html",
        controller: "demoController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })


    .when("/login", {
        templateUrl : "/modules/login/views/login.tpl.html",
        controller: "loginController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })
     .when("/resetpassword/:token", {
        templateUrl : "/modules/login/views/resetpassword.html",
        controller  :  "resetPasswordCtlr",
        access: {
           requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })    

    .when("/register", {
        templateUrl : "/modules/register/views/register.tpl.html",
        controller  :  "registerController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })
    .when("/dashboard", {
        templateUrl : "/modules/dashboard/views/dashboard-home.html",
        controller  :  "dashboardController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true, 
            headerType:'hotel_header',
            sidebar: 'yes',
            outside:'yes'
        }
    })


    /*.when("/invitation", {
        templateUrl : "/modules/invitation/views/invitation.html",
        controller  :  "invitationController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })*/

    .when("/dashboard/hotel-setup/:steps?", {
        templateUrl : "/modules/dashboard/views/steps.html",
        controller  :  "hotelSetupController",
        access: {
           requiredLogin: false,
            headerType:'hotel_header',
            sidebar: 'no',
        }
    })


    .when("/dashboard/hotelboard/:type?", {
        templateUrl : "/modules/jot/views/hotelboard.html",
        //controller  :  "dashboardController",
        controller  :  "hotelBoardController",
        access: {
            requiredLogin: true, 
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

  
    .when("/dashboard/employee", {
        templateUrl : "/modules/employee/views/employee.html",
        controller  :  "employeeController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/position", {
        templateUrl : "/modules/employee/views/position.html",
        controller  :  "positionController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/employee-schedule", {
        templateUrl : "/modules/employee/views/scheduler.html",
        controller  :  "schedulerController",
        controllerAs  :  "ctlr",
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

    .when("/dashboard/inventory-category", {
        templateUrl   : "/modules/vending_machine/views/inventory_category.html",
        controller    : "inventoryCatController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/lost-found", {
        templateUrl   : "/modules/lost_found/views/lost_found_management.html",
        controller    : "lostFoundManagementController",
        controllerAs  : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/profile", {
        templateUrl   : "/modules/profile/views/profile.html",
        controller    : "profileController",
        access: {
            requiredLogin: true,
            headerType:'hotel_header',
            sidebar: 'no'
        }
    })

    .when("/dashboard/phone-directory", {
        templateUrl   : "/modules/phone_directory/views/phone_directory.html",
        controller    : "phoneDirController",
        controllerAs  : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/document-center", {
        templateUrl   : "/modules/document_center/views/document_center.html",
        controller    : "documentCenterController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/alerts", {
        templateUrl   : "/modules/alerts/views/alerts.html",
        controller    : "alertsController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/sales-report", {
        templateUrl   : "/modules/reports/views/reports.html",
        controller    : "reportsController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/booking-report", {
        templateUrl   : "/modules/meeting/views/reports.html",
        controller    : "bookingReportController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/meeting-rooms", {
        templateUrl   : "/modules/meeting/views/meeting_room_management.html",
        controller    : "meetingManagementController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

   .otherwise({
    redirectTo: '/modules/error/views/404.html'

    });
        $locationProvider.html5Mode(true);     
    }]);