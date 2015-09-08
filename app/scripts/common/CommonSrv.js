'use strict';

(function(angular){
angular.module('common').service('CommonSrv',
    [
        'Restangular',
        function (Restangular) {
            var self = this;
            self.getFormData = function(data){

                var formData = new FormData();
                console.log('My Form -------- ',formData);

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

            self.getDesignCategories = function(success , error){
               Restangular.one('categories').getList().then(success);
            }
        }
    ]);
})(angular);