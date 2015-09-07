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

	self.getDesignCategories = function(success , error){
		Restangular.one('catagories').getList().then(success);
	}

	self.getUserDesign = function(userId, params, success, error){

	}
		}
	]);

})(angular);