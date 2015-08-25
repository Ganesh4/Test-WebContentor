/**
 * Created by subhash on 25/08/15.
 */
'use strict';

(function(angular){

    angular.module('overview').directive('wcTemplateBox',function(){
        return{

            restrict:'AE',
            templateUrl:'./views/overview/wcTemplateBox.html',
            controller:('TemplateCtrl',['$scope'],function($scope){
                        
                      



                      
            })
        }
    })
})(angular);
