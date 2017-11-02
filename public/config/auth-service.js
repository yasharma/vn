'use strict';

app.factory('AuthSrv', ['$rootScope',function ($rootScope) {
    var auth = {
        isLogged: false
    };

    return auth;
}]);