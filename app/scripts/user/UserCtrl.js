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
                       

        '$cookieStore',
        function($scope ,$state, ApiSrv,CommonSrv,UserApiSrv,Global,$cookieStore){
            $scope.loggedInUser = $cookieStore.get('loggedInUser');
            console.log('$scope ----------- ',$scope.loggedInUser);
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
            


            ApiSrv.getList('roles',param,function(data){
                if(data)
                    $scope.roles = data.plain();
                console.log('Roles ---------------- ',$scope.roles);
            });

            CommonSrv.getCountriesList(function(data){
              $scope.countries = data.plain();
              console.log('countries-------------',$scope.countries);
            });
            
           // console.log('Countries ------------ ',$scope.coun);
            $scope.updateCountry = function(){
              $scope.states = $scope.user.country.SecurityStates;
            }
           
        }
    ]);
})(angular);
