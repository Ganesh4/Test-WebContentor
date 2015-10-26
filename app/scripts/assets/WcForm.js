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
        '$state',
        function(CommonSrv,Global,RecipientApiSrv,$parse, ImageApiSrv, $state){
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

                    scope.$watch(function(scope){
                            return $state.current.name;
                    },function(newValue,oldValue){
                            if(newValue!==undefined){
                                 scope.elements = $state.current.data.elements;
                                 scope.formBtns = $state.current.data.formButtons;
                            }
                    });
                   

                    scope.formSubmit = function(){
                        scope.$emit(scope.submitEvent, scope.formData);
                    }
                   
                    scope.doOnChange = function(){
                        CommonSrv.doOnChange(scope,{}); 
                    }

                }
            }
        }])
})(angular);