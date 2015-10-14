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
			CAMPAIGN_SAVE_ENABLE: 'CAMPAIGN_SAVE_ENABLE',
			CAMPAIGN_SAVE_DISABLE: 'CAMPAIGN_SAVE_DISABLE',
			CAMPAIGN_SAVE_EXIT_ENABLE: 'CAMPAIGN_SAVE_EXIT_ENABLE',
			CAMPAIGN_SAVE_EXIT_DISABLE: 'CAMPAIGN_SAVE_EXIT_DISABLE',
			ADD_NEW_IMAGE: 'ADD_NEW_IMAGE',
    		USER_LOGIN:'USER_LOGIN',
    		DELETE_BTN_ENABLE:'DELETE_BTN_ENABLE',
    		DELETE_BTN_DISABLE:'DELETE_BTN_DISABLE',
    		EDIT_BUTTON_ENABLE:'EDIT_BUTTON_ENABLE',
    		EDIT_BUTTON_DISABLE:'EDIT_BUTTON_DISABLE',
    		DELETE_IMAGE: 'DELETE_IMAGE',
    		GRID_ROW_DATA: 'GRID_ROW_DATA',
    		RELOAD: 'RELOAD',
    		ADD_RECIPIENT:'ADD_RECIPIENT',
    		ADD_RECIPIENT_CANCEL:'ADD_RECIPIENT_CANCEL',

    		IS_CHECKED: 'IS_CHECKED',
    		REMOVE_GRID_ROW_DATA: 'REMOVE_GRID_ROW_DATA',
		},
		INPUT_TYPE:{
			RADIO:'RADIO',
			TEXT:'TEXT',
			CHECKBOX:'CHECKBOX',
			DROP_DOWN:'DROP_DOWN',
			CAPTCHA:'CAPTCHA'
		}
	});
})(angular);
