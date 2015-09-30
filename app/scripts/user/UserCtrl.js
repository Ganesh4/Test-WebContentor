/*
*
*/
'use strict';
(function(angular){
angular.module('user').controller('UserCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        'UserApiSrv',
        'Global',
        function($scope ,$state, ApiSrv,CommonSrv,UserApiSrv, Global){
                       
            var param = {};
            $scope.gridOptions = {
                multiSelect: true,
                enableRowSelection:true,
                columnDefs: [{
                    field: 'FirstName', 
                    displayName: 'First Name'
                },{
                    field:'Lastname', 
                    displayName:'Last Name'
                },{
                    field:'Email',
                    displayName:'Email'
                },{
                    field:'CreatedDate',
                    displayName:'Created Date',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.CreatedDate | FormatDateFilter}}</div>'
                },{
                    field:'ModificationDate',
                    displayName:'Modification Date',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.ModificationDate | FormatDateFilter}}</div>'
                   // cellFilter:' date : MM-dd-yyyy hh:mm:ss'
                },{
                    field:'UserRoles.SecurityGroupID',
                    displayName:"Roles"
                }]
            } 
            UserApiSrv.getUserList('users',param, 
                function(data){
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });

          
        }
    ]);
})(angular);
