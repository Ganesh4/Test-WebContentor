'use strict';

(function(angular){

angular.module('editor').directive('wcEditMainMenu',
	[
		'$state',
		function($state){
			return{
				restrict:'AE',
				templateUrl : './views/editor/MainMenu.html',
				link : function(scope, element, attrs){

					scope.menus = $state.current.data.mainMenu;
				}
			}
		}
    ]).directive('wcSubMenu',
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