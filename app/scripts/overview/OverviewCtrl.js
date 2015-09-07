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
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'ASC'
			};  
			OverviewApiSrv.getUserDesigns(1, {
				filter : $scope.filter
			}, function(data){

				$scope.templates = new Array(data.plain());
				console.log('Templates -----------  ' , 	$scope.templates );
			});		

		}
	]);
})(angular);



	