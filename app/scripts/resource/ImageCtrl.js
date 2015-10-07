
/*
*
*/
'use strict';
(function(angular){
angular.module('resources').controller('ImageCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        'ImageApiSrv',
        function($scope ,$state, ApiSrv,CommonSrv,ImageApiSrv){
                       
            var param = {};
            $scope.gridOptions = {
                multiSelect: true,
                enableRowSelection:true,

                columnDefs: [{
                    field: 'upload.fileName', 
                    displayName: ' Name',
                    cellClass : 'darkgrey-color'
                },{
                    field: 'description', 
                    displayName: 'Description',
                    cellClass : 'darkgrey-color'
                },{
                    field: 'keywords', 
                    displayName: 'Keywords',
                    cellClass : 'darkgrey-color'
                },{
                    field: 'upload.fileSize', 
                    displayName: 'File Size',
                    cellClass: 'orange-color'

                },{
                    field: 'upload.createdBy', 
                    displayName: 'Created By',
                    cellClass: 'orange-color'

                },{
                    field: 'category.name', 
                    displayName: 'Category',
                    cellClass: 'orange-color'

                },{
                    field: 'createdDate', 
                    displayName: 'Created Date ',
                    cellClass: 'blue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.createdDate | FormatDateFilter}}</div>'
                },{
                    field: 'updatedDate', 
                    displayName: 'Modification Date',
                    cellClass: 'skyblue-color',
                    cellTemplate:'<div class="ui-grid-cell-contents">{{row.entity.updatedDate | FormatDateFilter}}</div>'

                }]
            } 
            console.log('$scope.gridOptions', $scope.gridOptions);
             ImageApiSrv.getImageList('4/4/images',param, 
                function(data){
                    console.log('Image ------------ ',data);
                    if(data)
                        $scope.gridOptions.data = data.plain();
            });
        }
    ]);
})(angular);