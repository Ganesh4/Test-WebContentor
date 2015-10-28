
'use strict';

(function(angular){
    angular.module('design').directive('wcFileUploadModel',['$parse',function($parse){
        return{
            restrict:'AE',
            scope:{
                name : '='
            },
            templateUrl: './views/assets/fileInputBox.html',
            link: function(scope, element, attrs) {
                var model = scope.name;
                element.bind('change', function(){
                    var files = event.target.files;
                   
                    //iterate files since 'multiple' may be specified on the element
                    for (var i = 0;i<files.length;i++) {
                        //emit event upward
                        var fileData = {};
                        fileData[model] = files[i];
                        console.log("File Data ---------- " , fileData);
                        scope.$emit("fileSelected", fileData);
                    }   
                });
            }
        }
    }])
})(angular);