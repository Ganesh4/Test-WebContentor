
'use strict';

(function(angular){

  angular.module('design').controller('DesignCtrl',
    [
		'$scope',
		'DesignSrv',
		function($scope, DesignSrv){
			$scope.design = {};
			$scope.files = [];
			$scope.uploadDesign = function(){
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
					$scope.files.push(args);
		        });
		    });	    
	    }
    ]);
})(angular);



