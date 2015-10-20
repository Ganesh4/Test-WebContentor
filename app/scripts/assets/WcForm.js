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

                    scope.doOnFormSubmit = function(){
                        //scope.$emit(Global.EVENTS.FORM_SUBMIT, scope.formData))
                    }

                    scope.formSubmit = function(){
                        scope.$emit(scope.submitEvent, scope.formData);
                    }
                    scope.bracket = function (model) {
                        var props = model.split('.');
                        var newModel = 'formData'+(props.length ? "['" + props.join("']['") + "']" : ']');
                        console.log('model @@@@@@@@@@@@@@ ' , newModel);
                        //angular.element(elem).attr('ng-model', newModel); 
                        var model1 = $parse(scope.newModel);
                        return model1(scope);
                       // return newModel;                   
                    }
                    scope.doOnChange = function(){
                        CommonSrv.doOnChange(scope,{}); 
                    }
                   
                    //Fetches Country List from the Backend.
                    CommonSrv.getCountriesList(function(data){
                        scope.countries = data.plain();
                       
                    });

                    ImageApiSrv.getCategory(scope.userGroupUri+'categories',{},function(data){
                        if(data){
                            scope.$root.imageCategory = data.plain(); 
                            console.log('$scope.imageCategory -------- ',$scope.imageCategory);
                        }
                    });

                    // Should be come Dynamically 
                    RecipientApiSrv.getRecipientList('1/recipient/list', {},function(data){
                        if(data){
                            scope.RecipientList = data.plain();
                        }
                    });



                    //Update State Object According to the Country Selected. 
                    scope.updateCountry = function(){
                        console.log('User -------- ' , scope.formData.country.securityCountryId);
                        var id = scope.formData.country.securityCountryId;
                        CommonSrv.getStatesByCountryId('countries/'+id,function(data){
                            scope.states = data.plain();
                            console.log('States --------------- ',data.plain());
                        });
                        
                    }

                }
            }
        }])
})(angular);