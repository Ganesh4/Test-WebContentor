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
			$scope.selectedFeatures = [];
			_.each($scope.featureList,function(value,key){
				_.each($scope.campaign.campaignFeatureId,function(v,k){
						if(value.securityFeatureId == v)
							$scope.selectedFeatures.push(value);
				})
				
			});
			console.log('$scope.selectedFeatures --------- ',$scope.selectedFeatures);

        }]);
})(angular);