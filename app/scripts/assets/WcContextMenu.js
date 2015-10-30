'use strict';

(function(angular){

angular.module('microsite').directive('wcContextMenu',function($compile){
		return{
			restrict:'AE',
			link : function(scope, element, attrs){

			}
		}
	}).directive('wcImageContextMenu',function(){
		return{
			restrict:'AE',
			link : function(scope, element, attrs){

			}
		}
	}).directive('wcButtonContextMenu',function(){
		return {
			restrict:'AE',
			link: function(scope, element, attrs){
				console.log('element ---------- ' , $(element[0]).find('button'));
				element.bind('click',function(event){
					if(event.target.nodeName === 'BUTTON'){
						console.log('Element ----------  ' , event.target);
						
					}
				});
			}

		}
	});
})(angular);
