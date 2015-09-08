/**
*
**/
'use strict';
(function(angular){
angular.module('overview').controller('OverviewCtrl',
	[
		'$scope',
		'Restangular',
		'OverviewApiSrv',
		'CommonSrv',
		function($scope, Restangular, OverviewApiSrv,CommonSrv){
			$scope.subheader = $scope.$parent.subheader;
			$scope.subheader.title = 'Overview';
			$scope.isHidden = false;   
			$scope.templates = [];
			$scope.templateType = ''; 
			$scope.templateData = [];
			$scope.categories = [];
			
			
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'ASC'
			}; 
		}
	]);
})(angular);



	