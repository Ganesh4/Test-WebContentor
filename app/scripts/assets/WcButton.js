'use strict';

(function(angular){

angular.module('assets').directive('wcButton',function(){
		return{
			restrict:'AE',
			templateUrl:'./views/commons/buttons/viewbutton.html',                
			scope:{
				selectedTemplate : '=',
				selectTemplate : '&'
			},
			link:function(scope,elem,attrs){
				//console.log("Scope is ------------- ",scope.selectTemplate);
				
			}

	  };
  });
})(angular);