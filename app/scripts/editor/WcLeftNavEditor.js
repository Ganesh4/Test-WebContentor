/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('editor').directive('wcLeftNavEditor',
    [
        '$state',
        function($state){
            return{
                restrict:'AE',
                templateUrl:'./views/commons/leftnav/LeftNavEditor.html',
                link:function(scope){
                    scope.menus = $state.current.data.mainMenu;
                    scope.path = $location.path();
                }
            }
    }])
})(angular);