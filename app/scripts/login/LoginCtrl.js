'use strict';

(function(angular){


    angular.module('login').controller('LoginCtrl',[
        	'$scope',
        	'loginSrv',
        	'$state',
            '$cookieStore',
            'Global',
        	function($scope, loginSrv, $state, $cookieStore, Global){
            	$scope.loginUser={};
                $scope.elements = $state.current.data.elements;
                $scope.formBtns = $state.current.data.formButtons;
                $scope.submitEvent = $state.current.data.submitEvent;
                $scope.$on(Global.EVENTS.USER_LOGIN,function(event, data){
                    console.log('Login USer ----------------- ',data);
                    var loginUser = data;
                    loginSrv.loginCheck('Login',loginUser,function(data){
                        $cookieStore.put('loggedInUser',data.plain());
                        $scope.loggedInUser = $cookieStore.get('loggedInUser');
                        $state.go('app.home.campaign');
                    });
                });
            }])
    })(angular)