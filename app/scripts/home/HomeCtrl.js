

'use strict';

(function(angular){
angular.module('microsite').controller('HomeCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        function($scope ,$state, ApiSrv,CommonSrv){

            $scope.subheader ={
            title : 'Overview',
            //APPLY_BTN : 'refresh' 
            } 

            $scope.btns = [];
            
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

            CommonSrv.getDesignCategories(function(response){
                if(response)
                    $scope.templateCategories = response.plain();

                console.log('$scope.templateCategories  --------------- ',$scope.templateCategories);
            });
        }
    ]);
})(angular);