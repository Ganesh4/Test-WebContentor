/**
 * Created by subhash on 25/08/15.
 */
'use strict';
(function(angular){
    angular.module('assets').directive('wcOnOffButton',function(){
        return{
            restrict:'AE',
            scope:{
            	'isHidden':'='
            },
            templateUrl:'./views/assets/onOffButton.html',
            link:function($scope){
				console.log('$scope.isHidden ' , $scope.isHidden );
				$scope.showHide = function () {
					//If DIV is hidden it will be visible and vice versa.
					$scope.isHidden = $scope.isHidden ? false : true;
                    
                    console.log('$scope.isHidden',$scope.isHidden);
				}
        	}
    	}
})})(angular);

