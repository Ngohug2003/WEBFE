var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/views/list.html",
            controller: "listProductCtrl"
        })
        .when("/add", {
            templateUrl: "/views/add.html",
            controller: "addProductCtrl"
        })
        .when("/detail/:id", {
            templateUrl: "/views/detail.html",
            controller: "detailProductCtrl"
        })
        .when("/edit/:id", {
            templateUrl: "/views/edit.html",
            controller: "editProductCtrl"
        })


})