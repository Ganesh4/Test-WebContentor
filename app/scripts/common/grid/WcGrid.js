


'use strict';

(function(angular){
angular.module('user').directive('wcGrid',[
    '$state', 
    function(state) {
        return{
            restrict:'AE',
            template:'<div ui-grid="gridOptions" ui-grid-selection class="grid"></div>',
            scope: {
                gridOptions : '='
            },
            link: function(scope, element, attr){
                scope.gridOptions.enableRowHeaderSelection = false
                scope.gridOptions.enableRowSelection = true; 
                scope.gridOptions.multiSelect = false;
                scope.gridOptions.modifierKeysToMultiSelect = false;
                scope.gridOptions.noUnselect = true;
                scope.gridOptions.onRegisterApi = function(gridApi){
                    //set gridApi on scope
                    scope.gridApi = gridApi;
                    gridApi.selection.on.rowSelectionChanged(scope, function(row){
                        var msg = 'row selected ' + row.isSelected;
                        console.log(row);
                    });
                }
            }
        }
    }]);
})(angular);
