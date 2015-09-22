/**
 * Created by subhash on 25/08/15.
 */
'use strict';

(function(angular){

    angular.module('overview').directive('wcUserTemplateBox',
    	[
    		'OverviewApiSrv',
    		'CommonSrv',
    		'$timeout',
        '$state',
    		function(OverviewApiSrv,CommonSrv,$timeout, state){
        return{

            restrict:'AE',
            templateUrl:'./views/overview/UserTemplateBox.html',
           controller : 'TemplateBoxCtrl',
            scope : {
            	templateType : '=',
            	categories : '=',
            	filter : '=',
            
            },
            link : function(scope, elem, attrs){
  			
           		var type = attrs.templateType;
           		if(type == 'userTemplates'){
           			OverviewApiSrv.getUserDesigns(1,{
           				filter : scope.filter
           			},function(data){
           				if(data){
	           				scope.templates = data.plain();
						    scope.templateType = 'User Created';
						}
					});
           		}else if(type == 'featured'){
           			
           			OverviewApiSrv.getCategoriesDesigns('featured',{
           				filter : scope.filter
           			},function(data){
           				scope.categories = [];
           				scope.categories.push({name: 'featured'});
           				scope.templates = data.plain();
						scope.templateType = 'Featured';
					});

           		}else if(type = "categoryTemplates"){
           			CommonSrv.getDesignCategories(function(response){
           				scope.categories = response.plain();
           				scope.templates = [];
           				_.each(scope.categories,function(value,key){
           					//Getting templates from  category 
							OverviewApiSrv.getCategoriesDesigns(value.name,{
           						filter : scope.filter
           					},function(data){
           				
								_.each(data.plain(),function(value,key){
									scope.templates.push(value);
								});
							});

           				});
           				
           			});
           		}
              scope.selectTemplate = scope.selectTemplate;

              scope.editDesign = function(id){
                if(id){
                var href = state.go('app.editor', {'templateId' : id.toString(), 'userId' : '1'}, {absolute: true});
                //window.open(href, '_blank');
                }
              }
            }

        }
    }]);
})(angular);