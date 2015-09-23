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
                url: '/home',
                templateUrl:'views/home/home.html',
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
                     leftMenu : [{
                        icon : '',
                        name : 'Campaign',
                            innerMenu : [{
                                icon : '',
                                name : 'New Campaign'
                            },{
                                icon : '',
                                name : 'My Campaigns'
                            },{
                                icon : '',
                                name : 'All Campaigns'
                            }]
                     }]
                }
            });


            $stateProvider.state('app.home.manage', {
                url: '/manage',
                templateUrl:"views/manage/manage.html",
               // controller:'CampaignCtrl',
                data: {
                     displayName: 'manage',
                     leftMenu : [
                        {
                            icon : '',
                            name : 'User and Roles',
                            innerMenu : [{
                                icon : '',
                                name : 'New user wizard'
                            },{
                                icon : '',
                                name : 'Credentials'
                            },{
                                icon : '',
                                name : 'Credentials2'
                            }]
                        },{
                            icon : '',
                            name : 'Resources',
                            innerMenu : [{
                                icon : '',
                                name : 'Images'
                            },{
                                icon : '',
                                name : 'Videos'
                            },{
                                icon : '',
                                name : 'Files'
                            }]
                        },{
                            icon : '',
                            name : 'Emails and Recipients',
                            innerMenu : [{
                                icon : '',
                                name : 'Emails'
                            },{
                                icon : '',
                                name : 'Recipients'
                            }]
                        },{
                            icon : '',
                            name : 'Promotional Pages',
                            innerMenu : [{
                                icon : '',
                                name : 'Promotional Pages'
                            }]
                        },{
                            icon : '',
                            name : 'Reports',
                            innerMenu : [{
                                icon : '',
                                name : 'Analytics'
                            }]
                        },{
                            icon : '',
                            name : 'Logos',
                            innerMenu : [{
                                icon : '',
                                name : 'Event Logo'
                            }]
                        }
                    ]
                }
            }).state('app.home.manage.design', {
                url: '/design',
                templateUrl:"views/overview/overview.html",
                controller:'OverviewCtrl',
                 data: {
                    tags:['Iteractive User Interface', 'Parrallex Design', 'Entertainment', 'Music'],                 
                     displayName :'design' 
                },     
            }).state('app.home.manage.design.detail', {
                url:'/detail',
                templateUrl:'views/design/DesignDetail.html',
                controller:'DesignDetailCtrl',
                data: {
                     displayName: 'detail',
                }
        
            }).state('app.home.manage.design.upload', {
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
                            state:'app.editor.stats'
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