
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('role').service('RoleApiSrv', ['ApiSrv', function (ApiSrv) {

	var self = this;
	self.getRoleList = function(uri, params, success, error){
		ApiSrv.getList(uri, params, success, error)
	}
}]);

})(angular);