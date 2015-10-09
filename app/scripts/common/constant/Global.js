'use strict';

(function(angular){
	angular.module('microsite').constant('Global',{
		apiCredentials: {
			grant_type : 'password', 
			client_id:'yavun01', 
			client_secret :'secret',
			username : 'wcuser',
			password:'wcuser'
		},
		EVENTS:{
			NAVIGATE: 'NAVIGATE',
			USER_PROPERTIES: 'USER_PROPERTIES',
			NEXT_BTN_ENABLE: 'NEXT_BTN_ENABLE',
			PREVIOUS_BTN_ENABLE: 'PREVIOUS_BTN_ENABLE',
			NEXT_BTN_DISABLE: 'NEXT_BTN_DISABLE',
			PREVIOUS_BTN_DISABLE: 'PREVIOUS_BTN_DISABLE',
			WIZARD_SUCCESS: 'WIZARD_SUCCESS',
			WIZARD_CANCLE: 'WIZARD_CANCLE',
			WIZARD_NEXT: 'WIZARD_NEXT',
			WIZARD_PREVIOUS: 'WIZARD_PREVIOUS',
			ADD_NEW_USER: 'ADD_NEW_USER',
			USER_REGISTER: 'USER_REGISTER',
			CAMPAIGN_SAVE: 'CAMPAIGN_SAVE',
			ADD_NEW_IMAGE: 'ADD_NEW_IMAGE'
		}
	});
})(angular);
