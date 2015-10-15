/*
*
*/
'use strict';
(function(angular){
angular.module('user').controller('UserEditCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        'UserApiSrv',
        'Global',
        function($scope ,$state, ApiSrv,CommonSrv,UserApiSrv,Global){
			$scope.elements = $state.current.data.elements;
			$scope.formBtns = $state.current.data.formBtns;
			$scope.submitEvent = $state.current.data.submitEvent;


            //Update User Functions
            $scope.$on(Global.EVENTS.UPDATE_USER,function(){
               UserApiSrv.updateUser($scope.loggedInUser.securityUserID+'/users',$scope.user,function(){
                console.log('Updated One ------- ',data.plain());
               });
            });

           

        }
    ]);
})(angular);