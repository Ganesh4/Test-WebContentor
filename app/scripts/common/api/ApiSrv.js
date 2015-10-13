
/**
* 
*
*
*/
'use strict';

(function(angular){
angular.module('microsite').service('ApiSrv', 
	[
	'$http',
	'$q',
	'Restangular',
	'Global',
	function ($http, $q, Restangular, Global ) {

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
			}else if(response.status === 400){
				console.log("Error ------------- 400",response.data.message);
				return false;
				
			}else if(response.status === 404){
				console.log("Error ------------- 404",response.data.message);
				return false;

			}else if(response.status === 500){
				console.log("Error ------------- 500",response.data.message);
				return false;
			}
			return true; // error not handled
		});

		self.getList = function(uri, params, success, error){
			Restangular.all(uri).getList(params).then(success);
		};

		self.post = function(uri, params, success , error){
			Restangular.all(uri).post(params).then(success);
		}
		self.postMultipart = function(uri, data, success, error){
			var formData = self.getFormData(data);
			Restangular.one(uri).withHttpConfig({transformRequest: angular.identity
			}).customPOST(formData, undefined, undefined, {
					'Content-Type': undefined
			}).then(success);
		}

		self.delete = function(uri , params, success, error ){
			Restangular.one(uri).remove(params).then(success);
		}

       self.getFormData = function(data){

            var formData = new FormData();
            _.each(data, function(value , key){
                console.log('Keys ---------  ', key);
                if(_.isArray(value)){   
                    _.each(value, function(files , fileName){
                        console.log(fileName , files);
                        if(_.isObject(files)){
                            _.each(files, function(file , fileKey){
                                console.log(file);
                                formData.append(fileKey , file);
                            });
                        }else
                            formData.append(fileName , files);
                    });
                }else{
                    console.log('Not Array --------  ', key , value);
                    formData.append(key , angular.toJson(value));
                }
            });
            console.log('FormData -------- ' ,  formData);
            return formData;
        }
}]);
})(angular);