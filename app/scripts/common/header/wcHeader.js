/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('microsite').directive('wcHeader',
        [
        '$state',
        function(state){
        return{
            restrict:'AE',
            templateUrl:'./views/commons/header/header.html',
            link:function(scope,attr,element){

                scope.logo = state.current.data.logo;
                scope.$watch(function(scope){
                    return state.current.name;
                },function(newValue,oldValue){
                    if(newValue!==undefined){
                        scope.mainNav = state.current.data.mainNav;
                        scope.menues = state.current.data.menues;
                    }
                });
            }    
        }
    }])
})(angular);