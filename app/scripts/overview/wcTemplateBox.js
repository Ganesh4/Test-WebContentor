/**
 * Created by subhash on 25/08/15.
 */
'use strict';

(function(angular){

    angular.module('overview').directive('wcTemplateBox',function(){
        return{

            restrict:'AE',
            templateUrl:'./views/overview/TemplateBox.html',
            controller:('TemplateCtrl',['$scope'],function($scope){
                      
            })
        }
    })
})(angular);
