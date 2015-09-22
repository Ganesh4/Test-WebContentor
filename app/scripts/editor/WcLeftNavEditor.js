/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('editor').directive('wcLeftNavEditor',function()
    {
        return{
            restrict:'AE',
            templateUrl:'./views/commons/leftnav/LeftNavEditor.html',
            controller:('LeftNavEditorCtrl',['$scope','$state'],function($scope,$state){
                $scope.isActive = function(route) {
                    $scope.path = $location.path();
                };
            })
        }
    })
})(angular);