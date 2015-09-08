'use strict';
(function(angular){
 	angular.module('overview').controller('toggelCtrl',
		function ($scope) {
			//This will hide the DIV by default.
			$scope.IsHidden = false;
			$scope.ShowHide = function () {
				//If DIV is hidden it will be visible and vice versa.
				$scope.IsHidden = $scope.IsHidden ? false : true;
			}
		});
})(angular);
