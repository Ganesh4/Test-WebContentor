/**
*
**/
'use strict';
(function(angular){
angular.module('overview').controller('OverviewCtrl',
	[
		'$scope',
		'Restangular',		
		function($scope, Restangular){
			Restangular.all('template').getList().then(function(result){
				$scope.templates = result;	
				console.log("DATA ----------------- ",$scope.templates);
		    });

		    $scope.subheader = $scope.$parent.subheader;
		    $scope.subheader.title = 'Overview';
			$scope.isHidden = false;    
			$scope.repeatRow = [{"name" : "User Created" },{"name" : "Featured"},{"name" : "Music"}];  
		}
	]);
})(angular);



	