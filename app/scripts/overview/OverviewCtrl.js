/**
*
**/
'use strict';
(function(angular){
  angular.module('overview').controller('OverviewCtrl',
    [
		'$scope',
		'Restangular',
		'ApiSrv',
		function($scope, Restangular, ApiSrv){
		Restangular.all('template').getList().then(function(result){
			/*console.log('My data ------------- ',result[0].id);	
			console.log('My data ------------- ',result[0].screenshots);	
			console.log('My data ------------- ',result[0].title);	
			console.log('My data ------------- ',result[0].age);	
			console.log('My data ------------- ',result[0].category);*/
			$scope.templates = result;	
			console.log("DATA ----------------- ",$scope.templates);
	    });
	    $scope.subheader = $scope.$parent.subheader;
	    $scope.subheader.title = 'Overview';
		$scope.isHidden = false;    
		$scope.repeatRow = [{"name" : "User Created" },{"name" : "Featured"},{"name" : "Music"}];  
    }]);
})(angular);



