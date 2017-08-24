'use strict';
myApp.controller('editListCtrl',function($scope,$location,$routeParams){
    debugger;
    $scope.person = $scope.crew[$routeParams.id];
    $scope.saveList = function(){
        
        $location.path("/");
    }
});