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
            	var user = $scope.user;
                user.securityState = user.state;
                user = _.omit(user,'state');
                user = _.omit(user,'country');
                user.securityStateId =  user.securityState.securityStateId;
                console.log('Update User ------------ ',user); 

               UserApiSrv.updateUser($scope.loggedInUser.securityUserID+'/users',user,function(data){
                console.log('Updated One ------- ',data.plain());
                $scope.$emit(Global.EVENTS.RELOAD);
                $state.transitionTo('app.home.manage.user.list');
               });
            });

           

        }
    ]);
})(angular);