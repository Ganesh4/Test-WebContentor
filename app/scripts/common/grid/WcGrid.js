


'use strict';

(function(angular){
angular.module('user').directive('wcGrid',[
    '$state',
    'Global', 
    function(state, Global) {
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
                        scope.$emit(Global.EVENTS.GRID_ROW_DATA,scope.gridApi.selection.getSelectedRows());
                        scope.$emit(Global.EVENTS.DELETE_BTN_ENABLE);
                        scope.$emit(Global.EVENTS.EDIT_BUTTON_ENABLE);
                        scope.$emit(Global.EVENTS.GET_RECIPIENT_BY_LIST);
                    });
                }
            }
        }
    }]);
})(angular);
