/**
 * 
 *
 *
 */
'use strict';

    (function(angular){
	    angular.module('campaign').config(
            [
                '$urlRouterProvider',
                '$stateProvider',	
                 function($urlProvider,$stateProvider){
                 // var route = 'app.home.mange';
                 $stateProvider.state('app.home.campaign', {
                 url: '/campaign',
                 templateUrl:"views/campaign/home.html",
                 controller:'CampaignCtrl',
                    data: {
                    displayName: 'Campaign',
                    LeftNavList:[{
                        icon : 'fa fa-angle-down',
                        name : 'Campaign',
                        menu : [{
                                     icon : 'fa fa-plus',
                                     name : 'New Campaign',
                                     state:'app.home.campaign.general'
                                },{
                                    icon : 'fa fa-list-alt',
                                    name : 'My Campaigns',
                                    state:''
                               },{
                                    icon : 'fa fa-file-text',
                                    name : 'All Campaigns',
                                    state:''
                                 }],

                                }],
                                actionBarBtn: [{
                                                name : "Create",
                                                onClickEvent : '',
                                            }],
                             }
                        }).state('app.home.campaign.general', {
                            url: '/general',
                            templateUrl:"views/campaign/NewCampaign.html",
                                data: {
                                displayName: 'General',
                                LeftNavList:[{
                                    icon : 'fa fa-angle-down',
                                    name : 'Properties',
                                        menu : [{
                                                    icon : 'fa fa-life-ring',
                                                    name : 'General',
                                                    state:'app.home.campaign.general'
                                                }]
                                             }
                                        ],
                                actionBarBtn: [{
                                                name : "Cancel",
                                                onClickEvent : 'CANCEL',
                                            },{
                                                name : "Save & Exit",
                                                onClickEvent : 'CAMPAIGN_SAVE_Exit',
                                                disable : 'CAMPAIGN_SAVE_DISABLE'
                                                
                                            },{
                                                 name : "Save",
                                                 onClickEvent : 'CAMPAIGN_SAVE',
                                                 disable : 'CAMPAIGN_SAVE_DISABLE'
                                            }],
                                        }
                                }).state('app.home.campaign.detail', {
                                    url: '/detail',
                                    templateUrl:"views/campaign/CampaignDetail.html",
                                    controller:"CampaignDetailCtrl",
                                    data:{
                                         displayName: 'Detail',
                                        LeftNavList:[{
                                            icon : 'fa fa-angle-down',
                                            name : 'Properties',
                                            menu : [{
                                                    icon : 'fa fa-life-ring',
                                                    name : 'General',
                                                    state:'app.home.campaign.general'
                                                },{
                                                    icon : 'fa fa-envelope',
                                                    name : 'Emails'
                                                },{
                                                    icon : 'fa fa-list-alt',
                                                    name : 'Promotional Pages',
                                                    state : 'app.home.manage.page'
                                                }]
                                            }
                                        ],
                                        actionBarBtn: [{
                                                name : "Cancel",
                                                onClickEvent : '',
                                            },{
                                                name : "Edit",
                                                onClickEvent : '',
                                                disable : ''
                                                
                                            },{
                                                 name : "Delete",
                                                 onClickEvent : '',
                                                 disable : ''
                                            }],
                                    }
                                                   
                                    }) ; 

           }]);
    })(angular);