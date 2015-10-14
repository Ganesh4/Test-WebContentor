/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('recipients').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.home.manage.recipients', {
	                url: '/recipients',
	                template:'<ui-view></ui-view>',
	                 controller:'RecipientCtrl',
                data: {
	                 displayName: 'Recipients',
	                
                    }
               }).state('app.home.manage.recipients.list', {
                    url: '/list',
                    templateUrl:'./views/recipient/recipients.html',
                data: {
                    displayName: ' List',
                    actionBarBtn: [{
                                    name : 'Export',
                                    onClick : '',
                               },{
                                    name : 'Create List',
                                    onClick : '',
                                    state: ''
                                
                               },{
                                    name : 'Save',
                                    onClick : '',
                                
                               },{
                                    name : 'Add to List',
                                    onClick : 'NAVIGATE',
                                    state: 'app.home.manage.recipients.add'
                                
                               },{
                                    name : 'Delete',
                                    onClick : ''
                     }],
                 }
             }).state('app.home.manage.recipients.add', {
                    url: '/add',
                    templateUrl:'views/recipient/AddRecipient.html',
                    controller:'RecipientCtrl',
                data: {
                    displayName: 'Add',
                    submitEvent: 'ADD_RECIPIENT',
                    actionBarBtn: [{
                                    name : 'Cancel',
                                    onClick : 'ADD_RECIPIENT_CANCEL',
                               },{
                                    name : 'Save',
                                    onClick : 'ADD_RECIPIENT',
                                
                               }],
                    elements:[
                    {
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'firstName',
                            lable:'First Name',
                            type: 'TEXT',
                            required: true,
                            validate:'firstNameRequired',
                            placeholder:'First Name',
                            model : 'firstName'
                        },{
                            name:'lastName',
                            lable:'Last Name',
                            type: 'TEXT',
                            required: true,
                            validate:'lastNameRequired',
                            placeholder:'Last Name',
                            model : 'lastName'
                        }]
                    },{
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'email',
                            lable:'Email',
                            type: 'TEXT',
                            required: true,
                            validate:'emailisrequired',
                            placeholder:'Email',
                            model : 'email'
                        },{
                            name:'title',
                            lable:'Title',
                            type: 'TEXT',
                            required: true,
                            validate:'titleisrequired',
                            placeholder:'Title',
                            model : 'title'
                        }]

                    },{ 
                         rowClass :'col-lg-6',
                         rowElement:[{
                            name:'company',
                            lable:'Company',
                            type: 'TEXT',
                            required: true,
                            validate:'companyisrequired',
                            placeholder:'Company',
                            model : 'company'
                        },{
                            name:'phone',
                            lable:'Work Phone',
                            type: 'PATTERN',
                            required: true,
                            validate:'invalidPhoneNo',
                            pattern :'/^[0-9]{10,13}$/',
                            placeholder:'Work Phone',
                            model : 'workPhone'
                        }]

                     },{ 
                         rowClass :'col-lg-6',
                         rowElement:[{
                            name:'mobile',
                            lable:'Mobile',
                            type: 'PATTERN',
                            required: true,
                            validate:'invalidMobile',
                            pattern :'/^[0-9]{10,13}$/',
                            placeholder:'Mobile',
                            model : 'mobile',
                        },{
                            name:'address',
                            lable:'Address',
                            type: 'PATTERN',
                            required: true,
                            validate:'invalidPhoneNo',
                            placeholder:'Address',
                            model : 'address'
                        }]

                    },{
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'country',
                            lable:'Country',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'Country',
                            model : 'country',
                            onChange : 'updateCountry()',
                            ngOptions: 'country.CountryName for country in countries'
                        },{
                            name:'state',
                            lable:'State',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'State',
                            model : 'state',
                            ngOptions:'state.StateName for state in states'
                        }]
                    },{
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'city',
                            lable:'City',
                            type: 'TEXT',
                            required: false,
                            placeholder:'City',
                            model : 'city'
                        },{
                            name:'zip',
                            lable:'Zip',
                            type: 'TEXT',
                            required: false,
                            placeholder:'Zip',
                            model : 'zip',
                        }],
                    },{
                        rowClass :'col-lg-6',
                        rowElement:[{
                            name:'listName',
                            lable:'List Name',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'List Name',
                            model : 'listId',
                            ngOptions:'recipient.listName for recipient in RecipientList',
                        }],
                    }] 
                }
                

             }).state('app.home.manage.recipients.import', {
                    url: '/import',
                    templateUrl:'views/recipient/ImportRecipient.html',
                data: {
                     displayName: 'ImportRecipient',
                      LeftNavList:[{
                        icon : 'fa fa-angle-down',
                        name : 'STEPS',
                        menu : [{
                                     icon : 'fa fa-plus',
                                     name : 'General',
                                     state:'app.home.manage.recipients.import'
                                },{
                                    icon : 'fa fa-list-alt',
                                    name : 'Mapping',
                                    state:'app.home.manage.recipients.mapping'
                               }],

                             }],
                     actionBarBtn: [{
                                    name : "CVS",
                                    onClick : '',
                                },{
                                    name : "Download Exl",
                                    onClick : '',
                                },{
                                    name : "Cancel",
                                    onClick : '',
                                },{
                                    name : "Save",
                                    onClick : '',
                                },{
                                    name : "Next",
                                    onClick : '',
                                },{
                                    name : "Previous",
                                    onClick : '',
                            }],
                    
                    }
               }).state('app.home.manage.recipients.mapping', {
                    url: '/mapping',
                    templateUrl:'views/recipient/MappingRecipient.html',
                data: {
                     displayName: 'MappingRecipient',
                     LeftNavList:[{
                        icon : 'fa fa-angle-down',
                        name : 'STEPS',
                        menu : [{
                                     icon : 'fa fa-plus',
                                     name : 'General',
                                     state:'app.home.manage.recipients.import'
                                },{
                                    icon : 'fa fa-list-alt',
                                    name : 'Mapping',
                                    state:'app.home.manage.recipients.mapping'
                               }],

                             }],
                     actionBarBtn: [{
                                    name : "CVS",
                                    onClick : '',
                                },{
                                    name : "Download Exl",
                                    onClick : '',
                                },{
                                    name : "Cancel",
                                    onClick : '',
                                },{
                                    name : "Save",
                                    onClick : '',
                                },{
                                    name : "Next",
                                    onClick : '',
                                },{
                                    name : "Previous",
                                    onClick : '',
                            }],
                    
                    }
               });

		    
	     }]);

    })(angular);