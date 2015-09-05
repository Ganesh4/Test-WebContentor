'use strict';

(function(angular){
	angular.module('microsite').config([
	'$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider, $stateProvider, RestangularProvider){
		
		RestangularProvider.setBaseUrl('http://192.168.1.24/MicroS/');
		

	}]);
})(angular);
