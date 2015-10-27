'use strict';

(function(angular){

angular.module('microsite').directive('wcDialogBox',function($compile){
		return{
			restrict:'AE',
			templateUrl:'.views/assets/dialogbox.html',
			scope : {
				message : '=',
				btns : '='
			},
			link : function(scope, element, attrs){
			   			

			}
		}
	});
})(angular);
