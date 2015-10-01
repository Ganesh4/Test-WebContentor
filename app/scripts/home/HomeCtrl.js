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
            $scope.user = {};
            $scope.reload = function(){
                $state.reload();
            }
           

           


        }
    ]);
})(angular);