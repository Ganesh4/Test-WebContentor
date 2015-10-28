/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('design').service('DesignApiSrv',
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

			self.getAllDesigns = function(data,scope,success,error){
				Restangular.one(scope.userGroupUri.toString()+'categories').customGETLIST('designs', data).then(success);
			}
	 		
	 		self.getUserDesigns = function(userId, params, success, error){
	 			Restangular.one(userId.toString()).customGET('designs', params).then(success);
	 		}

	 		self.getCategoriesDesigns = function(categoryName, params, scope,success, error){
	 			Restangular.one(scope.userGroupUri.toString()+'categories',categoryName).all('designs').getList(params).then(success);
	 		}

	 		self.getDesignCategories = function(success , error){
               Restangular.one('/1/0/categories').getList().then(success);
            }
		}
	]);
})(angular);