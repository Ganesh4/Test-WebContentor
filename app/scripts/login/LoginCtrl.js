'use strict';

(function(angular){


    angular.module('login').controller('LoginCtrl',[
        	'$scope',
        	'loginSrv',
        	'$state',
        	function($scope,loginSrv,$state){
            	$scope.userName='';
            	$scope.password='';

                $scope.loginCheck = function (userName, password) {
                $scope.loginStaus= loginSrv.loginCheck(userName,password);
                if($scope.loginStaus) {
                    $state.go('app.home.campaign');
                	}else{
                  		$scope.message='Invalid User Name or Password';
                	}
                }
            }])
    })(angular)