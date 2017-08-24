
myApp.service('loginService', function ($http) {
    return {
        processFunct: function () {
            var defer = $.Deferred();
            $http.get('./../assests/login.json')
                .then(function (response) {
                    // alert();
                    console.log(response);
                    defer.resolve(response);
                    
                })
            return defer.promise();
        }
    }
});
