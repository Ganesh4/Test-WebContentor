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
        function($scope ,$state, ApiSrv,CommonSrv,UserApiSrv,Global){
                       
            var param = {};
            $scope.user;
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

             $scope.$on(Global.EVENTS.ADD_NEW_USER,function(event, data){
                UserApiSrv.addNewUser( 'users', $scope.user,function(data){

                });
            });
        }
    ]);
})(angular);
