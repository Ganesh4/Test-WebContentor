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
                    displayName: 'First Name',
					cellClass : 'name-color'
                },{
                    field:'Lastname', 
                    displayName:'Last Name',
					cellClass : 'green-color'
                },{
                    field:'Email',
                    displayName:'Email',
					cellClass: 'orange-color'
                },{
                    field:'CreatedDate',
                    displayName:'Created Date',
					cellClass: 'blue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.CreatedDate | FormatDateFilter}}</div>'
                },{
                    field:'ModificationDate',
                    displayName:'Modification Date',
					cellClass: 'skyblue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.ModificationDate | FormatDateFilter}}</div>'
                },{
                    field:'UserRoles.SecurityGroupID',
                    displayName:"Roles",
					cellClass : 'green-color'
                }]
            } 
            UserApiSrv.getUserList('users',param, 
                function(data){
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });

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

