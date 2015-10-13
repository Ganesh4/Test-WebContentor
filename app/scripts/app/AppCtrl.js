
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
			'CampaignApiSrv',
			'Restangular',
			'ImageApiSrv',
			'$cookieStore',
			'$stateParams',
       		function($scope,$state, $q, ApiSrv, CommonSrv, Global, UserApiSrv,CampaignApiSrv, Restangular,ImageApiSrv,$cookieStore,$stateParams){
				var param = {};
				$state.args = [];
				$scope.user = {};
				$scope.image = {};
				$scope.countries = {};
				$scope.loggedInUser = {};
				$scope.campaign = {};
				$scope.files = [];
				$scope.featureList = {};
				$scope.gridRowSelectedData = [];
				var wizardSteps = $state.current.data.wizardSteps;
				
				
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
    			
    				if($state.current.name.indexOf('resources') != -1 ||
    					$state.current.name.indexOf('page') != -1){
    					console.log($state.current.name);
    					Restangular.setBaseUrl('http://192.168.1.34:8080/MicroS/');
    					ApiSrv.accessToken();	
    				}else{
    					Restangular.setBaseUrl('http://192.168.1.69/Yavun/api');
    					Restangular.configuration.defaultRequestParams = {};	
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
	               console.log('User ------- ',data);
	               var user = data;
	               if(!_.isUndefined(user.country))
		                user.country = $scope.user.country.SecurityCountryID;
	               if(!_.isUndefined(user.state))
		                user.state = $scope.user.state.SecurityStateID;
		                UserApiSrv.addNewUser( 'user/register', user,function(response){
		                	$state.go('app.register.success');
		                	console.log("Success");
		                },function(response){
		                	console.log("Error");
	                });
	            });

            	 $scope.$on(Global.EVENTS.CAMPAIGN_SAVE,function(event, data){

	            	$scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
	            	console.log('campaign-----------',$scope.campaign);
	            	ApiSrv.post('campaign',$scope.campaign,function(data){
	            		console.log('data------------',$scope.campaign);
	            	});
	            	$state.go('app.home.campaign.detail');
	            });

            	 $scope.$on(Global.EVENTS.CAMPAIGN_SAVE_EXIT,function(event, data){
	            	$scope.campaign.campaignFeatureId = _.keys($scope.campaign.campaignFeatureId);
             	
	            	console.log('campaign-----------',$scope.campaign);
	            	ApiSrv.post('campaign',$scope.campaign,function(data){
	            		console.log('data------------',$scope.campaign);
	            });
	            	$state.go('app.home.campaign');
	            });

	            $scope.enableSave = function(){
	            	CommonSrv.enableSave($scope);
	            }
	            
	            $scope.disableSave = function(){
	            	CommonSrv.disableSave($scope);	
	            }
           	    //listen for the file selected event
			    $scope.$on("fileSelected", function (event, args) {
			        $scope.$apply(function () {            
						//add the file object to the scope's files collection
						$scope.files.push(args);
						//_.extend($scope.files, args);
						console.log($scope.files);
			        });
			    });

			    if($cookieStore.get('loggedInUser') == undefined){
			    	$state.go('app.login')
			    }else{
			    	$scope.loggedInUser = $cookieStore.get('loggedInUser');
			    	$scope.userGroupUri = $scope.loggedInUser.securityUserID+'/'+$scope.loggedInUser.groupId+'/';
			    }
			    
			    //Selected data of the grid.
			    $scope.$on(Global.EVENTS.GRID_ROW_DATA,function(event , data){
                	if(data)
                    	$scope.gridRowSelectedData = data;
            	});

            	//Reload Data of the State
            	$scope.$on(Global.EVENTS.RELOAD, function(event , data){
					//This Will Reload All The States
            		$state.transitionTo($state.current, $stateParams, {
					    reload: true,
					    inherit: false,
					    notify: true
					});
            	});

			}
		]);
})(angular);