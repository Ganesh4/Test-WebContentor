'use strict';

(function(angular){

	angular.module('app').controller('AppCtrl',
		[
			'$scope',
			'$state',
			'$q',
			'ApiSrv',
			'CommonSrv',
       		function($scope,$state, $q, ApiSrv, CommonSrv){
				$state.args = [];
				CommonSrv.getDesignCategories(function(data){
			    	console.log('Args in AppCtrl --------  ' , data.plain());

					var defer =  $q.defer();
					defer.resolve(data.plain());
			    	
			    	if(data)
		    			$state.args = data.plain();
		    		return defer.promise;
			    }) ;
			    $scope.froalaOptions = {
        			buttons : ["bold", "italic", "underline", "sep", "align", "insertOrderedList", "insertUnorderedList"]
    			}
    			//$scope.froalaOptions.froala("getSelection");
			}
		]);
})(angular);