
/**
 * 
 */
'use strict';
(function(angular){
    angular.module('recipients').directive('wcEllipsisMenu',

    	['Global',
    	function(Global){
        return{
            restrict:'AE',
            scope:{
            	onClick:'='
            },
            templateUrl:'./views/assets/rowmenu.html',
            link:function(scope){
        	scope.editContact = function(){
        	scope.$emit(Global.EVENTS.EDIT_CONTACT);
        	
        	   }
        	 scope.deleteContact = function(){
        	 	scope.$emit(Global.EVENTS.DELETE_RECIPIENT);
        	 }
				
        	}
    	}
    }]);
})(angular);