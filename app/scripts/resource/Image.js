
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
	                    onClick:'EDIT_IMAGE',
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
		        templateUrl:'views/resource/AddImage.html',
		        data: {
		        	 displayName: 'Add',
		        	 actionBarBtn: [{
	                    name : 'Cancel',
	                    onClick : 'NAVIGATE',
	                    state:'app.home.manage.resources.images.grid',
	                },{
	                    name : 'Submit',
	                    onClick : 'ADD_NEW_IMAGE',
	                    state:''
	                }]
		        }
		    }).state('app.home.manage.resources.images.edit',{
		        url:'/edit',
		        templateUrl:'views/resource/EditImage.html',
		        data: {
		        	 displayName: 'Edit',
		        	 actionBarBtn: [{
	                    name : 'Cancel',
	                    onClick : 'NAVIGATE',
	                    state:'app.home.manage.resources.images.grid',
	                },{
	                    name : 'Submit',
	                    onClick : 'ADD_NEW_IMAGE',
	                    state:''
	                }]
		        }
		    });
	}]);
})(angular);