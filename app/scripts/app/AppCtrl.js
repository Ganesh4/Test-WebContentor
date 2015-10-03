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
       		function($scope,$state, $q, ApiSrv, CommonSrv, Global, UserApiSrv){
				
				$state.args = [];
				$scope.user = {};
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
	                UserApiSrv.addNewUser( 'users', user,function(response){
	                	if(data.state)
	                		$state.$go(data.state);
	                });
	            });

	            $scope.enableNext = function(){
	            	CommonSrv.enableNext($scope);
	            }
	            $scope.disableNext = function(){
	            	CommonSrv.disableNext($scope);	
	            }
			}
		]);
})(angular);