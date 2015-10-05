'use strict';

(function(angular){

angular.module('assets').directive('WcForm',['Global','$parse',function(Global,$parse){
		return{
			restrict:'AE',
			templateUrl:'./views/element.html',                
			scope:{
				elements : '=',
				formBtns : '='
			},
			link:function(scope,elem,attrs){
				
			}
	  };
  }]);
})(angular);