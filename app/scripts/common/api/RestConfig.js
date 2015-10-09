'use strict';

(function(angular){
	angular.module('microsite').config([
	'$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider, $stateProvider, RestangularProvider){

		//RestangularProvider.setBaseUrl('http://localhost/MicroS/');
    	RestangularProvider.setBaseUrl('http://192.168.1.69/yavun/api');
    	//RestangularProvider.setBaseUrl('http://192.168.1.34:8080/MicroS/');

	}]);
})(angular);
