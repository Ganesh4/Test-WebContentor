/*
*
*/
'use strict';

(function(angular){
angular.module('home').controller('HomeCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        'Global',
        function($scope ,$state, ApiSrv,CommonSrv,Global){

            var wizardSteps = $state.current.data.wizardSteps;
            $scope.NEXT_BTN_DISABLE = false;
            $scope.PREVIOUS_BTN_DISABLE = true;
            $scope.subheader ={
                title : 'Overview',
            } 
            $scope.btns = [];
            $scope.options = ['1','2'];
            $scope.reload = function(){
                $state.reload();
            }
            ApiSrv.accessToken();
            CommonSrv.getDesignCategories(function(response){
                if(response)
                    $scope.templateCategories = response.plain();
            });

            $scope.$on(Global.EVENTS.ADD_USER,function(event,data){
                $state.go(data.state);
            });

            $scope.$on(Global.EVENTS.WIZARD_NEXT,function(event, data){
                CommonSrv.goToNextStep(wizardSteps, $scope);
            });

            $scope.$on(Global.EVENTS.WIZARD_PREVIOUS,function(event, data){
                CommonSrv.goToPreviousStep(wizardSteps, $scope);
            });

            $scope.$on(Global.EVENTS.WIZARD_OK,function(event, data){

            });

            $scope.$on(Global.EVENTS.WIZARD_CANCLE,function(event, data){

            });

            $scope.$on(Global.EVENTS.NEXT_BTN_DISABLE,function(event, data){
                $scope.NEXT_BTN_DISABLE = true;

            });
                
            $scope.$on(Global.EVENTS.PREVIOUS_BTN_DISABLE,function(event, data){
                alert('TEST');
                $scope.PREVIOUS_BTN_DISABLE = true;
            });
            
            $scope.$on(Global.EVENTS.NEXT_BTN_ENABLE,function(event, data){
                $scope.NEXT_BTN_DISABLE = false;
            });
            
            $scope.$on(Global.EVENTS.PREVIOUS_BTN_ENABLE,function(event, data){
                $scope.PREVIOUS_BTN_DISABLE = false;
            });
        }
    ]);
})(angular);