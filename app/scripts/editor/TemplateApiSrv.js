/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('editor').service('TemplateApiSrv',
	 [
	 	'$http', 
	 	'Restangular',
	 	'CommonSrv',
	 	'ApiSrv',
	 	function ($http , Restangular, CommonSrv, ApiSrv) {
	 		var self = this;

	 		self.getTemplateXmlData =function(userId, params, success, error){
	 			alert('TEST');
				var template = Restangular.one(userId.toString(),'template').one('xml');
				template.get(params).then(success);
			}
	 	}
	]
)})(angular);