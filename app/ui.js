/**
 * Created by vipul on 6/30/2015.
 */

'use strict';

// Declare app level module which depends on views, and components
/*
 angular.module('microsite', [
 '',
 'microsite.dashboard'
 ]).config(['$routeProvider', function ($routeProvider) {

 $routeProvider.otherwise({redirectTo: '/dashboard'});

 $routeProvider.when('/dashboard', {
 templateUrl: 'dashboard/dashboard.html',
 controller: 'DashBoardCtrl'
 });
 }]);*/

var module = angular.module('microsite', ['microsite.dashboard', 'ui.router']);

module.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    // Now set up the states
    $stateProvider.state('home', {
        url: "/home",
        template:"<div>THIS IS HOME<li><a ui-sref='dashboard'>Dashboard</a></li><ui-view></ui-view></div>"
    }).state('dashboard', {
        url: "/dashboard",
        templateUrl: "dashboard/dashboard.html",
        controller: "DashBoardCtrl"
    });
});
