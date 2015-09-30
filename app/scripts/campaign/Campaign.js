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
                // controller:'CampaignCtrl',
                    data: {
                    displayName: 'campaign',
                    LeftNavList:[{
                        icon : 'fa fa-angle-down',
                        name : 'Campaign',
                        menu : [{
                                     icon : 'fa fa-plus',
                                     name : 'New Campaign',
                                     state:'app.home.campaign.create'
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
                        }).state('app.home.campaign.create', {
                            url: '/create',
                            templateUrl:"views/campaign/NewCampaign.html",
                            // controller:'CampaignCtrl',
                                data: {
                                displayName: 'create',
                                LeftNavList:[{
                                    icon : 'fa fa-angle-down',
                                    name : 'Properties',
                                        menu : [{
                                                    icon : 'fa fa-life-ring',
                                                    name : 'General'
                                                },{
                                                    icon : 'fa fa-envelope',
                                                    name : 'Emails'
                                                },{
                                                    icon : 'fa fa-list-alt',
                                                    name : 'Promotional Pages'
                                                }]
                                             }
                                        ]
                                    }
                })  

           }]);
    })(angular);