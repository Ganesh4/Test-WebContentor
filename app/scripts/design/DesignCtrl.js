
'use strict';

(function(angular){

  angular.module('design').controller('DesignCtrl',
    [
		'$scope',
		function($scope){
			$scope.design = {};
			$scope.files = [];
			$scope.uploadDesign = function(){
				console.log($scope.files);

			}
		    //listen for the file selected event
		    $scope.$on("fileSelected", function (event, args) {
		        $scope.$apply(function () {            
					//add the file object to the scope's files collection
					$scope.files.push(args);
		        });
		    });	    
	    }
    ]);
})(angular);



