'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
        'Global',
        'CampaignApiSrv',
		function($scope,$state,Restangular,Global,CampaignApiSrv){
            console.log("$scope.loggedInUser ----------- ",$scope.loggedInUser);
            console.log($scope.loggedInUser.securityUserID,'---------',$scope.loggedInUser.groupId);
            $scope.campaign = {};
			$scope.data = $state.current.data;
            $scope.empty = false;
            $scope.checkValidation = function(){

                if(!$scope.campaign.name){
                   $scope.empty = true;
                }else if(!$scope.campaign.campaignFeatureId){
                   $scope.empty = true;
                }else{
                $scope.empty = false;
                }

                if($scope.empty == false){
                    console.log('$scope.empty--------',$scope.empty);   
                    $scope.enableSave();
                }else{
                    $scope.disableSave();
                }

            }         			
            // grab today and inject into field
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

            CampaignApiSrv.getCampaignFeatures($scope.loggedInUser.securityUserID+'/campaign/features',null,function(data){
                $scope.featureList = data.plain()   
                console.log('Feature List ------- ',  $scope.featureList);
            });
           
            $scope.$on(Global.EVENTS.CAMPAIGN_SAVE_EXIT,function(event, data){
                $scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
                CampaignApiSrv.saveCampaign($scope.loggedInUser.securityUserID+'/campaign',$scope.campaign,function(data){
                    console.log('data------------',$scope.campaign);
                });
                $state.go('app.home.campaign');
            });
            $scope.$on(Global.EVENTS.CAMPAIGN_SAVE,function(event, data){
                $scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
                CampaignApiSrv.saveCampaign($scope.loggedInUser.securityUserID+'/campaign',$scope.campaign,function(data){
                    console.log('data------------',data.plain());
                    $scope.campaign = data.plain()[0];
                });
                $state.go('app.home.campaign.detail');
            });



        }]);
})(angular);