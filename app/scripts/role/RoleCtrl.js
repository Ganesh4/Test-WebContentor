
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
        'Global',
        function($scope ,$state, ApiSrv,CommonSrv,RoleApiSrv,Global){
                       
            var param = {};
            $scope.roles ={};
            $scope.roleData={};
            $scope.gridOptions = {
                multiSelect: true,
                enableRowSelection:true,
                columnDefs: [{
                    field: 'roleName', 
                    displayName: 'Role Name',
                    cellClass : 'darkgrey-color'
                },{
                    field: 'description', 
                    displayName: 'Description',
                    cellClass: 'orange-color'

                },{
                    field: 'createdDate', 
                    displayName: 'Created Date',
                    cellClass: 'blue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.createdDate | FormatDateFilter}}</div>'
                },{
                    field: 'modifiedDate', 
                    displayName: 'Modification Date',
                    cellClass: 'skyblue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.modifiedDate | FormatDateFilter}}</div>'

                }]
            } 

             RoleApiSrv.getRoleList($scope.loggedInUser.securityUserId+'/roles',param, 
                function(data){
                    console.log('Roles ------------ ',data.plain());
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });

             //Add User Roles For Yavun UI
             $scope.$on(Global.EVENTS.ADD_ROLE,function(event, data){ 
                var roles = $scope.roles;
              RoleApiSrv.addRole($scope.loggedInUser.securityUserId+'/roles',roles,function(response){
                alert('Add Role Successfully');
                    $state.go('app.home.manage.role.list');
                    $scope.$edit(Global.EVENTS.RELOAD);
              })  
            });

             $scope.$on(Global.EVENTS.DELETE_ROLE,function(){ 
                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var roles = $scope.gridRowSelectedData[0];
                    console.log('roles ------- ',roles);
                    self.deleteRole(roles.securityRoleId);

                }   
            });

             //Delete Role Functionality...
             self.deleteRole = function(id){
           RoleApiSrv.deleteRole($scope.loggedInUser.securityUserId+'/roles/'+id,null,function(data){
                alert('Role Deleted Successfully ');
                $scope.$emit(Global.EVENTS.RELOAD);
            });
             }
             $scope.$on(Global.EVENTS.EDIT_ROLE,function(event,data){
                if(!_.isEmpty($scope.gridRowSelectedData)){
                 var roleData = $scope.gridRowSelectedData[0];
                       $scope.roles = roleData;

                      console.log('roleData------',$scope.roles);
                       $state.go('app.home.manage.role.edit');
                

                }

            });

             $scope.$on(Global.EVENTS.UPDATE_ROLE,function(){
               var roles = $scope.roles;

              RoleApiSrv.updateRole($scope.loggedInUser.securityUserId+'/roles',roles,function(data){
                //console.log('Updated  ------- ',data.plain());
                alert('Role Update Successfully');
                $scope.$edit(Global.EVENTS.RELOAD);
                $state.go('app.home.manage.role.list');
                $scope.roles ="";


              });

             });
              
        }
    ]);
})(angular);

