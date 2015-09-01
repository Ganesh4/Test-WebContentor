/**
 * Created by subhash on 25/08/15.
 */
'use strict';

(function(angular){

    angular.module('overview').directive('wcUserTemplateBox',function(){
        return{

            restrict:'AE',
            templateUrl:'./views/overview/UserTemplateBox.html',
            controller:('UserTemplateBOxCtrl',['$scope'],function($scope){
                        
                      

                
                      
            })
        }
    })
})(angular);