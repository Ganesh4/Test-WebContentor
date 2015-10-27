
/*
*
*/
'use strict';
(function(angular){
angular.module('resources').controller('ImageEditCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'Global',
        'CommonSrv',
        'ImageApiSrv',
        function($scope ,$state, ApiSrv,Global,CommonSrv,ImageApiSrv){  
            var param = {};
            $scope.image = {};
            $scope.image = $scope.gridRowSelectedData[0];
            $scope.$on(Global.EVENTS.UPDATE_IMAGE,function(event, data){
                var data = {
                    resource : $scope.image
                }
                var uri = $scope.userGroupUri+'images';
                ImageApiSrv.updateImage(uri, data.resource , function(response){
                    $state.transitionTo('app.home.manage.resources.images.grid');
                });
            });
            /*ImageApiSrv.getCategory($scope.userGroupUri+'categories',{},function(data){
                    if(data){
                        $scope.$root.imageCategory = data.plain(); 
                        console.log('$scope.imageCategory -------- ',$scope.imageCategory);
                    }
            });*/
        }
    ]);
})(angular);