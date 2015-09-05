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
		function($scope, Restangular, OverviewApiSrv){
			$scope.subheader = $scope.$parent.subheader;
			$scope.subheader.title = 'Overview';
			$scope.isHidden = false;    
			$scope.repeatRow = [{"name" : "My Designs" },{"name" : "Featured"},{"name" : "Music"}];
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'ASC'
			};  
			OverviewApiSrv.getUserDesigns(1, $scope.filter, function(data){
				$scope.templates = data;
			});		

		}
	]);
})(angular);



	