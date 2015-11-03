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
                        abstract: true,
                        template:"<ui-view></ui-view>",
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
                                            state:'app.home.campaign.my'
                                       },{
                                            icon : 'fa fa-file-text',
                                            name : 'All Campaigns',
                                            state:'app.home.campaign.all'
                                }],

                            }],
                        }
                    }).state('app.home.campaign.all', {
                        url: '/all',
                        templateUrl:"views/campaign/home.html",
                        data: {
                            icon:'fa fa-file-text',
                            displayName: 'Campaign',
                        }
                    }).state('app.home.campaign.my', {
                        url: '/my',
                        templateUrl:"views/campaign/UserCampaign.html",
                        data: {
                            icon : 'fa fa-list-alt',
                            displayName: 'My Campaign',
                        }
                    }).state('app.home.campaign.general', {
                        url: '/general',
                        templateUrl:"views/campaign/NewCampaign.html",
                        data: {
                            icon : 'fa fa-plus',
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
                                            onClick : 'NAVIGATE',
                                            state :'app.home.campaign.all'
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
                            elements:[{
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable:'Campaign Name',
                                        name:'campaignName',   
                                        type: 'TEXT',
                                        required: true,
                                        placeholder:'Campaign Name',
                                        model : 'name',
                                        validate:'campaignNameRequired',
                                    }]
                                },
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable:'Start Date',
                                        name:'startDate',
                                        type: 'CALENDAR',
                                        required: true,
                                        placeholder:'Start Date',
                                        model:'startDate',
                                        validate:'startingdate',
                                        format: 'yyyy-MM-dd',
                                        onChange: '',                        
                                    }]
                                },
                                
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable:'End Date',
                                        name:'endDate',
                                        type: 'CALENDAR',
                                        required: true,
                                        placeholder:'End Date',
                                        model:"endDate",                        
                                        format: 'yyyy-MM-dd',

                                    }]
                                },
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable: 'Description',
                                        name:'description',
                                        type: 'TEXT_AREA',
                                        placeholder:'Description',
                                        model : 'description'
                                    }]
                                },
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable : 'Features',
                                        name:'CampaignFeatures',
                                        type: 'SELECT_TAGS',
                                        required: true,
                                        model : 'features',
                                        initEvent: 'CAMPAIGN_FEATURE_LIST',
                                        placeholder : 'Features'
                                    }]

                                }] 
                             
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
                                        }]
                                }],
                                actionBarBtn: [{
                                        name : "Cancel",
                                        onClick : 'NAVIGATE',
                                        state :'app.home.campaign.all'
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
                                         name : "Cancel",
                                        onClick : 'NAVIGATE',
                                        state :'app.home.campaign'
                                        },{
                                        name : "Update",
                                        onClick : 'CAMPAIGN_UPDATE'
                                    }],
                                elements:[{
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable:'Campaign Name',
                                        name:'campaignName',   
                                        type: 'TEXT',
                                        required: true,
                                        placeholder:'Campaign Name',
                                        model : 'name',
                                        validate:'campaignNameRequired',
                                    }]
                                },
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable:'Start Date',
                                        name:'startDate',
                                        type: 'CALENDAR',
                                        required: true,
                                        placeholder:'Start Date',
                                        model:'startDate',
                                        validate:'startingdate',
                                        format: 'yyyy-MM-dd',
                                        onChange: '',                        
                                    }]
                                },
                                
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable:'End Date',
                                        name:'endDate',
                                        type: 'CALENDAR',
                                        required: true,
                                        placeholder:'End Date',
                                        model:"endDate",                        
                                        format: 'yyyy-MM-dd',

                                    }]
                                },
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable: 'Description',
                                        name:'description',
                                        type: 'TEXT_AREA',
                                        placeholder:'Description',
                                        model : 'description'
                                    }]
                                },
                                {
                                    rowClass :'col-lg-12',
                                    rowElement:[{
                                        lable : 'Features',
                                        name:'CampaignFeatures',
                                        type: 'SELECT_TAGS',
                                        required: true,
                                        model : 'features',
                                        initEvent: 'CAMPAIGN_FEATURE_LIST',
                                        placeholder : 'Features'
                                    }]

                                }] 
                            }
                        }) ; 
            }]);
})(angular);