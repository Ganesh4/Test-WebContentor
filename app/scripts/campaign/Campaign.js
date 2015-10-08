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
                                 }]
                                }]
                             }
                        }).state('app.home.campaign.general', {
                            url: '/general',
                            templateUrl:"views/campaign/NewCampaign.html",
                             controller:'CampaignCtrl',
                                data: {
                                displayName: 'General',
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
                                                    name : 'Promotional Pages'
                                                }]
                                             }
                                        ],
                                actionBarBtn: [{
                                                name : "Cancel",
                                                onClickEvent : 'CANCEL',
                                            },{
                                                name : "Save & Exit",
                                                onClickEvent : 'CAMPAIGN_SAVE',
                                                
                                            },{
                                                 name : "Save",
                                                 onClickEvent : ''
                                            }],
                                 }
                })  

           }]);
    })(angular);