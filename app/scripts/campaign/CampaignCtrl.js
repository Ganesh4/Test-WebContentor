'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		function(){
			$scope.data = $state.current.data;
		}]);
})(angular);