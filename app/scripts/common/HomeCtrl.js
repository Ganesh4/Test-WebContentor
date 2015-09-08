
'use strict';

(function(angular){
angular.module('microsite').controller('HomeCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        function($scope ,$state, ApiSrv){

            $scope.subheader ={
            title : 'Overview',
            //APPLY_BTN : 'refresh' 
            } 
            $scope.reload = function(){
                //$scope.$event = $state.current; 
                console.log('state ------------ ',$state);
                $state.reload();
                //console.log('$event',$scope.$event);
            }
            console.log("===========================");
            console.log("ApiSrv.accessToken();");
            console.log("============================");
            ApiSrv.accessToken();
        }
    ]);
})(angular);