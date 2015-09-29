/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('subheader').directive('wcSubHeader',
        [
        '$state',
        function(state){
            return{
                restrict:'AE',
                templateUrl:'./views/commons/subheader/SubHeader.html',
                scope : true,
                link : function(scope,elem,attrs){
                    scope.$watch(function(scope){
                            return state.current.name;
                        },function(newValue,oldValue){
                            if(newValue!==undefined)
                                scope.actionBarBtn = state.current.data.actionBarBtn;
                    });
                }

            }
        }])
     })(angular);