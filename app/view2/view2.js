'use strict';

var module = angular.module('myApp.view2', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

module.controller('View2Ctrl', [function() {

}]);