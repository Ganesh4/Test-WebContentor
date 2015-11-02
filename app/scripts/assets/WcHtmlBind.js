'use strict';

(function(angular){

angular.module('microsite').directive('wcHtmlBind',function($compile){
		return{
			restrict:'AE',
			scope : {
				src : '='
			},
			template : '<div>{{src}}</div>',
			link : function(scope, element, attrs){
			   
			   var self = this;
			    scope.$watch(function () {
                    return scope.src;
                }, function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                	//angular.element(element[0]).children().editable();
            		new MediumEditor(element[0],{
					    toolbar: false,
				      	imageDragging: true
					});
                });

                element.bind('click',function(event){
            		event.preventDefault();
                });
			}
		}
	});
})(angular);