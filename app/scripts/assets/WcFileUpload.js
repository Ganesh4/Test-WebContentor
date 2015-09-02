
'use strict';

(function(angular){
    angular.module('design').directive('wcFileUploadModel',['$parse',function($parse){
        return{
            restrict:'EA',
            scope:{
                name : '='
            },
            templateUrl: '/views/assets/fileInputBox.html'
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                element.bind('change', function(){
                var files = event.target.files;
              
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0;i<files.length;i++) {
                    //emit event upward
                    var fileData = {};
                    fileData[name] = files[i];
                    console.log('Files ------------  ', name);
                    scope.$emit("fileSelected", fileData);
                }   
                });
                var modelSetter = function(scope , file){
                   scope[model] = file;
                }
            }
        }
    }])
})(angular);