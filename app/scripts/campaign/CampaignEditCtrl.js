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
			
				console.log('$scope.selectedFeatures --------- ',$scope.campaign);

        		  $scope.today = function() {
            $scope.today = new Date();
            };

            $scope.tomorrow = function() {
            $scope.campaign.endDate = new Date($scope.startDate.getTime() + 24 * 60 * 60 * 1000);
            };

            // run today() function
            $scope.today();
            // $scope.tomorrow();
            // open min-cal
            $scope.openStart = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.campaign.openedStart = true;
            console.log($scope.campaign.openedStart);
            };

            // open min-cal
            $scope.openEnd = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.campaign.openedEnd = true;
            };

            $scope.clearEndDate = function(){
            $scope.campaign.endDate = null;
            }
            // handle formats
            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

            // assign custom format
            $scope.format = $scope.formats[0];   
        		

				$scope.$on(Global.EVENTS.CAMPAIGN_UPDATE,function(event, data){
                $scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
                CampaignApiSrv.updateCampaign($scope.loggedInUser.securityUserID+'/campaign',$scope.campaign,function(data){
                    console.log('data------------',data.plain());
                 
                });
                $state.go('app.home.campaign');
            });

			
			}

			

		]);
})(angular);