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
                    field: 'RoleName', 
                    displayName: 'Role Name',
                    cellClass : 'name-color'
                },{
                	field: 'IsSystemRole', 
                    displayName: 'System Role',
                    cellClass : 'green-color'
                },{
                    field: 'Description', 
                    displayName: 'Description',
                    cellClass: 'orange-color'
                },{
                    field: 'CreatedDate', 
                    displayName: 'Created Date',
                    cellClass: 'blue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.CreatedDate | FormatDateFilter}}</div>'
                },{
                    field: 'ModifyDate', 
                    displayName: 'Modify Date',
                    cellClass: 'skyblue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.ModifyDate | FormatDateFilter}}</div>'
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
