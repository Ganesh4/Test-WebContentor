'use strict';

(function(angular){
angular.module('assets').directive('wcInput',function(){
	 	return{
		restrict :'AE',
		templateUrl:'views/assets/select.html',
		scope : true,
		link:function(scope,elem,attrs){
			console.log("Options ----------- ",scope.options);
		}

		}
	});

})(angular);