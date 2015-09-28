'use strict';

(function(angular){

angular.module('assets').directive('wcButton',function(){
		return{
			restrict:'AE',
			template:'<button class="btn btn-default" ng-click="doOnClick()">{{name}}</button> ',                
			scope:{
				selectedTemplate : '=',
				selectTemplate : '&',
				name : '=',
				type : '=',
				btnData : '=',
				onClick : '='
			},
			link:function(scope,elem,attrs){
				//console.log("Scope is ------------- ",scope.selectTemplate);
				scope.doOnClick = function(){
					console.log(scope.btnData);
					scope.$emit(scope.onClick, scope.btnData);
				}
			}
	  };
  });
})(angular);