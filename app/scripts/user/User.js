
/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('user').config(['$urlRouterProvider','$stateProvider',	function($urlProvider,$stateProvider){
		
   // Now set up the states
   $stateProvider.state('app.home.manage.user'{
   	url:'/user',
   	templateUrl:'views/user/user.html'
   });

   
}]);

})(angular);

