
myApp.controller('loginCtrl', function ($scope, $location, loginService,$http) {
    $scope.login = { userName: "", password: "" }
    $scope.loginToSystem = function (userName) {
        $scope.employee = loginService.processFunct().then(function(result){
        $scope.userDetail = result;
        console.log($scope.userDetail.data.userDetails[0]);
        })
    }
});