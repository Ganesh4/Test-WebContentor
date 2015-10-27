'use strict';

(function(angular){

angular.module('assets').directive('wcFields',
	[
	'Global',
	'$compile',
	'ImageApiSrv',
	'$rootScope',
	'RecipientApiSrv',
	'CommonSrv',
	function(Global, $compile, ImageApiSrv, $rootScope,RecipientApiSrv, CommonSrv){
		return{
			restrict:'AE',
			scope:{
				model : '=',
				formData : '=',
				format : '=',
				onChange : '=',
				name :'=',
				placeholder : '=',
				validate : '=',
				type : '=',
				options : '=',
				initEvent: '=',
				fileName: '=',
				lable: '=',
				states: '=',  
			},
			templateUrl : './views/assets/fields.html',
			link : function(scope, element, attrs){
				
				var self = this;
				//Sets Ng Model Attribute Value
				scope.setModel = function (model) {
					if(model){
						var props = model.split('.');
						var newModel = 'formData'+(props.length ? "['" + props.join("']['") + "']" : ']');
						var input = angular.element(element).find(':input').attr('ng-model', newModel);
						//input.unbind();
						$compile(input)(scope);
					}
				}
				//$scope.imageCategory = ['Test','Testing'];
	            scope.select2Options1 = {
	                'multiple': true,
	                'simple_tags': true,
	            }; 
	            scope.select2Options = {
	                'multiple': true,
	                'simple_tags': true,
	                'tags': ['Graphics']
	            };

	            setTimeout(function(){
                    scope.setModel(scope.model);    
	            },100);

	            scope.init = function(){
	            	if(scope.initEvent)
	            		scope.$broadcast(scope.initEvent);
	            }

	            scope.$on(Global.EVENTS.COUNTRY_LIST,function(){

	            	//Fetches Country List from the Backend.
                    CommonSrv.getCountriesList(function(data){
						scope.countries = data.plain();
                    });
	            });

	            scope.$on(Global.EVENTS.IMAGE_CATEGORY,function(){
	            	//Get Image Category From Backend.
	            	ImageApiSrv.getCategory($rootScope.userGroupUri+'categories',{},function(data){
                        if(data)
                            scope.imageCategory = data.plain(); 
                    });
	            });

				//Event Recipient List.
				scope.$on(Global.EVENTS.RECIPIENT_LIST,function(){
					//Get Image Category From Backend.
					RecipientApiSrv.getRecipientList($rootScope.userId+'/email/list', {},function(data){
						if(data){
							scope.RecipientList = data.plain();
						}
					});
				});

	            scope.updateCountry = function(){
	            	scope.$emit(Global.EVENTS.UPDATE_COUNTRY);
	            }
			}
		}
	}]
)}(angular));
