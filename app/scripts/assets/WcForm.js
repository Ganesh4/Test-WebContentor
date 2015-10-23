/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('assets').directive('wcForm',
        [
        'CommonSrv',
        'Global',
        'RecipientApiSrv',
        '$parse',
        'ImageApiSrv',
        function(CommonSrv,Global,RecipientApiSrv,$parse, ImageApiSrv){
            return{
                restrict:'AE',
                templateUrl:'views/assets/form.html',
                scope:{
					elements : '=',
					formBtns : '=',
                    formData : '=',
                    submitEvent: '@',
                    select2Options: '='
				},
                link : function(scope,element,attrs){

                    var self = this;

                    scope.formSubmit = function(){
                        scope.$emit(scope.submitEvent, scope.formData);
                    }
                   
                    scope.doOnChange = function(){
                        CommonSrv.doOnChange(scope,{}); 
                    }
                    // Should be come Dynamically 
                    RecipientApiSrv.getRecipientList('1/recipient/list', {},function(data){
                        if(data){
                            scope.RecipientList = data.plain();
                        }
                    });
                }
            }
        }])
})(angular);