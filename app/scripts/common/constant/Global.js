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
			CAMPAIGN_SAVE_EXIT:'CAMPAIGN_SAVE_EXIT',
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
    	    EDIT_CAMPAIGN:'EDIT_CAMPAIGN',
    		REMOVE_GRID_ROW_DATA: 'REMOVE_GRID_ROW_DATA',
    		UPDATE_IMAGE:'UPDATE_IMAGE',
    		DELETE_USER:'DELETE_USER',
    		EDIT_USER:'EDIT_USER',
    		UPDATE_USER:'UPDATE_USER',
    		GET_RECIPIENT_BY_LIST:'GET_RECIPIENT_BY_LIST',
    		CAMPAIGN_UPDATE: 'CAMPAIGN_UPDATE',
    		CAMPAIGN_CANCEL: 'CAMPAIGN_CANCEL',
    		DELETE_RECIPIENT:'DELETE_RECIPIENT',
    		UPDATE_CONTACT:'UPDATE_CONTACT',
    		ADD_EMAIL_RECIPIENT_LIST:'ADD_EMAIL_RECIPIENT_LIST',
    		INPUT_BOX_ENABLED:'INPUT_BOX_ENABLED',
    		COUNTRY_LIST:'COUNTRY_LIST',
    		IMAGE_CATEGORY:'IMAGE_CATEGORY',
    		RECIPIENT_LIST:'RECIPIENT_LIST',
    		UPDATE_COUNTRY:'UPDATE_COUNTRY',
    		DELETE_EMAIL_LIST:'DELETE_EMAIL_LIST',
    		DIALOG_CLOSE:'DIALOG_CLOSE',
    		ROLE_LIST:'ROLE_LIST',
    		EDIT_CONTACT:'EDIT_CONTACT',
    		EDIT_EMAIL_LIST:'EDIT_EMAIL_LIST',
    		ADD_ROLE: 'ADD_ROLE',
    		EDIT_ROLE:'EDIT_ROLE',
    		DELETE_ROLE:'DELETE_ROLE',
    		UPDATE_ROLE:'UPDATE_ROLE',
    		

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
