'use strict';

(function(angular){


    angular.module('login').controller('LoginCtrl',[
        	'$scope',
        	'loginSrv',
        	'$state',
            '$cookieStore',
        	function($scope,loginSrv,$state,$cookieStore){
            	$scope.loginUser={};
                $scope.loginCheck = function () {
                    console.log('Login USer ----------------- ',$scope.loginUser);
                    var loginUser = $scope.loginUser;
                    loginSrv.loginCheck('Login',loginUser,function(data){
                      
                        $cookieStore.put('loggedInUser',data.plain());
                        $scope.loggedInUser = $cookieStore.get('loggedInUser');
                        $state.go('app.home.campaign');
                    });
                }
            }])
    })(angular)