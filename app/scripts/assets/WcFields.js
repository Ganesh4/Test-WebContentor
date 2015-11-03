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
	'RoleApiSrv',
	'CampaignApiSrv',
	function(Global, $compile, ImageApiSrv, $rootScope,RecipientApiSrv, CommonSrv,RoleApiSrv,CampaignApiSrv){
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
				required: '=',
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
						console.log('scope.countries -------- ',scope.countries);
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

				//Event For Roles List
				scope.$on(Global.EVENTS.ROLE_LIST,function(){
					RoleApiSrv.getRoleList($rootScope.userId+'/roles',{},function(data){
						if(data){
							scope.roleList = data.plain();
							console.log('scope.roleList -------- ',scope.roleList);
						}
					})
				});
				 
				//GET CAMPAIGN FETAURES
				scope.$on(Global.EVENTS.CAMPAIGN_FEATURE_LIST,function(){
					 /*CampaignApiSrv.getCampaignFeatures($rootScope.userId+'/campaign/features',null,function(data){
                		scope.featureList = data.plain();	
                		scope.featureList = _.clone(scope.featureList);
                		console.log('Feature List ------- ',  scope.featureList);
                		var mydata = _.pluck(scope.featureList,'feature');
                		 console.log('Feature List ------- ',  mydata);
                		console.log('Select2Options ------------- ',scope.select2Options.tags);
                		console.log('Feature List ------- ',  scope.featureList);
                		//scope.features = [];
            		});*/
					//Should Be Dynamic
            		scope.select2Options = {
	                'multiple': true,
	                'simple_tags': true,
	                'tags': ['Email','Promotional Pages', 'Blog']
	            	}	
				});


	            scope.updateCountry = function(){
	            	scope.$emit(Global.EVENTS.UPDATE_COUNTRY);
	            }
			}
		}
	}]
)}(angular));
