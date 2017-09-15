'use strict';

app.factory('AuthSrv', function ($rootScope) {
    var auth = {
        isLogged: false
    };

    return auth;
});