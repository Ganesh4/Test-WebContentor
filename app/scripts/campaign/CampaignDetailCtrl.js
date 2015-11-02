'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignDetailCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
        'CampaignApiSrv',
		function($scope,$state,Restangular,CampaignApiSrv){
			console.log("My Campaign --------------- ",$scope.campaign);
			$scope.selectedFeatures = $scope.campaign.CampaignFeatures;
			console.log("selectedFeatures --------------- ",$scope.selectedFeatures);
			

        }]);
})(angular);