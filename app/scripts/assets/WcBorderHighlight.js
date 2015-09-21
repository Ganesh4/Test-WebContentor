'use strict';

(function(angular){

angular.module('microsite').directive('wcBorderHighlight',function($compile){
		return{
			restrict:'AE',
			link : function(scope, element, attrs){
			   	
			   	scope.nodeName = '';
			    element.bind('mousemove', function(event){
					clearBorder();
					scope.nodeName = event.target.nodeName;
					addBorder(event.target);			    	
			    });

			    var addBorder = function(ele){
			    	angular.element(ele).addClass("element-highlight");
			    }

			    var clearBorder = function(){
			    	angular.element(element[0]).find(".element-highlight").removeClass("element-highlight");
			    }
			}
		}
	});
})(angular);
