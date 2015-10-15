/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('campaign').service('CampaignApiSrv', ['ApiSrv', function (ApiSrv) {

	var self = this;
	
	self.getCampaignFeatures = function(uri, params, success, error){
		ApiSrv.getList(uri, params, success, error)
	}

	self.getCampaignById = function(uri, params, success, error){
		ApiSrv.getOne(uri, params, success)
	}

	self.saveCampaign =function(uri, params, success, error){
		ApiSrv.post(uri,params,success,error);
	}
}]);

})(angular);