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
            $scope.elements = $state.current.data.elements;
            $scope.formBtns = $state.current.data.formButtons;
            $scope.submitEvent = $state.current.data.submitEvent;
            console.log('$scope ----------- ',$scope.loggedInUser);
            var param = {};
            $scope.gridOptions = {
                columnDefs: [{
                    field: 'FirstName', 
                    displayName: 'First Name',
                    cellClass : 'darkgrey-color'
                },{
                    field:'Lastname', 
                    displayName:'Last Name',
                    cellClass : 'green-color'
                },{
                    field:'Email',
                    displayName:'Email',
                    cellClass : 'orange-color'
                },{
                    field:'UserRoles.SecurityGroupID',
                    displayName:"Roles",
                    cellClass : 'blue-color'
                },{
                    field:'CreatedDate',
                    displayName:'Created Date',
                    cellClass : 'skyblue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.CreatedDate | FormatDateFilter}}</div>'
                },{
                    field:'ModificationDate',
                    displayName:'Modification Date',
                    cellClass : 'green-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.ModificationDate | FormatDateFilter}}</div>'
                   
                }]
            } 

            UserApiSrv.getUserList($scope.loggedInUser.securityUserID+'/users',param, 
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
            

            CommonSrv.getCountriesList(function(data){
              $scope.countries = data.plain();
              console.log('countries-------------',$scope.countries);
            });
            
           // console.log('Countries ------------ ',$scope.coun);
            $scope.updateCountry = function(){
              $scope.states = $scope.user.country.SecurityStates;
            }

             ApiSrv.getList('roles',param,function(data){
                if(data)
                    $scope.roles = data.plain();
                console.log('Roles ---------------- ',$scope.roles);
            });

             //Delete User Functionality..
             self.deleteUser = function(id){

                UserApiSrv.deleteUser($scope.loggedInUser.securityUserID+'/users/'+id, null, function(data){
                    alert('Deleted Successfully');
                    $scope.$emit(Global.EVENTS.RELOAD);
                })
             }

            $scope.$on(Global.EVENTS.DELETE_USER,function(){

                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var userData = $scope.gridRowSelectedData[0];
                    console.log('userData ------- ',userData);
                    self.deleteUser(userData.SecurityUserId);
                }
            });

            $scope.$on(Global.EVENTS.EDIT_USER,function(){
                 if(!_.isEmpty($scope.gridRowSelectedData)){
                    var userData = $scope.gridRowSelectedData[0];
                    console.log('userData ------- ',userData);
                    //self.deleteUser(userData.SecurityUserId);
                    $scope.user = userData;
                    $state.go('app.home.manage.user.edit');
                }
            })
           
        }
    ]);
})(angular);
