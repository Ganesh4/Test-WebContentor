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
        function(CommonSrv,Global,RecipientApiSrv){
            return{
                restrict:'AE',
                templateUrl:'views/assets/form.html',
                scope:{
					elements : '=',
					formBtns : '=',
                    formData : '=',
                    submitEvent: '@'                    
				},
                link : function(scope,elem,attrs){

                    scope.doOnFormSubmit = function(){
                        //scope.$emit(Global.EVENTS.FORM_SUBMIT, scope.formData))
                    }

                    scope.formSubmit = function(){
                        scope.$emit(scope.submitEvent, scope.formData);
                    }

                    scope.doOnChange = function(){
                        CommonSrv.doOnChange(scope,{}); 
                    }
                   
                    //Fetches Country List from the Backend.
                    CommonSrv.getCountriesList(function(data){
                        scope.countries = data.plain();
                       
                    });

                    // Should be come Dynamically 
                     RecipientApiSrv.getRecipientList('1/recipient/list', {},function(data){
                        if(data){
                            scope.RecipientList = data.plain();
                        }
                    });



                    //Update State Object According to the Country Selected. 
                    scope.updateCountry = function(){
                        console.log('User -------- ' , scope);
                        scope.states = scope.formData.country.SecurityStates;
                    }

                }
            }
        }])
})(angular);