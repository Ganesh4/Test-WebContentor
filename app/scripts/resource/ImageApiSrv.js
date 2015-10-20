
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('resources').service('ImageApiSrv',
    [
    'ApiSrv',
    function (ApiSrv) {
		var self = this;
		self.getImageList = function(uri, params, success, error){
			ApiSrv.getList(uri, params, success, error)
		}
		self.getCategory = function(uri, params, success, error){
			ApiSrv.getList(uri, params, success, error)
		}
		self.addNewImage = function(uri, formData, success, error){
			ApiSrv.postMultipart(uri, formData, success, error);
		}
		self.deleteImage = function(uri, params, success, error){
			ApiSrv.delete(uri, params, success, error);
		}
		self.updateImage =function(uri, formData, success, error){
			ApiSrv.putMultipart(uri, formData, success, error);
		}

     }]);
})(angular);
