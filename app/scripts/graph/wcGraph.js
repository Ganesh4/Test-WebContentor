'use strict';

(function(angular){

    angular.module('overview').directive('wcGraph',function(){
        return{

            restrict:'AE',
            templateUrl:'./views/graph/graph.html',
            controller:('graphCtrl',['$scope'],function($scope){
                        
                      
                      
            })
        }
    })
})(angular);
