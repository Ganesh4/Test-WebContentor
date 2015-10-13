'use strict';

(function(angular){
     angular.module('recipients').service('RecipientApiSrv',[
        'ApiSrv',
         function(ApiSrv){
         	var self = this;
	        self.getRecipient = function(uri, params, success, error){
		     ApiSrv.getList(uri, params, success, error)

	        }   
	          self.addRecipient =function(uri, params, success, error){
		          ApiSrv.post(uri,params,success,error);
	        }
        }]);

    })(angular);