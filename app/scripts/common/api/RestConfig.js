'use strict';

(function(angular){
	angular.module('microsite').config([
	'$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider, $stateProvider, RestangularProvider){
		
		RestangularProvider.setBaseUrl('http://localhost:8080/MicroS/');


	}]);
})(angular);
