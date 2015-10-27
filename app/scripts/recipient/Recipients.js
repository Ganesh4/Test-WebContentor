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
                     abstract: true,
                data: {
	                 displayName: 'Recipients',
	                
                    }
                }).state('app.home.manage.recipients.list', {
                    url: '/list',
                    controller:'RecipientCtrl',
                    templateUrl:'./views/recipient/recipients.html',
                    data: {
                    displayName: ' Recipient List',
                    actionBarBtn: [{
                                    name : 'Export',
                                    onClick : '',
                               },{
                                    name : 'Create List',
                                    onClick : 'INPUT_BOX_ENABLED',
                                
                               },{
                                    name : 'Delete',
                                    onClick : 'DELETE_EMAIL_LIST',
                                    disable :'DELETE_BTN_DISABLE'
                               },{
                                    name : 'Save',
                                    onClick : 'ADD_EMAIL_RECIPIENT_LIST',
                                    disable :'SAVE_BTN_DISABLE'
                                
                               }],
                 }
                }).state('app.home.manage.recipients.add', {
                    url: '/add',
                    controller:'RecipientCtrl',
                    templateUrl:'views/recipient/AddRecipient.html',
                data: {
                    displayName: 'Add',
                    submitEvent: 'ADD_RECIPIENT',
                    actionBarBtn: [{
                                    name : 'Cancel',
                                    onClick: 'NAVIGATE',
                                    state : 'app.home.manage.recipients.list'
                               },{
                                    name : 'Save',
                                    onClick : 'ADD_RECIPIENT'
                                
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
                            required: false,
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
                            pattern :'^[0-9]{10,13}$',
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
                            pattern :'^[0-9]{10,13}$',
                            placeholder:'Mobile',
                            model : 'mobile',
                        },{
                            name:'address',
                            lable:'Address',
                            type: 'TEXT',
                            required: false,
                            placeholder:'Address',
                            model : 'address',
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
                            ngOptions: 'country.countryName for country in countries',
                            initEvent: 'COUNTRY_LIST',
                        },{
                            name:'state',
                            lable:'State',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'State',
                            model : 'state',
                            ngOptions:'state.stateName for state in states',
                            initMethod:'',
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
                            name:'recipient',
                            lable:'List Name',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'List Name',
                            model : 'list',
                            ngOptions:'recipient.name for recipient in RecipientList',
                            initEvent: 'RECIPIENT_LIST',
                        }],
                    }] 
                 }
                }).state('app.home.manage.recipients.import', {
                    url: '/import',
                    templateUrl:'views/recipient/ImportRecipient.html',
                data: {
                     displayName: 'ImportContact',
                    
                    }
                }).state('app.home.manage.recipients.mapping', {
                    url: '/mapping',
                    templateUrl:'views/recipient/MappingRecipient.html',
                data: {
                     displayName: 'MappingContact',
                    
                }
                }).state('app.home.manage.recipients.edit', {
                    url: '/edit',
                    controller:'RecipientEditCtrl',
                    template:'<div class = "col-md-8"><wc-form elements="elements" form-btns="formBtns" form-data="recipients" submit-event="{{submitEvent}}"></wc-form></div>',
                 data: {
                    displayName: 'Edit',
                    submitEvent: 'UPDATE_RECIPIENT',
                    actionBarBtn: [{
                                    name : 'Cancel',
                                    onClick: 'NAVIGATE',
                                    state : 'app.home.manage.recipients.list'
                               },{
                                    name : 'Update',
                                    onClick : 'UPDATE_RECIPIENT'
                                
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
                            required: false,
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
                            pattern :'^[0-9]{10,13}$',
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
                            pattern :'^[0-9]{10,13}$',
                            placeholder:'Mobile',
                            model : 'mobile',
                   },{
                            name:'address',
                            lable:'Address',
                            type: 'TEXT',
                            required: false,
                            placeholder:'Address',
                            model : 'address',
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
                            ngOptions: 'country.countryName for country in countries',
                            initEvent: 'COUNTRY_LIST',
                   },{
                            name:'state',
                            lable:'State',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'State',
                            model : 'state',
                            ngOptions:'state.stateName for state in states'
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
                            name:'listId',
                            lable:'List Name',
                            type: 'DROP_DOWN',
                            required: false,
                            placeholder:'List Name',
                            model : 'list',
                            ngOptions:'recipient.listName for recipient in RecipientList',
                            initEvent: 'RECIPIENT_LIST',
                        }],
                    }] 
                 }
            });

		    
	     }]);

    })(angular);