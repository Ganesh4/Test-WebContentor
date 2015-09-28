'use strict';
/**
 * 
 *
 *
 */
(function(angular){

	angular.module('vendor',['ui.router','restangular', 'validation','validation.rule','ui.select2','ngSanitize','cb.x2js','froala','ui.grid']);

	angular.module('common',['vendor','angularUtils.directives.uiBreadcrumbs']);
	
	angular.module('assets',['common']);

	angular.module('app',['assets']);

	angular.module('login',['app']);

	angular.module('home',['app']);

	angular.module('campaign',['home']);

	angular.module('manage',['home']);

	angular.module('user', ['home']);
	
	angular.module('overview',['home']);

	angular.module('design',['home']);

	angular.module('header',['home']);
	
	angular.module('api', ['microsite']);

	angular.module('subheader',['home']);

	angular.module('editor',['common','froala']);

	angular.module('microsite',['login','home','overview','common','design','header','subheader','editor','campaign','manage','user']);

})(angular);