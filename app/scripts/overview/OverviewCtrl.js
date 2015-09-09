/**
*
**/
'use strict';
(function(angular){
angular.module('overview').controller('OverviewCtrl',
	[
	    
		'$scope',
		'$state',
		'Restangular',
		'OverviewApiSrv',
		'CommonSrv',
		function($scope,$state, Restangular, OverviewApiSrv,CommonSrv){
			$scope.subheader = $scope.$parent.subheader;
			$scope.subheader.title = 'Overview';
			$scope.isHidden = false;   
			$scope.templates = [];
			$scope.templateType = ''; 
			$scope.templateData = [];
			$scope.categories = [];
			$scope.selectedTemplate = {};
			
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'ASC'
			};

			$scope.selectTemplate = function(data){
				$scope.selectedTemplate = data.template; 
				console.log('Selected Template ------------ ',$scope.selectedTemplate);
				$state.go('home.design.detail');
			}
		}
	]);
})(angular);



	