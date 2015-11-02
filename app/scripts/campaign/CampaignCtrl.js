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
            $scope.campaign = {};
            $scope.campaign.CampaignFeatures = [];
            // Get List Of All Campaign Features
           CampaignApiSrv.getCampaignFeatures($scope.loggedInUser.securityUserId+'/campaign/features',null,function(data){
                $scope.campaignFeatureList = data.plain()   
                console.log('Feature List ------- ',  $scope.campaignFeatureList);
            });

            // Campaign SAVE AND EXIT
            $scope.$on(Global.EVENTS.CAMPAIGN_SAVE_EXIT,function(event, data){
                //$scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
                console.log("Campaign -------------------- ",$scope.campaign);
               
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
               
                CampaignApiSrv.saveCampaign($scope.loggedInUser.securityUserId+'/campaign',$scope.campaign,function(data){
                    console.log('data------------',data.plain());
                    $scope.campaign = data.plain();
                    console.log('$scope.campaign ------------- ',$scope.campaign);
                    $scope.campaign = {};
                    $state.go('app.home.campaign.all');
                });
                
            });

            // CAMPAIGN SAVE
            $scope.$on(Global.EVENTS.CAMPAIGN_SAVE,function(event, data){
                //$scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
                console.log("Campaign -------------------- ",$scope.campaign);
               
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
               
                CampaignApiSrv.saveCampaign($scope.loggedInUser.securityUserId+'/campaign',$scope.campaign,function(data){
                    console.log('data------------',data.plain());
                    $scope.campaign = data.plain();
                    console.log('$scope.campaign ------------- ',$scope.campaign);
                    $state.go('app.home.campaign.detail');
                });
              
            });

            // GET LIST OF ALL CAMPAIGNS FOR A GROUP
            CampaignApiSrv.getAllCampaignList($scope.loggedInUser.securityUserId+'/campaign/all',null,function(data){
                $scope.allCampaignList = data.plain()   
                console.log('All campaignList ------- ',  $scope.allCampaignList);
            });
            
            //GET CAMPAIGN LIST OF LOGGEDIN USER
            CampaignApiSrv.getCampaignListByUser($scope.loggedInUser.securityUserId+'/campaign',null,function(data){
                $scope.campaignList = data.plain()   
                console.log('User campaignList ------- ',  $scope.campaignList);
            });


            $scope.getCampaignDetail = function(resourceData){
                if(resourceData){
                    console.log('resourceData ------------ ',resourceData);
                    $scope.campaign = resourceData;
                    console.log('campaign ------------ ',$scope.campaign);
                    $state.go('app.home.campaign.detail')
                }
            }

            $scope.getCampaignEdit = function(resourceData){
                if(resourceData){
                   // console.log('resourceData ------------ ',resourceData);
                    $scope.campaign = resourceData;
                    console.log('campaign ------------ ',$scope.campaign);
                    $state.go('app.home.campaign.edit')
                }
            } 

            $scope.EditCampaignDetail =  function(resourceData){
                if(resourceData){
                   // console.log('resourceData ------------ ',resourceData);
                    $scope.campaign = resourceData;
                    console.log('campaign ------------ ',$scope.campaign);
                    $state.go('app.home.campaign.edit')
                }
            }
           

        }]);
})(angular);