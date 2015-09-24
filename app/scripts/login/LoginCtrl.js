'use strict';

(function(angular){


    angular.module('login')
        .controller('LoginCtrl',[
        	'$scope',
        	'loginServ',
        	'$state',
        	function($scope,loginServ,$state){
            	$scope.uname='';
            	$scope.password='';
            	$scope.loginFun = function (uname, password) {
                $scope.loginStaus= loginServ.loginCheck(uname,password);
                if($scope.loginStaus) {
                    $state.go('app.home.compaign');
                	}else{
                  		$scope.message='Invalid User Name or Password';
                	}
                }
            }
        ])
    })(angular)