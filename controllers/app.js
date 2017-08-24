'use strict';
var myApp = angular.module('enterprise', ['ngRoute']).
    config(function ($routeProvider) {
        $routeProvider.
            when("/", { templateUrl: "./partialViews/list.html" }).
            when("/login", { templateUrl: "./partialViews/login.html", controller: "loginCtrl" }).
            when("/new", { templateUrl: "./partialViews/editList.html", controller: "saveListCtrl" }).
            when("/editList/:id", { templateUrl: "./partialViews/editList.html", controller: "editListCtrl" }).
            otherwise({
                redirectTo: '/'
            });

    })

myApp.controller('saveListCtrl', function ($scope, $location) {
    $scope.person = { Name: "", Description: "" }
    $scope.saveList = function () {
        $scope.crew.push($scope.person);
        $location.path("/");
    }
});

myApp.controller('AppCtrl', function ($scope) {
    $scope.crew = [
        { Name: "Picard", Description: "Caption" },
        { Name: "Worf", Description: "Number one" },
    ]
}); 

