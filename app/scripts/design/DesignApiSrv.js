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
	 	function ($http , Restangular, CommonSrv) {
			// Now set up the states
			var self = this;
			/**
				Sends a post request to the backend.
			**/
			self.saveDesign = function(userId, data, success, error){
				var formData = CommonSrv.getFormData(data);
						console.log('design ---------  ' , data);
						console.log(formData);
				
						Restangular.one(userId.toString()).one('designs').withHttpConfig({
						transformRequest: angular.identity
					}).customPOST(formData, undefined, undefined, {
						'Content-Type': undefined
					}).then(success);
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