'use strict';

(function(angular){

	angular.module('overview').controller('TemplateBoxCtrl',
		[
		'$scope',
		'$state',
		'OverviewApiSrv',
		'CommonSrv',
		function($scope,$state,OverviewApiSrv,CommonSrv){
			
			
			$scope.selectTemplate = function(data){
				$scope.selectedTemplate = data.template; 
				CommonSrv.template = $scope.selectedTemplate;
				$state.go('home.design.detail');
			}
      		
		}]);

})(angular);
