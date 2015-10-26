
/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('resources').config(
		[
		'$urlRouterProvider',
		'$stateProvider',
		function($urlProvider,$stateProvider){

		   	$stateProvider.state('app.home.manage.resources',{
	            url:'/resources',
	            template:'<ui-view></ui-view>',
	            abstract: true,
	            controller: 'ImageCtrl',
	            data:{
	                displayName: 'Images',
	                actionBarBtn: [{
	                    name : 'Export',
	                    onClick : 'EXPORT',
	                    type  : "Button"
	                },{
	                	name : 'Table View',
	                    icon : 'fa fa-table view_grid_button',
	                    type  : "icon",
	                    onClick : '',
	                    state:'app.home.manage.resources.images.table'
	                },{
	                	name : 'List View',
	                    icon : 'fa fa-list view_grid_button',
	                    type  : "icon",
	                    onClick : '',
	                    state:'app.home.manage.resources.images.list'
	                },{
	                	name : 'Grid View',
	                    icon : 'fa fa-th-large view_grid_button',
	                    type  : "icon",
	                    onClick : '',
	                    state:'app.home.manage.resources.images.grid'
	                },{
	                    name : 'View',
	                    type : 'text',
						icon : 'view_grid_text' 
	                },{
	                    name : 'Delete',
	                    onClick : 'DELETE_IMAGE',
	                    type  : "Button",
	                    disable:'DELETE_BTN_DISABLE'
	                },{
	                    name : 'Edit',
	                    onClick:'NAVIGATE',
	                    state:'app.home.manage.resources.images.edit',
	                    type  : "Button"

	                },{
	                    name : 'Add',
	                    onClick : 'NAVIGATE',
	                    state:'app.home.manage.resources.images.add',
	                    type  : "Button"
	                    
	                }]
	            }     	
	        }).state('app.home.manage.resources.images',{
	        	url:'/images',
	        	template:'<ui-view></ui-view>',
	        	abstract:true,
	        }).state('app.home.manage.resources.images.table',{
		        url:'/table',
		        template:'<wc-grid grid-options = "gridOptions" ui-grid-selection class="grid"></wc-grid>',
		        data: {
		        	 displayName: 'table'
		        }
		    }).state('app.home.manage.resources.images.grid',{
		        url:'/grid',
		        templateUrl:'views/resource/ImageGrid.html',
		        data: {
		        	 displayName: 'Grid'
		        }
		    }).state('app.home.manage.resources.images.list',{
		        url:'/list',
		        templateUrl:'views/resource/ImageList.html',
		        data: {
		        	 displayName: 'List'
		        }
		    }).state('app.home.manage.resources.images.add',{
		        url:'/add',
		        template:'<wc-form elements ="elements" select-2-options = "select2Options" form-btns="formBtns" form-data="image"></wc-form>',//views/resource/AddImage.html',
		        data: {
		        	 displayName: 'Add',
		        	 actionBarBtn: [{
	                    name : 'Cancel',
	                    onClick : 'NAVIGATE',
	                    state:'app.home.manage.resources.images.grid',
	                },{
	                    name : 'Submit',
	                    onClick : 'ADD_NEW_IMAGE',
	                }],
                	elements:[
                    {
                        rowClass :'col-md-5',
                		rowElement:[{
                			name:'Description',
                			lable:'Description',
                			type: 'TEXT_AREA',
                            required: false,
                            validate:'',
                            placeholder:'Description',
                            model : 'description'
                		},{
                			name:'Keywords',
                            lable:'Keywords',
                            type: 'SELECT_TAGS',
                            required: false,
                            validate:'',
                            placeholder:'Keywords',
                            model : 'keywords'
                		},{
                			name: 'Category',
                            lable: 'Category',
                			type: 'DROP_DOWN',
                			placeholder: 'Category',
                			onChange: 'setCategoryValue(category)',
                			ngOptions: 'category.name for category in imageCategory',
                            model: 'category',
                            initEvent: 'IMAGE_CATEGORY',
                		},{
                			name: 'ExpiryDate',
                			lable: 'Expiry Date',
                			type: 'CALENDAR',
                			model: 'expiryDate',
                			onChange: '',
                			format: 'yyyy-MM-dd',
                		},{
                			name: 'file',
                			lable: 'Upload Image',
                			type: 'FILE',
                			required: false,
                			placeholder: 'Image File',
                			fileName: 'file'
                		}],
                	}]
		        }
		    }).state('app.home.manage.resources.images.edit',{
		    	url:'/edit',
		    	template:'<wc-form elements ="elements" select-2-options = "select2Options" form-btns="formBtns" form-data="image"></wc-form>',
				controller:'ImageEditCtrl',
				data: {
		        	displayName: 'Edit',
		        	actionBarBtn: [{
	                    name : 'Cancel',
	                    onClick : 'NAVIGATE',
	                    state:'app.home.manage.resources.images.grid',
	                },{
	                    name : 'Update',
	                    onClick : 'UPDATE_IMAGE',
	                }],
                	elements:[
                    {
                        rowClass :'col-md-5',
                		rowElement:[{
                			name: 'Name',
                			lable: 'Image Name',
                			type: 'TEXT',
                			required: false,
                			placeholder: 'Image Name',
                			model: 'upload.fileName'

                		},{
                			name:'Description',
                			lable:'Description',
                			type: 'TEXT_AREA',
                            required: false,
                            validate:'',
                            placeholder:'Description',
                            model : 'description'
                		},{
                			name:'Keywords',
                            lable:'Keywords',
                            type: 'SELECT_TAGS',
                            required: false,
                            validate:'',
                            placeholder:'Keywords',
                            model : 'keywords'
                		},{
                			name: 'Category',
                            lable: 'Category',
                			type: 'DROP_DOWN',
                			placeholder: 'Category',
                			ngOptions: 'category.name for category in imageCategory',
                            model: 'category',
                            initEvent: 'IMAGE_CATEGORY',
                		},{
                			name: 'ExpiryDate',
                			lable: 'Expiry Date',
                			type: 'CALENDAR',
                			model: 'expiryDate',
                			onChange: '',
                			format: 'yyyy-MM-dd',
                		}],
                	}]
		        }
		    });
	}]);
})(angular);