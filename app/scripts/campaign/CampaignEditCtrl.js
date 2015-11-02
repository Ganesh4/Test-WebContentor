'use strict';

(function(angular){

	angular.module('campaign').controller('CampaignEditCtrl',
		[
			'$scope',
			'$state',
			'Global',
			'CampaignApiSrv',
       	    function($scope, $state, Global, CampaignApiSrv){
				var param = {};
				var self = this;
                $scope.campaign.features = [];

                //Load Features
                _.each($scope.campaign.CampaignFeatures,function(value,key){
                     $scope.campaign.features.push(value.securityFeatures.feature);
                });

			     console.log('$scope.loggedInUser.securityUserId ------------- ',$scope.loggedInUser.securityUserId);
				$scope.$on(Global.EVENTS.CAMPAIGN_UPDATE,function(event, data){
                 $scope.campaign.CampaignFeatures = [];
                 console.log('Campaign ------------------ ',$scope.campaign);
                console.log('$scope.campaignFeatureList ----------- ',$scope.campaignFeatureList);
                 _.each($scope.campaign.features,function(value,key){
                    var feature = _.pick($scope.campaignFeatureList,function(v,k,object){
                        return v.feature == value;
                    });

                    console.log('Selected Feature --------------- ',_.values(feature));
                    var selctedFeature = _.values(feature);
                    var putObject = {'securityFeatures': selctedFeature[0]};
                    $scope.campaign.CampaignFeatures.push(putObject);
                });

               /* _.each($scope.campaign.CampaignFeatures,function(value,key){
                    if(!_.isObject(value)){
                        $scope.campaign.CampaignFeatures = _.without($scope.campaign.CampaignFeatures,value);
                    }
                });*/
                console.log('Campaign ------------------ ',_.omit($scope.campaign,'features'));
                console.log(' $scope.campaign.CampaignFeatures -------------- ', $scope.campaign);
               CampaignApiSrv.updateCampaign($scope.loggedInUser.securityUserId+'/campaign',$scope.campaign,function(data){
                    console.log('data------------',data.plain());
                    $scope.campaign = {};
                    $state.go('app.home.campaign.my');
                });
                //$state.go('app.home.campaign.my');
            });

			
			}

			

		]);
})(angular);