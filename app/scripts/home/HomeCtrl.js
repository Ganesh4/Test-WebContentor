

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
           // breadcrumb : ['home','overview']
            //APPLY_BTN : 'refresh' 
            } 

            $scope.btns = [];
            $scope.options = ['1','2'];
            console.log("Options in home Ctrl --------------- ",$scope.options)
            $scope.reload = function(){
                //$scope.$event = $state.current; 
                console.log('state ------------ ',$state);
                $state.reload();
                //console.log('$event',$scope.$event);
            }
           
            ApiSrv.accessToken();

            CommonSrv.getDesignCategories(function(response){
                if(response)
                    $scope.templateCategories = response.plain();

                console.log('$scope.templateCategories  --------------- ',$scope.templateCategories);
            });

            console.log('$state.current-----',$state.args);
        }
    ]);
})(angular);