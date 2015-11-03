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
			   var editor;
			    scope.$watch(function () {
                    return scope.src;
                }, function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                	//angular.element(element[0]).children().editable();
            		editor = new MediumEditor(element[0],{
					    toolbar: false,
				      	imageDragging: false
					});

					editor.on(element[0], 'click', function(event, editable){
						if(!angular.element(event.target).parent().hasClass('handle'))
							resizeAndDrag(event, editable);
						
					});
									    
				    scope.dragElement = function(element){
				    	scope.drag =new Draggabilly(element,{
				    		containment : '.content-main',
				    		handle:'.handle'
				    	});
				    }
				    var resizeAndDrag = function(event , editable){

						scope.nodeName = event.target.nodeName;
						var ele =  event.target;
						if(scope.nodeName === 'IMG')
							ele = ele.parentNode;

						angular.element(element[0]).find('.selected').removeClass('selected');
						angular.element(ele).addClass('selected');
						
						angular.element(element[0]).find('.handle').remove();
						angular.element(ele).prepend('<span class="handle" ><i class="fa fa-arrows"></i></span>');
						
						//Only First time element should be initialize.
						//if(!angular.element(ele).hasClass('draggable'))
							scope.dragElement(ele);
						$(ele).resizable();
						//angular.element(ele).addClass('draggable');
	               		event.preventDefault();					
				    }

				    element.bind('keypress',function(event){
						console.log('Key Code ------   ',event.target);
						if(event.which === 26){
							
							angular.element(event.target).find('.selected').css('width','');
							angular.element(event.target).find('.selected').css('height','');
							angular.element(event.target).find('.selected').css('position','');
							
						}
				    });

                });
				
			}
		}
	});
})(angular);