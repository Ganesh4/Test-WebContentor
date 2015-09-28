'use strict';

(function(angular){
	angular.module('design').config([
	'$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider, $stateProvider, RestangularProvider){

		//RestangularProvider.setBaseUrl('http://192.168.1.34:8080/MicroS/');


       RestangularProvider.setBaseUrl('http://192.168.1.28/MicroS/');

	}]);
})(angular);