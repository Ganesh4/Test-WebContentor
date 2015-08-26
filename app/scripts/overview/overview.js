'use strict';

(function(angular){
	angular.module('overview').config(['$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider,$stateProvider,RestangularProvider){
		RestangularProvider.setBaseUrl('/app/json/');
		RestangularProvider.setRequestSuffix('.json');
    }]);
})(angular);
