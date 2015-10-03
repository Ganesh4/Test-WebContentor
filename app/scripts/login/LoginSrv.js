'use strict';

(function(angular){
     angular.module('login').service('loginSrv',[
        'ApiSrv',
         function(ApiSrv){
            var self = this;
            self.loginCheck= function(uri, params, success, error){
                if(params.email!='' && params.password!=''){
                    ApiSrv.post(uri,params,success,error);
                }else{  
                    return false;
                }
            }
        }]);

    })(angular);