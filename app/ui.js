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
            $urlRouterProvider.otherwise("/app/home/campaign");
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


            }).state('app.home.campaign', {
                url: '/campaign',
                templateUrl:"views/campaign/home.html",
                controller:'CampaignCtrl',
                data: {
                     displayName: 'campaign',
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
                            state:''
                        },
                        {
                            name:'SCO',
                            icon:'',
                            state:''
                        },
                        {
                            name:'STATS',
                            icon:'',
                            state:''
                    }]
                },
                templateUrl:'views/editor/TemplateEdit.html',
            }).state('app.editor.add',{
                url:'/add',
                templateUrl:'views/editor/SubMenu.html',
                data:{
                    title : 'Add Content',
                    subMenu: [{
                        name : 'Section',
                        icon : '',
                    },{
                        name : 'Images',
                        icon : '',
                    },{
                        name : 'Videos',
                        icon : '',
                    },{
                        name : 'Icon',
                        icon : '',
                    },{
                        name : 'Text',
                        icon : '',
                    },{
                        name : 'Button',
                        icon : '',
                    },{
                        name : 'Graph',
                        icon : '',
                    },{
                        name : 'Shapes',
                        icon : '',
                    },{
                        name : 'Site Navigation',
                        icon : '',
                    },{
                        name : 'Slider',
                        icon : '',
                    }]
                },
            }).state('app.editor.section',{
                url:'/section',
                templateUrl:'views/editor/SubMenu.html',
                data:{
                    title : 'Section',
                    subMenu: [{
                        name : '',
                        icon : '',
                    },{
                        name : '',
                        icon : '',
                    },{
                        name : '',
                        icon : '',
                    }]
                },
            }).state('app.editor.widgets',{
                url:'/widgets',
                templateUrl:'views/editor/SubMenu.html',
                data:{
                    title : 'Widgets',
                    subMenu: [{
                        name : 'Apps',
                        icon : '',
                    },{
                        name : 'Facebook',
                        icon : '',
                    },{
                        name : 'twitter',
                        icon : '',
                    },{
                        name : 'Linkedn',
                        icon : '',
                    },{
                        name : 'Google Plus',
                        icon : '',
                    }]
                },
            }).state('app.preview', {
                url:'/preview',
                templateUrl:'views/editor/TemplatePreview.html',
                controller:'TemplatePreviewCtrl',
            });
        }
    ]);
})(angular);