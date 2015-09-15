/**
*
**/
'use strict';
(function(angular){
	angular.module('editor').controller('TemplatePreviewCtrl',
		[
			'$scope',
			'$stateParams',
			'DesignSrv',
			function($scope, $stateParams, DesignSrv){
				console.log('Template Id ------  ', $stateParams.templateId);
				$scope.url = 'https://s3.amazonaws.com/webcontentor-microsite/microsite/index.html';
			
			
			}
		]
)})(angular);