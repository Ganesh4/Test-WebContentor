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
	                    type  : "BUTTON"
	                },{
	                    icon : 'fa fa-table',
	                    type  : "icon"
	                },{
	                    icon : 'fa fa-list'
	                },{
	                    icon : 'ionicons ion-grid'
	                },{
	                    name : 'View'
	                },{
	                    name : 'Delete',
	                    onClickEvent : ''
	                },{
	                    name : 'Edit',
	                    onClickEvent:''
	                },{
	                    name : 'Add',
	                    onClickEvent : 'NAVIGATE',
	                    state:'app.home.manage.resources.add'
	                    
	                }]
	            }     	
	        }).state('app.home.manage.resources.images',{
		        url:'/images',
		        templateUrl:'views/resource/images.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Images'
		        }
		    }).state('app.home.manage.resources.add',{
		        url:'/add',
		        templateUrl:'views/resource/AddImage.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Add',

		        	 actionBarBtn: [{
	                    name : 'Delete',
	                    onClickEvent : '',
	                },{
	                    name : 'Cancel',
	                    onClickEvent : ''
	                },{
	                    name : 'Submit',
	                    onClickEvent : '',
	                    state:''
	                    
	                }]
		        }
		    });

		    
	}]);

})(angular);