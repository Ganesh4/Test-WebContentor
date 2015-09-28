/**
 * 
 *
 *
 */
'use strict';

(function(angular){
     angular.module('manage').config(
        [
            '$urlRouterProvider',
            '$stateProvider',
            function($urlProvider, $stateProvider){
            // var route = 'app.home.mange';
             $stateProvider.state('app.home.manage', {
                url: '/manage',
                templateUrl:"views/manage/manage.html",
                abstract:true,
                data: {
                    displayName: 'manage',
                    LeftNavList:[
                        {
                            icon : 'fa fa-angle-down',
                            name : 'User and Roles',
                            menu : [{
                                    icon : 'fa fa-user',
                                    name : 'Users',
                                    state: 'app.home.manage.user.list',
                                },{
                                    icon : 'fa fa-users',
                                    name : 'Roles',
                                    state:'app.home.manage.roles'
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
        }).state('app.home.manage.user',{
            url: '/user',
            abstract: true,
            template:'<div ui-view></div>',
            data:{
                displayName: 'user',
                actionBarBtn : [{
                    name : 'Refresh',
                    onClickEvent : 'REFRESH',
                },{
                    name : "Export"
                },{
                    name : "Delete",
                    onClickEvent : 'DELETE_USER',
                },{
                    name : "Properties"
                },{
                    name : "Add",
                    onClickEvent : 'ADD_USER',
                    state : 'app.home.manage.user.add'
                }]
            }
        });  
    }]);
})(angular);
