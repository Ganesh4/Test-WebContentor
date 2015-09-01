'use strict';

(function(angular){
	angular.module('vendor').config(['$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider,$stateProvider,RestangularProvider){
		RestangularProvider.setBaseUrl('http://localhost/microS/');

	//	RestangularProvider.setRequestSuffix('.json');
	}]);
})(angular);
