/*
*
*/
'use strict';
(function(angular){
angular.module('role').controller('RoleCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        'RoleApiSrv',
        function($scope ,$state, ApiSrv,CommonSrv,RoleApiSrv){
                       
            var param = {};
            $scope.gridOptions = {
                multiSelect: true,
                enableRowSelection:true,
                columnDefs: [{
                    field: 'roleName', 
                    displayName: 'Role Name'
                },{
                    field: 'description', 
                    displayName: 'Description'
                },{
                    field: 'createdDate', 
                    displayName: 'Created Date',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.createdDate | FormatDateFilter}}</div>'
                },{
                    field: 'modifiedDate', 
                    displayName: 'Modified Date',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.modifiedDate | FormatDateFilter}}</div>'
                }]
            } 
             RoleApiSrv.getRoleList('roles',param, 
                function(data){
                    console.log('Roles ------------ ',data);
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });
        }
    ]);
})(angular);
