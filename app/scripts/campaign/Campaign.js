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
            })   

            }]);
    })(angular);