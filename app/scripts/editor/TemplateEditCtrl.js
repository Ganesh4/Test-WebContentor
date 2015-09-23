/**
*
**/
'use strict';
(function(angular){
	angular.module('editor').controller('TemplateEditCtrl',
		[
			'$scope',
			'Restangular',
			'$stateParams',
			'DesignSrv',
			'x2js',
			function($scope, $http, $stateParams, DesignSrv, x2js){
				
				/*dragulaService.options($scope, 'menu', {
      				copy: true
    			});
				*/
				console.log('Template Id --------- ',$stateParams.templateId);
				DesignSrv.getDesignById($stateParams, function(data){
					if(data){
						$scope.design = data.plain();
						var url = $scope.design.template.url;
						DesignSrv.getTemplateXmlData($stateParams.userId, {
							'resource':$scope.design.template.xmlFile
						}, function(data){
							if(data){
								$scope.html = data;
								console.log(x2js.xml_str2json(data.toString()));
							}
						});
					}
				});
						
				}
		]
)})(angular);