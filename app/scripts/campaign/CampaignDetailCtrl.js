<<<<<<< HEAD
'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignDetailCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		'CampaignApiSrv',
		function($scope,$state,Restangular,CampaignApiSrv){
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
=======
'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignDetailCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
        'CampaignApiSrv',
		function($scope,$state,Restangular,CampaignApiSrv){
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
>>>>>>> 2d8db67af192346792cc666fe5cff15b3f5b3b64
})(angular);