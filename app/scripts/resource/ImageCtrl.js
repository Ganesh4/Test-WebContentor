
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
        'Global',
        'CommonSrv',
        'ImageApiSrv',
        function($scope ,$state, ApiSrv,Global,CommonSrv,ImageApiSrv){  
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
                        cellClass : 'darkgrey-color',
                        cellTemplate:'<span class= " ui-grid-cell-contents" ng-repeat = "keyword in row.entity.keywords">{{keyword}}</span>'
                    },{
                        field: 'upload.fileSize', 
                        displayName: 'File Size',
                        cellClass: 'orange-color'

                    },{
                        field: 'upload.url', 
                        displayName: 'Image Url',
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
                };
            ImageApiSrv.getCategory($scope.userGroupUri+'categories',{},function(data){
                if(data){
                    $scope.imageCategory = data.plain(); 
                    console.log('$scope.imageCategory -------- ',$scope.imageCategory);
                }
            });

            //$scope.imageCategory = ['Test','Testing'];
            $scope.select2Options1 = {
                'multiple': true,
                'simple_tags': true,
                
            }; 
            $scope.select2Options = {
                'multiple': true,
                'simple_tags': true,
                'tags': []
            }; 
            ImageApiSrv.getImageList($scope.userGroupUri+'images',param,function(data){
                // console.log('Image ------------ ',data);
                if(data){
                    $scope.gridOptions.data = data.plain();
                    $scope.imageList = data.plain();
                }
            });
        }
    ]);
})(angular);