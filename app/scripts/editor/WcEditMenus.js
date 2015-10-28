'use strict';

(function(angular){

angular.module('editor').directive('wcSubMenu',
	[
		'$state',
		function($state){
			return {
				restrict : 'AE',
				templateUrl : './views/editor/Menu.html',
				link : function(scope, element, attr){
					console.log('wcSubMenu-------',$state.current.data);
					scope.data = $state.current.data;
					

				}
			}	
		}
	]).directive('wcSubMenuItem',
	[
		'$state',
		function($state){
			return {
				restrict : 'AE',
				templateUrl : './views/editor/MenuItem.html',
				link : function(scope, element, attr){
					console.log('wcSubMenu-------',$state.current.data);
					scope.data = $state.current.data;
					

				}
			}	
		}
	]);
})(angular);