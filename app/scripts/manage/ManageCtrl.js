'use strict';
(function(angular){
	angular.module('manage').controller('ManageCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		function(){
			$scope.data = $state.current.data;
		}]);
})(angular);