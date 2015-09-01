
'use strict';

(function(angular){
    angular.module('microsite').directive('wcfileUploadModel',['$parse',function($parse){
        return{
            restrict:'A',
            templateUrl:'./views/assets/fileInputBox.html',
            link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
            }
        }
    }])
})(angular);