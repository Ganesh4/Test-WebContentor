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
                cache: false,
                url: '/home',
                templateUrl:'views/home/home.html',
                abstract: true,
                controller:'HomeCtrl',

                data: {
                      displayName: false
                }
            }).state('app.home.campaign', {
                url: '/campaign',
                templateUrl:"views/campaign/home.html",
               // controller:'CampaignCtrl',
                data: {
                    displayName: 'campaign',
                    LeftNavList:[
                        {
                            icon : 'fa fa-angle-down',
                            name : 'Campaign',
                                menu : [{
                                    icon : '',
                                    name : 'New Campaign'
                                },{
                                    icon : '',
                                    name : 'My Campaigns'
                                },{
                                    icon : '',
                                    name : 'All Campaigns'
                                }]
                         }
                    ]
                }
            });


            $stateProvider.state('app.home.manage', {
                url: '/manage',
                templateUrl:"views/manage/manage.html",
               // controller:'CampaignCtrl',
                data: {
                    displayName: 'manage',
                    LeftNavList:[
                        {
                            icon : 'fa fa-angle-down',
                            name : 'User and Roles',
                            menu : [{
                                    icon : 'fa fa-user',
                                    name : 'Users'
                                },{
                                    icon : 'fa fa-users',
                                    name : 'Roles'
                                }
                            ]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Resources',
                            menu : [{
                                icon : 'fa fa-picture-o',
                                name : 'Images'
                            },{
                                icon : 'fa fa-video-camera',
                                name : 'Videos'
                            },{
                                icon : 'fa fa-folder-open',
                                name : 'Files'
                            }]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Emails and Recipients',
                            menu : [{
                                icon : 'fa fa-envelope',
                                name : 'Emails'
                            },{
                                icon : 'fa fa-list-alt',
                                name : 'Recipients'
                            }]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Promotional Pages',
                            menu : [{
                                icon : 'fa fa-file-text',
                                name : 'Promotional Pages',
                                state : 'app.home.manage.page'
                            }]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Reports',
                            menu : [{
                                icon : 'fa fa-bar-chart',
                                name : 'Analytics'
                            }]
                        },{
                            icon : 'fa fa-bookmark',
                            name : 'Logos',
                            menu : [{
                                icon : 'fa fa-bookmark',
                                name : 'Event Logo'
                            }]
                        }
                    ]
                }
            }).state('app.home.manage.page', {
                url: '/page',
                templateUrl:"views/overview/overview.html",
                controller:'OverviewCtrl',
                 data: {
                    tags:['Iteractive User Interface', 'Parrallex Design', 'Entertainment', 'Music'],                 
                     displayName :'page' 
                },     
            }).state('app.home.manage.page.detail', {
                url:'/detail',
                templateUrl:'views/design/DesignDetail.html',
                controller:'DesignDetailCtrl',
                data: {
                     displayName: 'detail',
                }
        
            }).state('app.home.manage.page.upload', {
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
                url:'/preview',
                templateUrl:'views/editor/TemplatePreview.html',
                controller:'TemplatePreviewCtrl',
            });
        }
    ]);
})(angular);