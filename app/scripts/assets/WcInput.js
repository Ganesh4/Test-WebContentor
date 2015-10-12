'use strict';

(function(angular){
angular.module('assets').directive('wcInput',
	[
	'$parse',
	'$rootScope',
	'CommonSrv',
	function($parse, rootScope,CommonSrv){
	 	return{
			restrict :'AE',
			templateUrl:'views/assets/input.html',
			scope : {
				type: '=',
				name: '=',
				ngModel: '=outerModel',
				onClick: '=',
				onKeyUp: '=',
				onChange: '=',
				validate: '=',
				required: '=',
				placeholder: '=',
				pattern: '=',
				options: '=',
				wcOptions: '=',
			},
			link:function(scope, elem, attrs){
				var modelKey =  $parse(scope.options);
				scope.array = modelKey(scope);

				console.log('Ng --Model ---------  ' , scope.ngModel);
				

				if(scope.options === 'countries'){
					
				}
		        
			}
		}
	}]);
})(angular);
