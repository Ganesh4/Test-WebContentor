
'use strict';

(function(angular){

  angular.module('design').controller('DesignCtrl',
    [
		'$scope',
		'DesignApiSrv',
		'$state',
		'Restangular',
		function($scope, DesignApiSrv,$state,Restangular){
			
			$scope.design = {};
			$scope.index;
			Restangular.setBaseUrl('http://192.168.1.24/MicroS/');
			$scope.select2Options = {
	                'multiple': true,
	                'simple_tags': true,
	                'tags': ['Graphics']
	            };
		
			$scope.uploadDesign = function(){
				$scope.design.seo.metaDescription = $scope.design.description;
				/*var category = _.filter($scope.catagories,function(category){
					return category.id == $scope.index;
				});*/

				//$scope.design.category = category[0];
				var data = {
					design : $scope.design,
					files: $scope.files
				}
				console.log(data);
				DesignApiSrv.saveDesign(1, data, function(response){
					console.log(response);
				});
			}
		    
		    DesignApiSrv.getDesignCategories(function(data){
		    	console.log('Categories --------  ' , data.plain());
		    	if(data)
		    		$scope.catagories = data.plain();
		    }) 
	    }
    ]);
})(angular);



