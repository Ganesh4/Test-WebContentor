'use strict';
/**
 * 
 *
 *
 */
	(function(angular){

	angular.module('vendor',['ui.router']);
	
	angular.module('common',['vendor']);

    angular.module('overview',['common']);

 	angular.module('microsite',['overview','common']);


	
 	})(angular);