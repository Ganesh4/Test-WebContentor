
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
            $scope.checked = false;
            var self = this;
            var checkedImageId;
            $scope.elements = $state.current.data.elements;
            //$scope.isCalenderOpen = false;
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
                    $scope.$root.imageCategory = data.plain(); 
                    console.log('$scope.imageCategory -------- ',$scope.imageCategory);
                }
            });
            
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
                    var imageData = $scope.gridRowSelectedData;
                    var ids = [] , params = {};
                    if(_.size(imageData)>1){
                        _.each(imageData , function(value , key ){
                            ids.push(value.id);
                        });
                        self.deleteBulkImages(ids);
                    }else{
                        self.deleteImageById(imageData[0].id , null);
                    }
                }
            });
            

            self.deleteBulkImages = function(ids){
                var uri = '/'+$scope.loggedInUser.securityUserID + '/'+ $scope.loggedInUser.groupId +'/images';
                var params = {};
                params['ids'] = ids;//self.getArrayQueryParams(ids)

                console.log('params --------  ' , params);
                ImageApiSrv.deleteImage(uri , params , function(data){
                    alert('Deleted Successfully');
                    $scope.$emit(Global.EVENTS.RELOAD);
                });
            }
            self.getArrayQueryParams = function(data){
                var params = {};
                var i = 0;
                _.each(data,function(value, key){
                    params['ids['+i+']'] = value;
                    i++;
                });
                return params;
            }
            //Delete Image by id.
            self.deleteImageById = function(id, params){
                var uri = $scope.userGroupUri +'/images/';
                if(id !== null)
                    uri = uri + id;
                else 
                    return;    
                
                console.log('URI ---------- ' , uri);

                ImageApiSrv.deleteImage(uri , params , function(data){
                    alert('Deleted Successfully');
                    $scope.$emit(Global.EVENTS.RELOAD);
                });
            }

            $scope.$on(Global.EVENTS.ADD_NEW_IMAGE,function(event, data){
                
                var data = {
                    resource : $scope.image,
                    file: $scope.files
                }
                console.log('data -------- ' , data);
                ImageApiSrv.addNewImage($scope.userGroupUri+'images',data,function(response){
                    $state.transitionTo('app.home.manage.resources.images.grid');
                });
            });

            $scope.setCategoryValue = function(category){
                if(category)
                    $scope.image.category = JSON.parse(category);
                console.log('$scope.image ', $scope.image); 
            }
            
            $scope.openStart = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.openedStart = true;
            };
            // open min-cal
            $scope.openEnd = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.isCalenderOpen = true;
            };

            $scope.$on('UNCHECKALL',function(event, data){
                $scope.$broadcast(Global.EVENTS.IS_CHECKED, false );
            });
        }
    ]);
})(angular);