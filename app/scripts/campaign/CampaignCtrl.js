'use strict';
(function(angular){
	angular.module('campaign').controller('CampaignCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		'$cookieStore',
        'CampaignApiSrv',
		function($scope,$state,Restangular,$cookieStore,CampaignApiSrv){

            console.log($scope.loggedInUser.securityUserID,'---------',$scope.loggedInUser.groupId);
            
			$scope.data = $state.current.data;
            
            $scope.checkValidation = function(){

                console.log('---------',$scope.user);
                $scope.empty = false;
                if(!$scope.campaign.name){
                $scope.empty = true;
                }else if(!$scope.campaign.startDate){
                $scope.empty = true;
                 }else{
                $scope.empty = false;
                }

                if($scope.empty == false){
                    $scope.enableSave();
                }else{
                    $scope.disableSave();
                }


            console.log('$scope.empty--------',$scope.empty);

            }         			
            // grab today and inject into field
            $scope.today = function() {
            $scope.campaign.startDate = new Date();
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
})(angular);