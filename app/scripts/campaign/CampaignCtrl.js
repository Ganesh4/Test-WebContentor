'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		'$cookieStore',
		function($scope,$state,Restangular,$cookieStore){
           
			$scope.data = $state.current.data;
			$scope.features = ['email','microsite', 'banner'];

			
			
		}]);
})(angular);