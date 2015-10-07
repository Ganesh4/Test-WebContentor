
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

				console.log("In Get Image List");
				ApiSrv.getList(uri, params, success, error)
				
			}

	
}]);

})(angular);