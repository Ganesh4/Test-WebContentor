'use strict';
/**
 * 
 *
 *
 */
(function(angular){

	angular.module('vendor',['ui.router','restangular','ui.select2','ngSanitize','cb.x2js','ui.grid','ngCookies']);

	angular.module('common',['vendor','angularUtils.directives.uiBreadcrumbs','jcs-autoValidate','ui.grid.selection']);
	
	angular.module('assets',['common']);

	angular.module('app',['assets']);

	angular.module('login',['app']);

	angular.module('home',['app']);

	angular.module('campaign',['home']);

	angular.module('email',['campaign']);

	angular.module('manage',['home']);

	angular.module('user', ['manage']);



	angular.module('role',['manage']);

	angular.module('resources',['manage']);
	
	angular.module('overview',['home']);

	angular.module('design',['home']);

	angular.module('header',['home']);
	
	angular.module('api', ['microsite']);

	angular.module('subheader',['home']);

		angular.module('register',['home','reCAPTCHA'])

	angular.module('editor',['common','froala']);

	angular.module('microsite',['login','home','overview','common','design','header','subheader','editor','campaign','manage','user','role','resources', 'register', 'email']);

})(angular);