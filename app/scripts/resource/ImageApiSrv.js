
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('resources').service('ImageApiSrv', ['ApiSrv', function (ApiSrv) {

		var self = this;

			self.getImageList = function(uri, params, success, error){
				ApiSrv.getList(uri, params, success, error)
				
			}

	
}]);

})(angular);