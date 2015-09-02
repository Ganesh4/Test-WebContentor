'use strict';
/**
 * 
 *
 *
 */
(function(angular){

	angular.module('vendor',['ui.router','restangular']);

	angular.module('common',['vendor']);

	angular.module('overview',['common']);
    angular.module('design',['common']);

	angular.module('design',['common']);

	angular.module('microsite',['overview','common','design']);

})(angular);
