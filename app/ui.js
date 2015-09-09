/**
 * 
 *
 *
 */
'use strict';
(function(angular){
    angular.module('microsite').config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/home/overview");
            // Now set up the states
            $stateProvider.state('home', {
                url: '/home',
                templateUrl:'views/home/home.html',
                controller:'HomeCtrl'
            }).state('home.overview', {
                url: '/overview',
                templateUrl:"views/overview/overview.html",
                controller:'OverviewCtrl'
            }).state('home.dashboard', {
                url: '/dashboard',
                templateUrl:'views/overview/overview.html'
            });
            $stateProvider.state('home.design', {
                url: '/design',
                template:'<ui-view></ui-view>',
                data: {
                    tags:['Iteractive User Interface', 'Parrallex Design', 'Entertainment', 'Music']
                },              
            }).state('home.design.detail', {
                url:'/detail',
                templateUrl:'views/design/DesignDetail.html',
            }).state('home.design.upload', {
                url:'/upload',
                templateUrl:'views/design/DesignUpload.html',
                controller:'DesignCtrl',
            });
            $stateProvider.state('editor', {
                url:'/editor',
                templateUrl:'views/editor/TemplateEdit.html',
                controller:'TemplateEditCtrl',
            }).state('preview', {
                url:'/preview',
                templateUrl:'views/editor/TemplatePreview.html',
                controller:'TemplatePreviewCtrl',
            });
        }
    ]);
})(angular);
