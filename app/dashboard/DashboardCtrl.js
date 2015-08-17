/**
 * Created by vipul on 6/30/2015.
 */

'use strict';

var module = angular.module('microsite.dashboard', ['ngRoute']);


module.controller('DashBoardCtrl', ['$scope', function ($scope) {
    $scope.Object = [{name: 'vipul', points: 154, flag: true, task: 'Building this interactive user interface.'}];
}]);