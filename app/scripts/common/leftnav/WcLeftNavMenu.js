/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){

    angular.module('microsite').directive('wcLeftNavMenu',[
            '$state',
            function($state){
                return {
                    restrict : 'AE',
                    scope :{
                        data : '='
                    },
                    templateUrl : './views/commons/leftnav/LeftNavMenu.html',
                    link : function(scope, element, attr){
                        
                         console.log('data --------  ' , scope.data);
                    }
                }   
            }
        ])
})(angular);