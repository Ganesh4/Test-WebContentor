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
        function($scope ,$state, ApiSrv,CommonSrv){
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
        }
    ]);
})(angular);