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
		]);
})(angular);