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
			'dragulaService',
			function($scope, $http, $stateParams, DesignSrv, x2js, dragulaService){
				
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
						$scope.showSubMenu = function(mainMenu){
						
						var subMenuItem = [];
						if(mainMenu == 'add'){
							var item_01 = { name : 'Section' }
							var item_02 = { name : 'Images' }
							var item_03 = { name : 'Video' }
							var item_04 = { name : 'Icons' }
							var item_05 = { name : 'Button' }
							var item_06 = { name : 'Graph' }
							var item_07 = { name : 'Shapes' }
							var item_08 = { name : 'Side Navigation' }
							var item_09 = { name : 'Slider' }
							$scope.isAddMenu = true;
							subMenuItem = [item_01,item_02,item_03,item_04,item_05,item_06,item_07,item_08,item_09];
							$scope.title='Add Content';
						}else if (mainMenu == 'section'){
							var item_01 = { name : 'Problem' }
							var item_02 = { name : 'Solution' }
							var item_03 = { name : 'Our Team' }
							subMenuItem = [item_01,item_02,item_03];
							$scope.title='Sections';
						}else if (mainMenu == 'widgets'){
							var item_01 = { name : 'Apps' }
							var item_02 = { name : 'Facebook' }
							var item_03 = { name : 'Twitter'  }
							var item_04 = { name : 'Linkedin' }
							var item_05 = { name : 'Google Plus'}
							subMenuItem = [item_01,item_02,item_03,item_04,item_05];
							$scope.title='Widgets';
						}
						$scope.listSubMenu(subMenuItem);
					}

					$scope.listSubMenu = function(data){
						$scope.subMenu = data;
						//$('')
					}
				}
		]
)})(angular);