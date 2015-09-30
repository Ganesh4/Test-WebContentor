
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('microsite').service('ApiSrv', ['$http', '$q', 'Restangular','Global', function ($http, $q, Restangular, Global ) {

	var self = this;
    var result = {};
	var apiCredentials = Global.apiCredentials;

	/**

	**/
	self.getOne = function(requestUrl , params, success){
		 Restangular.one(requestUrl).get(params).then(success);
	}

	self.accessToken = function(){
		var $defer = $q.defer();
		self.getOne('oauth/token' , apiCredentials , function(data){
			result = data;
			/*
				Check if result has the value of the access token.
				And adding it as the default parameter for our app.
			*/
			if(result.value){
				Restangular.configuration.defaultRequestParams.common.access_token = result.value;
				$defer.resolve(result);
			}else{
				result = undefined;
				$defer.reject(result);
			}
		});
	};
	self.refreshAccesstoken = function() {
		var deferred = $q.defer();
		// Refresh access-token logic
		apiCredentials.grant_type = 'refresh_token';
		apiCredentials.refresh_token = result.refreshToken.value;
		self.accessToken();
		return deferred.promise;
	};
	
	/*
	
	*/
	Restangular.setErrorInterceptor(function(response, deferred, responseHandler) {
		if(response.status === 401) {
			refreshAccesstoken().then(function() {
				// Repeat the request and then call the handlers the usual way.
				$http(response.config).then(responseHandler, deferred.reject);
				// Be aware that no request interceptors are called this way.
			});
			return false; // error handled
		}
		return true; // error not handled
	});

	self.getList = function(uri, params, success, error){
		Restangular.all(uri).getList(params).then(success);
	};

	self.post = function(uri, params, success , error){
		Restangular.one(uri).post(params).then(success);
	}
}]);

})(angular);