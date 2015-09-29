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
			ADD_USER : 'ADD_USER',
			USER_PROPERTIES: 'USER_PROPERTIES'
		}
	});
})(angular);
