'use strict';

(function(angular){

angular.module('microsite').directive('wcButton',function(){
		return{
			restrict:'AE',
			templateUrl:'./views/commons/buttons/button.html',                
			controller:('toggelCtrl',['$scope'],function($scope){
				$scope.IsHidden = false;
					$scope.ShowHide = function () {
					//If DIV is hidden it will be visible and vice versa.
					$scope.IsHidden = $scope.IsHidden ? false : true;
	    	 }    
		  })
	  };
  });
})(angular);