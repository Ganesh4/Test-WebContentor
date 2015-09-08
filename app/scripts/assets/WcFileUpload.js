
'use strict';

(function(angular){
    angular.module('design').directive('wcFileUploadModel',['$parse',function($parse){
        return{
            restrict:'AE',
            scope:{
                name : '&'
            },
            templateUrl: './views/assets/fileInputBox.html',
            link: function(scope, element, attrs) {
                var model = attrs.name;
                element.bind('change', function(){
                var files = event.target.files;
                console.log('Name ============  ', model);
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0;i<files.length;i++) {
                    //emit event upward
                    var fileData = {};
                    fileData[model] = files[i];
                    console.log('Files ------------  ', model);
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