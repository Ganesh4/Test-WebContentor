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
                    templateUrl : './views/commons/leftnav/LeftNavMenu.html',
                    link : function(scope, element, attr){
                        scope.data = $state.current.data;
                        

                    }
                }   
            }
        ])
})(angular);