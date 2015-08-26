
'use strict';

(function(angular){

  angular.module('overview').controller('OverviewCtrl',
    [
		'$scope',
		'Restangular',
		function($scope,Restangular){
		Restangular.all('template').getList().then(function(result){
			/*console.log('My data ------------- ',result[0].id);	
			console.log('My data ------------- ',result[0].screenshots);	
			console.log('My data ------------- ',result[0].title);	
			console.log('My data ------------- ',result[0].age);	
			console.log('My data ------------- ',result[0].category);*/
			$scope.templates = result;	
			console.log("DATA ----------------- ",$scope.templates);
	    });

		$scope.usercreated = 'usercreated';
		$scope.featured = 'featured';
		$scope.music = 'music';
		$scope.isHidden = false;    
		$scope.repeatRow = [{"name" : "usercreated" },{"name" : "featured"},{"name" : "music"}];  
    }]);

})(angular);



