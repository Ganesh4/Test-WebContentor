'use strict';

(function(angular){

angular.module('microsite').directive('wcIframe',function(){
		return{
			restrict:'AE',
			scope : {
				src : '='
			},
			template : '<iframe width= "100%" height = "100%" src= "{{src | trusted}}" ></iframe>',
			link : function(scope, element, attrs){
				var iframe = angular.element(element[0]).find('iframe')[0];
				iframe.height = document.body.scrollHeight + 150 + "px";
			}
		}
	});
})(angular);