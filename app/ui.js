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
                      displayName: false
                },

            }).state('app.register', {
                url: '/register',
                templateUrl:'views/user/registration.html',
                controller:'RegisterCtrl',
                data: {
                      displayName: 'New User Registration',

                }

            }).state('app.home', {
                url: '/home',
                templateUrl:'views/home/home.html',
                abstract : true,
                controller:'HomeCtrl',
                data: {
                      displayName: false
                }
            });   
            
            $stateProvider.state('app.editor', {
                url:'/editor/:userId/:templateId',
                templateUrl:'views/editor/TemplateEdit.html',
                controller:'TemplateEditCtrl',
                data : {
                    mainMenu : [{
                        name:'ADD',
                        icon:'fa fa-plus-square',
                        state:'app.editor.add'
                        },
                        {
                            name:'SECTION',
                            icon:'',
                            state:'app.editor.section'
                        },
                        {
                            name:'WIDGETS',
                            icon:'',
                            state:'app.editor.widgets'
                        },
                        {
                            name:'FORM',
                            icon:'',
                            state:'app.editor.form'
                        },
                        {
                            name:'SCO',
                            icon:'',
                            state:'app.editor.sco'
                        },
                        {
                            name:'STATS',
                            icon:'',

                    }]
                },
               
            }).state('app.preview', {
                url:'/Preview',
                templateUrl:'views/editor/TemplatePreview.html',
                controller:'TemplatePreviewCtrl',
            });
        }
    ]);


})(angular);