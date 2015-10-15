/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('promotional').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.home.campaign.promotional', {
	                url: '/promotional',
	                templateUrl:'views/promotional/promotional.html',
	                controller:'PromotionalCtrl',
                data: {
	                displayName: 'Promotional',
	                LeftNavList:[{
                            icon : 'fa fa-angle-down',
                            name : 'Properties',
                            menu : [{
                                        icon : 'fa fa-life-ring',
                                        name : 'General',
                                        state:'app.home.campaign.general'
                                    },{
                                        icon : 'fa fa-envelope',
                                        name : 'Emails',
                                        state: 'app.home.campaign.emails'
                                    },{
                                        icon : 'fa fa-list-alt',
                                         name : 'Promotional Pages',
                                         state : 'app.home.campaign.promotional'
                                    }]
                                 }
                            ],
                    actionBarBtn: [{
                                    name : "Delete",
                                    onClickEvent : '',
                               },{
                                    name : "Create",
                                    onClickEvent : '',
                                
                               },{
                                    name : "Cancel",
                                    onClickEvent : ''
                     }],
                 }

             });
	     }]);

    })(angular);