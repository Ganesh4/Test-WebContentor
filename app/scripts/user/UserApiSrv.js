
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('user').service('UserApiSrv', ['ApiSrv', function (ApiSrv) {

	var self = this;
	self.getUserList = function(uri, params, success, error){
		ApiSrv.getList(uri, params, success, error)
	}
}]);

})(angular);