'use strict';
/**
 * 
 *
 *
 */
(function(angular){

	angular.module('vendor',['ui.router','restangular', 'validation','validation.rule','ui.select2','ngSanitize','cb.x2js']);

	angular.module('common',['vendor','angularUtils.directives.uiBreadcrumbs']);
	
	angular.module('assets',['common']);

	angular.module('app',['assets']);

	angular.module('home',['app']);

	angular.module('overview',['home']);
   
	angular.module('design',['home']);

	angular.module('header',['home']);
	
	angular.module('api', ['microsite']);

	angular.module('subheader',['home']);

	angular.module('editor',['common']);

	angular.module('microsite',['home','overview','common','design','header','subheader','editor']);

})(angular);
