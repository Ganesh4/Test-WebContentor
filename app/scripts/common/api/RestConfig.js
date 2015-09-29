'use strict';

(function(angular){
	angular.module('microsite').config([
	'$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider, $stateProvider, RestangularProvider){

		//RestangularProvider.setBaseUrl('http://localhost/MicroS/');
       RestangularProvider.setBaseUrl('http://192.168.1.35/yavun/api');

	}]);
})(angular);
