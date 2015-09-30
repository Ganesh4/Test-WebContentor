


'use strict';

(function(angular){
angular.module('user').directive('wcGrid',[
    '$state', 
    function(state) {
        return{
            restrict:'AE',
            template:'<div ui-grid="gridOptions">',
            scope: {
                gridOptions : '='
            },
            link: function(scope, element, attr){
                
            }
        }
    }
]);
})(angular);
