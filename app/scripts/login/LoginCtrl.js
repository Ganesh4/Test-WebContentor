'use strict';

(function(angular){


    angular.module('login').controller('LoginCtrl',[
        	'$scope',
        	'loginSrv',
        	'$state',
            'Global',
            'localStorageService',
            'notify',
        	function($scope, loginSrv, $state, Global, localStorageService,notify){
                 notify({
                        message : 'TEST MESSAGE', //instead of this we can pass messageTemplate Also
                        position : 'right', //Options ['left' , 'center' , 'right']
                        duration : 1000000000, //Time in milisecond for which the notification is visible
                        classes : 'notify-error',
                        templateUrl: './views/commons/notification/Notification.html',
                        button :[{
                            name : 'Ok',
                            onClick : 'NAVIGATE', 
                            type : 'Button',
                            state : 'app.register.user'
                        },{
                            name : 'Cancel',
                            type : 'Button'

                        }]
                    });
            	$scope.loginUser={};
                $scope.elements = $state.current.data.elements;
                $scope.formBtns = $state.current.data.formButtons;
                $scope.submitEvent = $state.current.data.submitEvent;
                $scope.$on(Global.EVENTS.USER_LOGIN,function(event, data){
                    console.log('Login USer ----------------- ',data);
                    var loginUser = data;
                    loginSrv.loginCheck('Login',loginUser,function(data){
                        
                        console.log('Data ------------',data.plain());

                        localStorageService.set('loggedInUser',data.plain());
                        //$cookieStore.put('loggedInUser',data.plain());
                        $scope.loggedInUser = localStorageService.get('loggedInUser');
                      
                        $state.go('app.home.campaign.all');
                    });
                });

                $scope.one = function(){
                    console.log("In Clicked Link");
                    alert("Hewte");
                }
            }])
    })(angular)