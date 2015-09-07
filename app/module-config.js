'use strict';
/**
 * 
 *
 *
 */
(function(angular){

	angular.module('vendor',['ui.router','restangular', 'validation','validation.rule','ui.select2']);

	angular.module('common',['vendor']);
	
	angular.module('home',['common']);

	angular.module('overview',['common']);
   
	angular.module('design',['common']);

	angular.module('header',['common']);
	
	angular.module('api', ['microsite']);

	angular.module('subheader',['header']);

	angular.module('microsite',['overview','common','design','header','subheader']);

})(angular);
