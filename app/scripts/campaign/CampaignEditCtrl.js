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
				$state.args = [];	
				$scope.campaignDetail = {};

				$scope.campaignDetail = $scope.campaign;
				console.log($scope.campaignDetail);			

				console.log('$scope.selectedFeatures --------- ',$scope.selectedFeatures);
			
			}

			$scope.$on(Global.EVENTS.,function(event, data){
                $scope.campaignDetail.campaignFeatureId = _.keys($scope.campaignDetail.campaignFeatureId);
                CampaignApiSrv.updateCampaign($scope.loggedInUser.securityUserID+'/campaign',$scope.campaignDetail,function(data){
                    console.log('data------------',data.plain());
                    $scope.campaignDetail = data.plain()[0];
                });
                $state.go('app.home.campaign.detail');
            });


		]);
})(angular);