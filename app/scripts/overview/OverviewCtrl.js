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
			//$scope.subheader.breadcrumb = ['home','overview'];
			
			$scope.isHidden = false;   
			$scope.templates = [];
			$scope.templateType = ''; 
			$scope.templateData = [];
			$scope.categories = [];
			//$scope.selectedTemplate = {};
			// $scope.options = ['1','2'];
			$scope.filter = {
				size : 3, 
				orderBy : 'createdDate',
				page : 1,
				sortBy : 'DESC'
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



	