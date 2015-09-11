/**
*
**/
'use strict';
(function(angular){
	angular.module('editor').controller('TemplatePreviewCtrl',
		[
			'$scope',
			function($scope){
				$scope.url = 'https://s3.amazonaws.com/webcontentor-microsite/microsite/index.html';
			}
		]
)})(angular);