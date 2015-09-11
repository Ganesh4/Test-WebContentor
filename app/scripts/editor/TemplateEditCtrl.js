/**
*
**/
'use strict';
(function(angular){
	angular.module('editor').controller('TemplateEditCtrl',
		[
			'$scope',
			'Restangular',
			'$http',
			function($scope,Restangular,$http){
				$scope.url = 'https://s3.amazonaws.com/webcontentor-microsite/microsite/index.xml';
				var request = $http({
					method: "get",
					url: $scope.url,
				});
				request.then(function(data){
					console.log(data);
				});
			}
		]
)})(angular);