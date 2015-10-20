'use strict';

(function(angular){
angular.module('common').service('CommonSrv',
    [
        'Restangular',
        '$state',
        'Global',
        'ApiSrv',
        function (Restangular, $state, Global, ApiSrv) {
            var self = this;
 
            self.getDesignCategories = function(success , error){
               Restangular.one('categories').getList().then(success);
            }
            
            //Go To Next Step Of Wizard
            self.goToNextStep = function(wizardSteps,scope){
                var index = self.getWizardCurrentIndex(wizardSteps);
                var maxLength = _.size(wizardSteps) - 1;
                if(maxLength > index){
                    console.log('index', index);
                    scope.$broadcast(Global.EVENTS.NEXT_BTN_ENABLE);
                    scope.$broadcast(Global.EVENTS.PREVIOUS_BTN_ENABLE);
                    var stateName = wizardSteps[index + 1];
                    $state.go(stateName);
                }
                if(index + 1 == maxLength ){
                    scope.$broadcast(Global.EVENTS.NEXT_BTN_DISABLE);
                }
            }
            self.goToPreviousStep = function(wizardSteps, scope){
                var index = self.getWizardCurrentIndex(wizardSteps);
                if(index > 0){
                    scope.$broadcast(Global.EVENTS.NEXT_BTN_ENABLE);
                    scope.$broadcast(Global.EVENTS.PREVIOUS_BTN_ENABLE);
                    var stateName = wizardSteps[index-1];
                    $state.go(stateName);
                }
                if(index -1 == 0){
                    scope.$broadcast(Global.EVENTS.PREVIOUS_BTN_DISABLE);
                }
            }
            //Returns current index from the wizad list using current state name.
            self.getWizardCurrentIndex = function(wizardSteps){
                var stateName = $state.current.name;
                var index = 0;
                _.each(wizardSteps, function(value, key){
                    if(value === stateName)
                        index = key;
                });
                return index;
            }

            //Enable NEXT BUTTON
            self.enableNext = function(scope){
                scope.$broadcast(Global.EVENTS.NEXT_BTN_ENABLE);
            }

            //DISABLE NEXT BUTTON
            self.disableNext = function(scope){
                scope.$broadcast(Global.EVENTS.NEXT_BTN_DISABLE);
            }

            //Get Country Data
            self.getCountriesList =function(success, error){
                Restangular.all('countries').getList().then(success);
            }

            //Get States By Countruy Id
            self.getStatesByCountryId =function(uri, success, error){
                Restangular.all(uri).getList().then(success);
            }            

            //On Click Event Fire From This Location.
            self.doOnClick = function(scope, data){
                scope.$emit(scope.onClick, data);
            }

            //On Change Event Fire From this location.
            self.doOnChange = function(scope, data){
                scope.$emit(scope.onChange, data);
            }

            //On Key Up Event Fire From This Location
            self.doOnkeyUp = function(scope, data){
                scope.$emit(scope.onKeyUp, data);
            }
            
            //Enable NEXT BUTTON
            self.enableSave = function(scope){
                scope.$broadcast(Global.EVENTS.CAMPAIGN_SAVE_ENABLE);
                scope.$broadcast(Global.EVENTS.CAMPAIGN_SAVE_EXIT_ENABLE);
            }

            //DISABLE NEXT BUTTON
            self.disableSave = function(scope){
                scope.$broadcast(Global.EVENTS.CAMPAIGN_SAVE_DISABLE);
                scope.$broadcast(Global.EVENTS.CAMPAIGN_SAVE_EXIT_DISABLE);
            }
        }
    ]);
})(angular);