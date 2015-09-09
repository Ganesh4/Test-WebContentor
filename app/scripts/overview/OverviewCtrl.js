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
			//$scope.subheader.breadcrumb = ['home','overview'];
			 console.log('Subheader Data ---------------- ',$scope.subheader);
			$scope.isHidden = false;   
			$scope.templates = [];
			$scope.templateType = ''; 
			$scope.templateData = [];
			$scope.categories = [];
			//$scope.selectedTemplate = {};
			

			console.log('breadcrumbs ------------ ',$scope.breadcrumb)
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'ASC'
			};

			$scope.btns = [
				{
					name : 'Category',
					btnType : 'select',
					templateUrl : 'views/assets/select.html',
					data : [{label: 'All Templates'},{label: 'None'}]
				},
				{
					name : 'Age',
					btnType : 'select',
					templateUrl : 'views/assets/select.html',
					data : [{label: 'Age'},{label: 'None'}]
				}

			];
		}
	]);
})(angular);



	