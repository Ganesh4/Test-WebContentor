/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){

    angular.module('microsite').directive('wcLeftNav',
        ['$state',
        function(state){
            return{
                restrict:'AE',
                templateUrl:'./views/commons/leftnav/leftnav.html',
                link : function(scope, element, attr){
                    
                    scope.$watch(function(scope){
                        return state.current.name;
                    },function(newValue,oldValue){
                        console.log(' state.current.data.LeftNavList' , state.current.data.LeftNavList);
                        if(newValue!==undefined)
                            scope.LeftNavList = state.current.data.LeftNavList;
                    });
                },
            }
        }
    ])
})(angular);