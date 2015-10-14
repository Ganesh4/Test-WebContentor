
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
            $scope.image = {};
            var self = this;
            var checkedImageId;
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
            //Delete Image Functionality..
            $scope.$on(Global.EVENTS.DELETE_IMAGE,function(){
                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var imageData = $scope.gridRowSelectedData[0];
                    self.deleteImageById(imageData.id);
                }
            });
            //Grid Selected
            //id resource id
            $scope.gridSelected = function(resourceData){
                console.log(resourceData);
                if(resourceData){
                    var data = new Array();
                    data[0] = resourceData;
                    $scope.$emit(Global.EVENTS.GRID_ROW_DATA,data);
                    $scope.$emit(Global.EVENTS.DELETE_BTN_ENABLE);
                }
            }  
            //Delete Image by id.
            self.deleteImageById = function(id){
                var uri = '/'+$scope.loggedInUser.securityUserID + '/'+ $scope.loggedInUser.groupId +'/images/'+id;
                console.log('URI ---------- ' , uri);
                ImageApiSrv.deleteImage(uri , null , function(data){
                    alert('Deleted Successfully');
                      $scope.$emit(Global.EVENTS.RELOAD);
                });
            }

            $scope.$on(Global.EVENTS.ADD_NEW_IMAGE,function(event, data){
                
                var data = {
                    resource : $scope.image,
                    file: $scope.files
                }
                ImageApiSrv.addNewImage($scope.userGroupUri+'images',data,function(response){
                    $state.transitionTo('app.home.manage.resources.images.grid');
                    $scope.$emit(Global.EVENTS.RELOAD);
                });
            });

            $scope.setCategoryValue = function(category){
                if(category)
                    $scope.image.category = JSON.parse(category);
                console.log('$scope.image ', $scope.image);
            }
            // open min-cal
            $scope.openEnd = function($event) {
                $event.preventDefault();
                $event.stopPropagation();

                $scope.image.openedEnd = true;
            };
        }
    ]);
})(angular);