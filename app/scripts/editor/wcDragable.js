'use strict';

(function(angular){

angular.module('editor').directive('wcDragable',function(){
		return{
			restrict:'AE',
			templateUrl:'./views/commons/leftnav/LeftNavEditor.html',                
			scope:{	
			},
			link:function(scope,elem,attrs){
				dragula([(left),(right)], {
			  copy: function (el, source) {
			    return source === left
			    },
			  accepts: function (el, target) {
			    return target !== left
			    }
			});
							
						}

	  };
  });
})(angular);