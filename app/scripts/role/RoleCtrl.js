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
                    displayName: 'Role Name'
                },{
                	field: 'IsSystemRole', 
                    displayName: 'System Role'
                },{
                    field: 'Description', 
                    displayName: 'Description'
                },{
                    field: 'CreatedDate', 
                    displayName: 'Created Date'
                },{
                    field: 'ModifyDate', 
                    displayName: 'Modify Date'
                }]
            } 
            RoleApiSrv.getRoleList('SecurityRole',param, 
                function(data){
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });
        }
    ]);
})(angular);
