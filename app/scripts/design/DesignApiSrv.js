/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('design').service('DesignSrv',
	 [
	 	'$http', 
	 	'Restangular',
	 	'CommonSrv',
	 	'ApiSrv',
	 	function ($http , Restangular, CommonSrv, ApiSrv) {
			// Now set up the states
			var self = this;
			/**
				Sends a post request to the backend.
			**/
			self.saveDesign = function(userId, data, success, error){
				var uri = userId+'/designs'
				ApiSrv.postMultipart(uri, data, success, error);
			}

			self.getUserDesign = function(userId, params, success, error){

			}
			self.getDesignById = function(stateParams,success,error){
				var design = Restangular.one(stateParams.userId.toString(),'designs').one(stateParams.templateId.toString());
				design.get().then(success);
			}

			self.getTemplateXmlData =function(userId, params, success, error){
				var template = Restangular.one(userId.toString(),'template').one('xml');
				template.get(params).then(success);
			}
	}
	]);

})(angular);