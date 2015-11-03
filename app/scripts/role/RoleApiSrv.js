
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('role').service('RoleApiSrv', ['ApiSrv',  function (ApiSrv) {

	var self = this;
	self.getRoleList = function(uri, params, success, error){
		ApiSrv.getList(uri, params, success, error);
		
	    }
	self.addRole =function(uri, params, success, error){
		ApiSrv.post(uri,params,success,error);
	    }
	 self.updateRole = function(uri, params, success, error){
		ApiSrv.put(uri,params,success,error);
	    }
	    self.deleteRole = function(uri, params, success, error){
		    ApiSrv.delete(uri,params,success,error);
        }
}]);
})(angular);