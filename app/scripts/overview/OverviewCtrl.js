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
				if(data)
					$scope.templates = data.plain();
				console.log('Templates -----------  ' , 	$scope.templates );
			});

			OverviewApiSrv.getCategoriesDesigns('featured',function(data){
				console.log("Design ----------  " , data.plain());
			});
		}
	]);
})(angular);



	