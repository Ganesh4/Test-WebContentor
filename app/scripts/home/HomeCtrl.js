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
        'UserApiSrv',
        function($scope ,$state, ApiSrv,CommonSrv,Global,UserApiSrv){

            var wizardSteps = $state.current.data.wizardSteps;
            $scope.NEXT_BTN_DISABLE = false;
            $scope.PREVIOUS_BTN_DISABLE = true;
            $scope.user = {};
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

            $scope.$on(Global.EVENTS.NAVIGATE,function(event,data){
                $state.go(data.state);
            });

            $scope.$on(Global.EVENTS.WIZARD_NEXT,function(event, data){
                CommonSrv.goToNextStep(wizardSteps, $scope);
            });

            $scope.$on(Global.EVENTS.WIZARD_PREVIOUS,function(event, data){
                CommonSrv.goToPreviousStep(wizardSteps, $scope);
            });

            $scope.$on(Global.EVENTS.WIZARD_CANCLE,function(event, data){

            });

            $scope.$on(Global.EVENTS.ADD_NEW_USER,function(event, data){
                console.log('Data ----------- ',$scope.user);
                UserApiSrv.addNewUser( 'users', $scope.user,function(data){

                    console.log('USER--------',$scope.user);

                });
            });


        }
    ]);
})(angular);