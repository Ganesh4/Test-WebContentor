'use strict';

(function(angular){


    angular.module('login').controller('LoginCtrl',[
        	'$scope',
        	'loginSrv',
        	'$state',
            'Global',
            'localStorageService',
        	function($scope, loginSrv, $state, Global, localStorageService){
            	$scope.loginUser={};
                $scope.elements = $state.current.data.elements;
                $scope.formBtns = $state.current.data.formButtons;
                $scope.submitEvent = $state.current.data.submitEvent;
                $scope.$on(Global.EVENTS.USER_LOGIN,function(event, data){
                    console.log('Login USer ----------------- ',data);
                    var loginUser = data;
                    loginSrv.loginCheck('Login',loginUser,function(data){
                        
                        console.log('Data ------------',data.plain());

                        localStorageService.set('loggedInUser',data.plain());
                        //$cookieStore.put('loggedInUser',data.plain());
                        $scope.loggedInUser = localStorageService.get('loggedInUser');
                        $state.go('app.home.campaign');
                    });
                });
            }])
    })(angular)