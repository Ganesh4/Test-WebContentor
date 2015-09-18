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
        '$sceDelegateProvider',
        function ($stateProvider, $urlRouterProvider , $sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                // Allow loading from outer templates domain.
                'https://s3.amazonaws.com/webcontentor-microsite/**'
            ]); 
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/app/home/overview");
            // Now set up the states
            $stateProvider.state('app', {
                url: '/app',
                template:'<ui-view></ui-view>',
                controller:'AppCtrl',
              data: {
                      displayName: false
                    },

            }).state('app.home', {
                url: '/home',
                templateUrl:'views/home/home.html',
                controller:'HomeCtrl',
              data: {
                      displayName: false
                    }


            }).state('app.home.overview', {
                url: '/overview',
                templateUrl:"views/overview/overview.html",
                controller:'OverviewCtrl',
                data: {
                     displayName: 'overview',
                }
                
            }).state('app.home.dashboard', {
                url: '/dashboard',
                templateUrl:'views/overview/overview.html'
            });
            $stateProvider.state('app.home.design', {
                url: '/design',
                template:'<ui-view></ui-view>',
                data: {
                    tags:['Iteractive User Interface', 'Parrallex Design', 'Entertainment', 'Music'],                 
                     displayName :'design' 
                },              
            }).state('app.home.design.detail', {
                url:'/detail',
                templateUrl:'views/design/DesignDetail.html',
                controller:'DesignDetailCtrl',
                data: {
                     displayName: 'detail',
                }
        
            }).state('app.home.design.upload', {
                url:'/upload',
                templateUrl:'views/design/DesignUpload.html',
                controller:'DesignCtrl',
                 data: {
                     displayName: 'upload',
                }
            });

            $stateProvider.state('app.editor', {
                url:'/editor/:userId/:templateId',
                templateUrl:'views/editor/TemplateEdit.html',
                controller:'TemplateEditCtrl',
            }).state('app.preview', {
                url:'/preview',
                templateUrl:'views/editor/TemplatePreview.html',
                controller:'TemplatePreviewCtrl',
            });
        }
    ]);
})(angular);
