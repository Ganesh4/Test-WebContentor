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
			'DesignApiSrv',
			'x2js',
			'TemplateApiSrv',
			function($scope, Restangular, $stateParams, DesignApiSrv, x2js, TemplateApiSrv){
				
				/*dragulaService.options($scope, 'menu', {
      				copy: true
    			});
				*/
				Restangular.setBaseUrl('http://192.168.1.24/MicroS/');
				console.log('Template Id --------- ',$stateParams.templateId);
				DesignApiSrv.getDesignById($stateParams, function(data){
					if(data){
						$scope.design = data.plain();
						var url = $scope.design.template.url;
						TemplateApiSrv.getTemplateXmlData($stateParams.userId, {
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