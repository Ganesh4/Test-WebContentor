'use strict';

(function(angular){
     angular.module('recipients').service('RecipientApiSrv',[
        'ApiSrv',
         function(ApiSrv){
         	var self = this;
	        self.getRecipientList = function(uri, params, success, error){
		     ApiSrv.getList(uri, params, success, error)

	        }   
	        self.getRecipientByList = function(uri, params, success, error){
		     ApiSrv.getList(uri, params, success, error)

	        }   
	          self.addRecipient =function(uri, params, success, error){
		          ApiSrv.post(uri,params,success,error);
	        }

	        self.deleteRecipent = function(uri, params, success, error){
		        ApiSrv.delete(uri,params,success,error);
	        }
        }]);
    })(angular);