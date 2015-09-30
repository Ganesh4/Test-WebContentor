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
        function($scope ,$state, ApiSrv,CommonSrv,UserApiSrv){
                       
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
                    displayName:'Created Date'
                },{
                    field:'ModificationDate',
                    displayName:'Modification Date'
                },{
                    field:'UserRoles.SecurityGroupID',
                    displayName:"Roles"
                }]
            } 
            UserApiSrv.getUserList('ManageUser',param, 
                function(data){
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });
        }
    ]);
})(angular);
