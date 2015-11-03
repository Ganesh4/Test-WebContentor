
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
                templateUrl: "views/manage/manage.html",
                abstract: true,
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
                                    state:'app.home.manage.role.list'
                                }
                            ]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Resources',
                            menu : [{
                                icon : 'fa fa-picture-o',
                                name : 'Images',
                                state: 'app.home.manage.resources.images.grid'
                            },{
                                icon : 'fa fa-video-camera',
                                name : 'Videos'
                            },{
                                icon : 'fa fa-folder-open',
                                name : 'Files'
                            }]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Emails and Contacts',
                            menu : [{
                                icon : 'fa fa-envelope',
                                name : 'Emails',
                                state:'app.home.manage.emails'
                            },{
                                icon : 'fa fa-users',
                                name : 'Contacts',
                                state: 'app.home.manage.recipients.list'
                            },{
                                icon : 'fa fa-plus-square',
                                name : 'Segmentation',
                                state: ''
                            }]
                        },{
                            icon : 'fa fa-plus-square',
                            name : 'Promotional Pages',
                            menu : [{
                                icon : 'fa fa-file-text',
                                name : 'Promotional Pages',
                                state : 'app.home.manage.page.overview'
                            }]
                        },{
                            icon : 'fa fa-angle-down',
                            name : 'Reports',
                            menu : [{
                                icon : 'fa fa-th',
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

             }).state('app.home.manage.emails', {
                url: '/emails',
                templateUrl: "views/email/EmailList.html",
                data: {

                    displayName: 'Emails',
            }
                
        }); 
    }]);
})(angular);

