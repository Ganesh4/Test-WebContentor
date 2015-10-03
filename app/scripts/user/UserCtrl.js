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
        'validator',
        function($scope ,$state, ApiSrv,CommonSrv,UserApiSrv, Global,validator){
                       
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

            $scope.empty = false;
           
            $scope.checkValidation = function(){
            
                console.log('User---------',$scope.user);
                if(!$scope.user.firstName){
                    $scope.empty = true;
                }else if(!$scope.user.email){
                    $scope.empty = true;
                }else{
                    $scope.empty = false;
                }

                if($scope.empty == false){
                    $scope.enableNext();
                }else{
                    $scope.disableNext();
                }


            console.log('$scope.empty--------',$scope.empty);
           }          
            

          
        }
    ]);
})(angular);
