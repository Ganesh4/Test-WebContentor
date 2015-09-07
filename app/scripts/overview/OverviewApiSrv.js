/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('overview').service('OverviewApiSrv',
	[
	 	'$http', 
	 	'Restangular',
	 	'CommonSrv',
	 	function ($http , Restangular, CommonSrv) {

	 		var self = this;

	 		self.getUserDesigns = function(userId, params, success, error){

	 			Restangular.one(userId.toString()).customGET('designs', params).then(success);
	 		}
	 		self.getCategoriesDesigns = function(categoryName, success, error){
	 			Restangular.one('categories',categoryName).all('designs').getList().then(success);
	 		}
	 	}
	])
})(angular);