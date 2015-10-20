/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('login').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){
		   	$stateProvider.state('app.login', {
                url: '/login',
                templateUrl:'views/login/login.html',
                controller:'LoginCtrl',
                data: {
					displayName: 'login',
					submitEvent: 'USER_LOGIN',
					formButtons:[{
                        name:'Submit',
                        btnType:'SUBMIT',
                        css:'btn btn-success',
                    },{
                    	name:'New User Registration',
                    	onClick : 'NAVIGATE',
	                    state : 'app.register.user'
                    }],
					elements:[
				    {
				    	rowClass :'',
						rowElement:[{
							name:'email',
							//lable:'Email',
							type: 'EMAIL',
				            required: true,
				            validate:'emailisrequired',
				            placeholder:'Email',
				            model : 'email'
						}]
				    },{
				    	rowClass :'',
				    	rowElement:[{
				            name:'password',
				            //lable:'Password',
				            type: 'PASSWORD',
				            required: true,
				            validate:'passwordisrequired',
				            placeholder:'Password',
				            model : 'password'
				        }]
				    },{
				    	rowClass :'',
				    	rowElement:[{
				    		name:'Remember me',
				    		lable:'',
				    		type:'CHECKBOX',
				    	}]
				    }]
                }
            }).state('app.success.',{
		        url:'/success',
		        templateUrl:'views/login/success.html',
		        controller : 'LoginCtrl',
		        data: {
		        	displayName: 'Success',
		        	
		        }
		    });
	}]);
})(angular);