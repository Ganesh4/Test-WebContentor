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
             // console.log('captchaText ------- ',captchaText);
          
            console.log('$scope ----------- ',$scope.loggedInUser);
            var param = {};
           // $scope.user = {};
            
            $scope.gridOptions = {
                columnDefs: [{
                    field: 'firstName', 
                    displayName: 'First Name',
                    cellClass : 'darkgrey-color'
                },{
                    field:'lastName', 
                    displayName:'Last Name',
                    cellClass : 'green-color'
                },{
                    field:'email',
                    displayName:'Email',
                    cellClass : 'orange-color'
                },{
                    field:'securityRole.roleName',
                    displayName:"Roles",
                    cellClass : 'blue-color'
                },{
                    field:'createdDate',
                    displayName:'Created Date',
                    cellClass : 'skyblue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.createdDate | FormatDateFilter}}</div>'
                },{
                    field:'modifiedDate',
                    displayName:'Modification Date',
                    cellClass : 'green-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.modifiedDate | FormatDateFilter}}</div>'
                   
                }]
            } 

            UserApiSrv.getUserList($scope.loggedInUser.securityUserId+'/users',param, 
                function(data){
                    if(data)
                        $scope.gridOptions.data = data.plain();
                        console.log(data.plain());
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
                    $scope.$emit(Global.EVENTS.NEXT_BTN_ENABLE);
                }else{
                    $scope.$emit(Global.EVENTS.NEXT_BTN_DISABLE);
                }
                console.log('$scope.empty--------',$scope.empty);
           }          
            
            //Add User
            $scope.$on(Global.EVENTS.ADD_NEW_USER,function(event, data){
                var user = $scope.user;
                if(!_.isUndefined(user.country))
                    user.country = $scope.user.country.SecurityCountryID;
                if(!_.isUndefined(user.state))
                     user.state = $scope.user.state.SecurityStateID;
               
                UserApiSrv.addNewUser($scope.loggedInUser.securityUserId+'/users', user,function(response){
                    if(data.state)
                        $state.go(data.state);
                });
            });

            //Get Country List
            CommonSrv.getCountriesList(function(data){
              $scope.countries = data.plain();
              console.log('countries-------------',$scope.countries);
            });
            
           // Update State Drop Down According to Country
            $scope.updateCountry = function(){
              $scope.states = $scope.user.country.SecurityStates;
            }

            //Get Role List
             ApiSrv.getList($scope.loggedInUser.securityUserId+'/roles',param,function(data){
                if(data)
                    $scope.roles = data.plain();
                console.log('Roles List ---------------- ',$scope.roles);
            });

             //Delete User Functionality..
             self.deleteUser = function(id){

                UserApiSrv.deleteUser($scope.loggedInUser.securityUserId+'/users/'+id, null, function(data){
                    alert('Deleted Successfully');
                    $scope.$emit(Global.EVENTS.RELOAD);
                })
             }

            $scope.$on(Global.EVENTS.DELETE_USER,function(){

                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var userData = $scope.gridRowSelectedData[0];
                    console.log('userData ------- ',userData);
                    self.deleteUser(userData.securityUserId);
                }
            });

            //Edit USer Page Navigation
            $scope.$on(Global.EVENTS.EDIT_USER,function(){
                console.log(' $state.current.data.elements---', $state.current.data.elements);
                 if(!_.isEmpty($scope.gridRowSelectedData)){
                    var userData = $scope.gridRowSelectedData[0];
                    //self.deleteUser(userData.SecurityUserId);
                    $scope.user = userData;
                    console.log('userData ------- ', $scope.user);
                    /*console.log($scope.countries);
                     var country =  _.find($scope.countries,function(country){ return country.SecurityCountryID == $scope.user.country.countryid });
                    console.log('country ------- ', country);
                    $scope.user.country = country;*/
                    $state.go('app.home.manage.user.edit');
                }
            });
           
        }
    ]);
})(angular);
