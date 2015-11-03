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
            var param ={};


            //Update User Functions
            $scope.$on(Global.EVENTS.UPDATE_USER,function(){
            	var user = $scope.user;
                user.securityState = user.state;
                user = _.omit(user,'state');
                user = _.omit(user,'country');
               user.securityStateId =  user.securityState.securityStateId;
                console.log('Update User ------------ ',user); 

               UserApiSrv.updateUser($scope.loggedInUser.securityUserId+'/users',user,function(data){
                console.log('Updated One ------- ',data.plain());
                $scope.$emit(Global.EVENTS.RELOAD);
                $state.transitionTo('app.home.manage.user.list');
               });
            });
             //Get Role List
             ApiSrv.getList($scope.loggedInUser.securityUserId+'/roles',param,function(data){
                if(data)
                    $scope.roles = data.plain();
                console.log('Roles  ---------------- ',$scope.roles);
            });

           

        }
    ]);
})(angular);