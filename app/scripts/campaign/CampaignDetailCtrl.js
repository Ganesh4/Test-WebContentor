'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignDetailCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		'$cookieStore',
        'CampaignApiSrv',
		function($scope,$state,Restangular,$cookieStore,CampaignApiSrv){
			console.log("My Campaign --------------- ",$scope.campaign.campaignFeatureId,'----------',$scope.featureList);
			$scope.selectedFeatures = [];
			_.each($scope.featureList,function(value,key){
				_.each($scope.campaign.campaignFeatureId,function(v,k){
						if(value.SecurityFeatureID == v)
							$scope.selectedFeatures.push(value);
				})
				
			});
			console.log('$scope.selectedFeatures --------- ',$scope.selectedFeatures);

        }]);
})(angular);