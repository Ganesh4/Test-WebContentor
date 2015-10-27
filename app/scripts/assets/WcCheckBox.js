'use strict';

(function(angular){

angular.module('microsite').directive('wcCheckBox',
	[
	'Global',
	function(Global){
		return{
			restrict:'AE',
			scope:{
				checked : '=',
				data : '=',
			},
			templateUrl : './views/assets/checkbox.html',
			link : function(scope, element, attrs){
				scope.isChecked = false;
			  	scope.$on(Global.EVENTS.IS_CHECKED , function(event , isChecked){
			  		scope.checked = isChecked;
			  	});
	  	        //Grid Selected
	            //id resource id
	            scope.isChecked = function(){
	                scope.checked = !scope.checked;
	                if(scope.checked && scope.data){
	                    scope.$emit(Global.EVENTS.GRID_ROW_DATA, scope.data);
	                    scope.$emit(Global.EVENTS.DELETE_BTN_ENABLE);
	                }else{
	                	scope.$emit(Global.EVENTS.REMOVE_GRID_ROW_DATA, scope.data);
	                }
	            } 
			}
		}
	}]
)}(angular));