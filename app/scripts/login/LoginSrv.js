'use strict';

(function(angular){
     angular.module('login').service('loginSrv',
         function(){
          this.loginCheck= function(userName,password){

             if(userName!='' && password!='' )
             {
                return true;
              }else{  
                return false;
                }
             }
        });

    })(angular);