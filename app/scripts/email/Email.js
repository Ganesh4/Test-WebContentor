/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('email').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.home.campaign.emails', {
	                url: '/emails',
	                templateUrl:'views/email/emails.html',
	                controller:'EmailCtrl',
                data: {
	                displayName: 'Emails',
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

             });

		    
	     }]);

    })(angular);