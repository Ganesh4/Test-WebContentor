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
						scope.data = $state.current.data;
						

					}
				}	
			}
		]);
})(angular);