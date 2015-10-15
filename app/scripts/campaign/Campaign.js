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
                                onClick : '',
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
                            }],
                            actionBarBtn: [{
                                            name : "Cancel",
                                            onClick : 'CANCEL',
                                        },{
                                            name : "Save & Exit",
                                            onClick : 'CAMPAIGN_SAVE_EXIT',
                                            disable : 'CAMPAIGN_SAVE_DISABLE'
                                        },{
                                            name : "Save",
                                            onClick : 'CAMPAIGN_SAVE',
                                            disable : 'CAMPAIGN_SAVE_DISABLE'
                                        }
                            ],
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
                                            icon : 'fa fa-list-alt',
                                            name : 'Promotional Pages',
                                            state : 'app.home.manage.page'
                                    }]
                                }],
                                actionBarBtn: [{
                                        name : "Cancel",
                                        onClick : '',
                                    },{
                                        name : "Edit",
                                        onClick : 'NAVIGATE',
                                        state :'app.home.campaign.edit'
                                        
                                    },{
                                         name : "Delete",
                                         onClick : '',
                                         disable : ''
                                    }
                                ],
                            }
                                       
                        }).state('app.home.campaign.edit', {
                            url: '/edit',
                            templateUrl:"views/campaign/CampaignEdit.html",
                            controller:"CampaignEditCtrl",
                            data:{
                                 displayName: 'Edit',
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
                                }],
                                actionBarBtn: [{
                                        name : "Previous",
                                        onClick : '',
                                    },{
                                        name : "Next",
                                        onClick : '',
                                        disable : ''
                                        
                                    },{
                                        name : "Ok",
                                        onClick : '',
                                        disable : ''
                                        
                                    }
                                ],
                            }
                        }) ; 
            }]);
})(angular);