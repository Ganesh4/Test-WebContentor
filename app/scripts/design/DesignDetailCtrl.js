/**
*
**/
'use strict';
(function(angular){
angular.module('design').controller('DesignDetailCtrl',
	[
		'$scope',
		'Restangular',
		'OverviewApiSrv',
		'CommonSrv',
		function($scope, Restangular, OverviewApiSrv, CommonSrv){
			$scope.subheader.title = 'Design Details';
			console.log('Selected Template -------------- ',$scope);
		}
	]);
})(angular);
