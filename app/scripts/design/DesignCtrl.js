
'use strict';

(function(angular){

  angular.module('design').controller('DesignCtrl',
    [
		'$scope',
		'DesignSrv',
		'$state',
		function($scope, DesignSrv,$state){
			$scope.design = {};
			$scope.files = {};
			//Select 2 Options to populate.
			console.log($state);
			$scope.select2Options = {
				'multiple': true,
				'simple_tags': true,
				'tags': $state.current.data.tags
			};
			$scope.uploadDesign = function(){
				$scope.design.seo.metaDescription = $scope.design.description;
				var data = {
					design : $scope.design,
					files: $scope.files
				}
				DesignSrv.saveDesign(1, data, function(response){
					console.log(response);
				});
			}
		    //listen for the file selected event
		    $scope.$on("fileSelected", function (event, args) {
		        $scope.$apply(function () {            
					//add the file object to the scope's files collection
					//$scope.files.push(args);
					_.extend($scope.files, args);
					console.log($scope.files);
		        });
		    });	 
		      $scope.subheader.title = 'Upload Design';  

		    DesignSrv.getDesignCategories(function(data){
		    	console.log('Categories --------  ' , data.plain());
		    	if(data)
		    		$scope.catagories = data.plain();
		    }) 
	    }
    ]);
})(angular);



