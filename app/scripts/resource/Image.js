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
	                    name : 'Refresh',
	                    onClickEvent : 'REFRESH',
	                },{
	                    name : "Export"
	                },{
	                    name : "Delete",
	                    onClickEvent : '',
	                },{
	                    name : "Edit",
	                    onClickEvent : ''
	                },{
	                    name : "Views"
	                },{
	                    name : "Add",
	                    onClickEvent : 'NAVIGATE',
	                    state:'app.home.manage.resources.images.add'
	                    
	                }]
	            }     	
	        }).state('app.home.manage.resources.images',{
		        url:'/images',
		        templateUrl:'views/resource/images.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Images'
		        }
		    }).state('app.home.manage.resources.images.add',{
		        url:'/add',
		        templateUrl:'views/resource/AddImage.html',
		        controller : 'ImageCtrl',
		        data: {
		        	 displayName: 'Add'
		        }
		    });

		    
	}]);

})(angular);