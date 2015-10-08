'use strict';

(function(angular){

angular.module('assets').directive('wcButton',['Global','$parse',function(Global,$parse){
		return{
			restrict:'AE',
			template:'<button type = "{{type}}" class="btn btn-default" ng-disabled="isEnabled()" ng-click="doOnClick()">{{name}}</button> ',                
			scope:{
				selectedTemplate: '=',
				selectTemplate: '&',
				name: '=',
				type: '=',
				btnData: '=',
				onClick: '=',
				disable: '='
			},
			link:function(scope,elem,attrs){
				
				scope.doOnClick = function(){
					if(scope.onClick)
						scope.$emit(scope.onClick, scope.btnData);
				}
				scope.PREVIOUS_BTN_DISABLE = true;
				scope.NEXT_BTN_DISABLE = true;

				scope.isEnabled = function(){
					if(scope.disable){
						var model = $parse(scope.disable);
						return model(scope);
					}
					else 
						return false;
				}

				scope.$on(Global.EVENTS.NEXT_BTN_DISABLE,function(event, data){
	                scope.NEXT_BTN_DISABLE = true;

	            });
	                
	            scope.$on(Global.EVENTS.PREVIOUS_BTN_DISABLE,function(event, data){
	                scope.PREVIOUS_BTN_DISABLE = true;
	            });
	            
	            scope.$on(Global.EVENTS.NEXT_BTN_ENABLE,function(event, data){
	            	console.log("Enable in WC");
	               	scope.NEXT_BTN_DISABLE = false;
	            });
	            
	            scope.$on(Global.EVENTS.PREVIOUS_BTN_ENABLE,function(event, data){
	                scope.PREVIOUS_BTN_DISABLE = false;
	            });

			}
	  };
  }]);
})(angular);