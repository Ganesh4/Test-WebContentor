'use strict';

(function(angular){

angular.module('assets').directive('wcButton',['Global','$parse',function(Global,$parse){
		return{
			restrict:'AE',
			templateUrl:'./views/assets/button.html',                
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
					scope.$emit(scope.onClick, scope.btnData);
				}
				scope.PREVIOUS_BTN_DISABLE = true;
				scope.NEXT_BTN_DISABLE = true;
				scope.CAMPAIGN_SAVE_DISABLE = true;
				scope.CAMPAIGN_SAVE_EXIT_DISABLE = true;

				scope.isEnabled = function(){
					if(scope.disable){
						var model = $parse(scope.disable);
						//console.log('Model ----------  ',scope.disable , model(scope));
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

	            scope.$on(Global.EVENTS.CAMPAIGN_SAVE_ENABLE,function(event, data){
	                scope.CAMPAIGN_SAVE_DISABLE = false;
	            });

	            scope.$on(Global.EVENTS.CAMPAIGN_SAVE_DISABLE,function(event, data){
	                scope.CAMPAIGN_SAVE_DISABLE = true;
	            });

	            scope.$on(Global.EVENTS.CAMPAIGN_SAVE_EXIT_ENABLE,function(event, data){
	                scope.CAMPAIGN_SAVE_EXIT_DISABLE = false;
	            });

	            scope.$on(Global.EVENTS.CAMPAIGN_SAVE_EXIT_DISABLE,function(event, data){
	                scope.CAMPAIGN_SAVE_EXIT_DISABLE = true;
	            });
			}
	  };
  }]);
})(angular);