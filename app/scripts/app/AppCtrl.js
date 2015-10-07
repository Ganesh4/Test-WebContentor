'use strict';

(function(angular){

	angular.module('app').controller('AppCtrl',
		[
			'$scope',
			'$state',
			'$q',
			'ApiSrv',
			'CommonSrv',
			'Global',
			'UserApiSrv',
			'Restangular',
       		function($scope,$state, $q, ApiSrv, CommonSrv, Global, UserApiSrv, Restangular){
				var param = {};
				$state.args = [];
				$scope.user = {};
				$scope.countries = {};
				$scope.loggedInUser = {};
				 $scope.campaign = {};
				var wizardSteps = $state.current.data.wizardSteps;
				ApiSrv.accessToken();
				
				/*
				CommonSrv.getDesignCategories(function(data){
			    	console.log('Args in AppCtrl --------  ' , data.plain());

					var defer =  $q.defer();
					defer.resolve(data.plain());
			    	
			    	if(data)
		    			$state.args = data.plain();
		    		return defer.promise;
			    }) ;
			   
    			ApiSrv.accessToken();
            	CommonSrv.getDesignCategories(function(response){
                if(response)
                    $scope.templateCategories = response.plain();
            	});
				*/
    			//$scope.froalaOptions.froala("getSelection");
    			$scope.$on('$stateChangeSuccess',function(event, data){
    				console.log($state.current.name);
    				if($state.current.name == 'app.home.manage.resources.images' ||
    				   $state.current.name == 'app.home.manage.resources.images'){
    					Restangular.setBaseUrl('http://192.168.1.34:8080/MicroS/');	
    				}else{
    					Restangular.setBaseUrl('http://192.168.1.69/Yavun/api');	
    				}
    				
    			});
    			$scope.froalaOptions = {
        			buttons : ["bold", "italic", "underline", "sep", "align", "insertOrderedList", "insertUnorderedList"]
    			}
    			$scope.$on(Global.EVENTS.NAVIGATE,function(event,data){
                	$state.go(data.state);
            	});

	            $scope.$on(Global.EVENTS.WIZARD_NEXT,function(event, data){
	                CommonSrv.goToNextStep(wizardSteps, $scope);
	            });

	            $scope.$on(Global.EVENTS.WIZARD_PREVIOUS,function(event, data){
	                CommonSrv.goToPreviousStep(wizardSteps, $scope);
	            });

	            $scope.$on(Global.EVENTS.WIZARD_CANCLE,function(event, data){
	            	if(data.state)
	            		$state.go(data.state);
	            });

	            $scope.$on(Global.EVENTS.ADD_NEW_USER,function(event, data){
	                console.log('User ------- ',$scope.user);
	                var user = $scope.user;
	                if(!_.isUndefined(user.country))
	                	user.country = $scope.user.country.SecurityCountryID;
	                if(!_.isUndefined(user.state))
	               		 user.state = $scope.user.state.SecurityStateID;
	                UserApiSrv.addNewUser( 'users', user,function(response){
	                	if(data.state)
	                		$state.go(data.state);
	                		
	                });
	            });


	            $scope.enableNext = function(){
	            	CommonSrv.enableNext($scope);
	            }
	            $scope.disableNext = function(){
	            	CommonSrv.disableNext($scope);	
	            }
	            $scope.$on(Global.EVENTS.USER_REGISTER,function(event, data){
	                console.log('User ------- ',$scope.user);
	                var user = $scope.user;
	               if(!_.isUndefined(user.country))
	                user.country = $scope.user.country.SecurityCountryID;
	              if(!_.isUndefined(user.state))
	                user.state = $scope.user.state.SecurityStateID;
	                UserApiSrv.addNewUser( 'user/register', user,function(response){
	                	$state.go('app.success');
	                	console.log("Success");
	                },function(response){
	                	console.log("Error");
	                });
	            });

            	 $scope.$on(Global.EVENTS.CAMPAIGN_SAVE,function(event, data){

	            	
	            	$scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
	            	console.log('campaign-----------',$scope.campaign);
	            });
             	
			}
		]);
})(angular);