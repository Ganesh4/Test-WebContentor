
/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('user').config(['$urlRouterProvider','$stateProvider',function($urlProvider,$stateProvider){
		
   // Now set up the states
   $stateProvider.state('app.home.manage.user.list',{
        url:'/list',
        templateUrl:'views/user/user.html',
        controller : 'UserCtrl',
        data: {
        	 displayName: 'Users',
        }
    });
   $stateProvider.state('app.home.manage.user.add', {
        url:'/add',
        templateUrl:'views/user/add.html',
        data: {
             displayName: 'Add',
        }
	});  
   
}]);

})(angular);

