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

        }
    ]);
})(angular);