/*
*
*/
'use strict';
(function(angular){
angular.module('user').controller('UserCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        function($scope ,$state, ApiSrv,CommonSrv){
            $scope.data = $state.current.data;
			console.log("$scope.data-----",$scope.data);

        }
    ]);
})(angular);
