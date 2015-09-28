/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('subheader').directive('wcSubHeader',
        [
        '$state',
        function(state)
        {


                return{
                    restrict:'AE',
                    templateUrl:'./views/commons/subheader/SubHeader.html',
                    scope : true,
                    link : function(scope,elem,attrs){
                        scope.$watch(function(scope){
                                return state.current.name;
                            },function(newValue,oldValue){
                                console.log(' state.current.data.subMenuList' , state.current.data.subMenuList);
                                if(newValue!==undefined)
                                    scope.subMenuList = state.current.data.subMenuList;
                        });
                    }

                }
        }])
     })(angular);