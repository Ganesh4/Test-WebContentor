/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){

    angular.module('microsite').directive('wcLeftNav',function(){
        return{

            restrict:'AE',
            templateUrl:'./views/commons/leftnav/leftnav.html',
            controller:('LeftnavCtrl',['$scope','$location','$state'],function($scope,$location,$state){
                        
                        $scope.isActive = function(route) {
                        $scope.path = $location.path();
                        console.log('test--------',route, $state.href($state.current.name) , $location.path() );
                        return $state.is('home');

                };
                      
            })
        }
    })
})(angular);