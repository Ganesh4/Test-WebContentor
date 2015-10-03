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
           
            $scope.reload = function(){
                $state.reload();
            }
           

           


        }
    ]);
})(angular);