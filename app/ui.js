
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
            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise("/app/login");
            // Now set up the states
            $stateProvider.state('app', {
                url: '/app',
                template:'<ui-view></ui-view>',
                controller:'AppCtrl',
                abstract:true,
                data: {
                    displayName: false,
                    logo:'images/yavun_logo.svg',
                    menues:[{
                        type:'ICON',
                        icon:'fa fa-question-circle',
                        state:'',
                    }]
                },
            }).state('app.home', {
                url: '/home',
                templateUrl:'views/home/home.html',
                abstract : true,
                controller:'HomeCtrl',
                data: {
                    displayName: false,
                    //logo:'images/yavun_logo.svg',
                    mainNav:[{
                        name:'Campaign',
                        state:'app.home.campaign.all'
                    },{
                        name:'Manage',
                        state:'app.home.manage.user.list'
                    }],
                    menues:[{
                        type :'ICON',
                        icon:'fa fa-user',
                        state:'',
                    },{
                        type :'ICON',
                        icon:'fa fa-bell',
                        state:'',
                    },{
                        type :'ICON',
                        icon:'fa fa-comments',
                        state:'',
                    },{
                        type :'ICON',
                        icon:'fa fa-question-circle',
                        state:'',
                    },{
                        type :'ICON',
                        icon:'fa fa-arrow-circle-up',
                        state:'',
                    }]
                }
            });   
            

        }
    ]);
})(angular);