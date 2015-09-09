'use strict';
/**
 * 
 *
 *
 */
(function(angular){

	angular.module('vendor',['ui.router','restangular', 'validation','validation.rule','ui.select2','ngSanitize']);

	angular.module('common',['vendor']);
	
	angular.module('home',['common']);

	angular.module('overview',['home']);
   
	angular.module('design',['home']);

	angular.module('header',['home']);
	
	angular.module('api', ['microsite']);

	angular.module('subheader',['header']);

	angular.module('editor',['common']);

	angular.module('microsite',['home','overview','common','design','header','subheader','editor']);

})(angular);
