<<<<<<< HEAD
'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
        'CampaignApiSrv',
		function($scope,$state,Restangular,CampaignApiSrv){
            console.log("$scope.loggedInUser ----------- ",$scope.loggedInUser);
            console.log($scope.loggedInUser.securityUserID,'---------',$scope.loggedInUser.groupId);
            
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

            $scope.openedStart = true;
            };
            // open min-cal
            $scope.openEnd = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.openedEnd = true;
            };

            $scope.clearEndDate = function(){
            $scope.campaign.endDate = null;
            }
            // handle formats
            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];

            // assign custom format
            $scope.format = $scope.formats[0];   

            CampaignApiSrv.getCampaignFeatures('features',{},function(data){
                $scope.featureList = data.plain()   
                console.log('Feature List ------- ',  $scope.featureList);
              
            });



        }]);
=======
'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
        'CampaignApiSrv',
		function($scope,$state,Restangular,CampaignApiSrv){
            console.log("$scope.loggedInUser ----------- ",$scope.loggedInUser);
            console.log($scope.loggedInUser.securityUserID,'---------',$scope.loggedInUser.groupId);
            
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

            CampaignApiSrv.getCampaignFeatures('features',{},function(data){
                $scope.featureList = data.plain()   
                console.log('Feature List ------- ',  $scope.featureList);
            });



        }]);
>>>>>>> 2d8db67af192346792cc666fe5cff15b3f5b3b64
})(angular);