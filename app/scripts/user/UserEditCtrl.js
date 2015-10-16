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
                if(!_.isUndefined(user.country))
                	user.country = $scope.user.country.SecurityCountryID;
                if(!_.isUndefined(user.state))
               		user.state = $scope.user.state.SecurityStateID;
               

               UserApiSrv.updateUser($scope.loggedInUser.securityUserID+'/users',user,function(){
                console.log('Updated One ------- ',data.plain());
                $scope.$emit(Global.EVENTS.RELOAD);
                $state.transitionTo('app.home.manage.user.list');
               });
            });

           

        }
    ]);
})(angular);