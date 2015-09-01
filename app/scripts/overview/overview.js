'use strict';

(function(angular){
	angular.module('overview').config(['RestangularProvider',
	function(RestangularProvider){
		RestangularProvider.setBaseUrl('/app/json/');
		RestangularProvider.setRequestSuffix('.json');
    }]);
})(angular);
