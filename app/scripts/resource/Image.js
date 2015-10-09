
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
	            controller: 'ImageCtrl',
	            abstract: true,

	            data:{
	                displayName: 'Images',

	                actionBarBtn: [{
	                    name : 'Export',
	                    onClickEvent : 'EXPORT',
	                    type  : "Button"
	                },{
	                	 name : 'Table View',
	                    icon : 'fa fa-table',
	                    type  : "icon",
	                    onClickEvent : '',
	                    state:'app.home.manage.resources.images'
	                },{
	                	name : 'List View',
	                    icon : 'fa fa-list',
	                    type  : "icon",
	                    onClickEvent : '',
	                    state:'app.home.manage.resources.list'
	                },{
	                	name : 'Grid View',
	                    icon : 'fa fa-th-large',
	                    type  : "icon",
	                    onClickEvent : '',
	                    state:'app.home.manage.resources.grid'
	                },{
	                    name : 'View',
	                    type : 'text'
	                },{
	                    name : 'Delete',
	                    onClickEvent : '',
	                    type  : "Button"
	                },{
	                    name : 'Edit',
	                    onClickEvent:'',
	                    type  : "Button"

	                },{
	                    name : 'Add',
	                    onClickEvent : 'NAVIGATE',
	                    state:'app.home.manage.resources.add',
	                    type  : "Button"
	                    
	                }]
	            }     	
	        }).state('app.home.manage.resources.images',{
		        url:'/images/table',
		        template:'<wc-grid grid-options = "gridOptions" ui-grid-selection class="grid"></wc-grid>',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Images'
		        }
		    }).state('app.home.manage.resources.grid',{
		        url:'/image/grid',
		        templateUrl:'views/resource/ImageGrid.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Image/Grid'
		        }
		    }).state('app.home.manage.resources.list',{
		        url:'/image/list',
		        templateUrl:'views/resource/ImageList.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Image/List'
		        }
		    }).state('app.home.manage.resources.add',{
		        url:'/image/add',
		        templateUrl:'views/resource/AddImage.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Image/Add',

		        	 actionBarBtn: [{
	                    name : 'Delete',
	                    onClickEvent : '',
	                },{
	                    name : 'Cancel',
	                    onClickEvent : ''
	                },{
	                    name : 'Submit',
	                    onClickEvent : 'ADD_NEW_IMAGE',
	                    state:''
	                    
	                }]
		        }
		    });	    
	}]);

})(angular);