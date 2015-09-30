'use strict';

(function(angular){
angular.module('common').service('CommonSrv',
    [
        'Restangular',
        '$state',
        'Global',
        function (Restangular, $state, Global) {
            var self = this;
            self.getFormData = function(data){

                var formData = new FormData();
                console.log('My Form -------- ',formData);

                _.each(data, function(value , key){
                    console.log('Keys ---------  ', key);
                    if(_.isArray(value)){   
                        _.each(value, function(files , fileName){
                            console.log(fileName , files);
                            if(_.isObject(files)){
                                _.each(files, function(file , fileKey){
                                    console.log(file);
                                    formData.append(fileKey , file);
                                });
                            }else
                                formData.append(fileName , files);
                        });
                    }else{
                        console.log('Not Array --------  ', key , value);
                        formData.append(key , angular.toJson(value));
                    }
                });
                console.log('FormData -------- ' ,  formData);
                return formData;
            }

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
        }
    ]);
})(angular);