'use strict';

(function(angular){
	angular.module('design').config([
	'$urlRouterProvider',
	'$stateProvider',
	'RestangularProvider',
	function($urlProvider, $stateProvider, RestangularProvider){
    	//RestangularProvider.setBaseUrl('http://localhost/MicroS/');
		$stateProvider.state('app.home.manage.page', {
 			url: '/page',
 			abstract:true,
 			template:'<ui-view></ui-view>',
 			data: {
                tags:['Iteractive User Interface', 'Parrallex Design', 'Entertainment', 'Music'],                 
                displayName :'Page',
                actionsBtn :[{
                	name: 'View More',
                	onClickEvent: '',
                }],
                actionBarBtn: [{
                    name : 'Refresh',
                    onClickEvent : 'REFRESH',
                },{
                    name : "Export"
                },{
                    name : "Delete",
                    onClickEvent : 'DELETE_USER',
                },{
                    name : "Properties"
                },{
                    name : "Add",
                    onClickEvent : 'NAVIGATE',
                    state : 'app.home.manage.user.add.general'
                }] 
            },     
		}).state('app.home.manage.page.overview', {
            url: '/overview',
            templateUrl:"views/overview/overview.html",
            controller:'DesignOverviewCtrl',
            data: {
                 displayName :'Overview' 
            },
            
        }).state('app.home.manage.page.detail', {
            url:'/detail',
            templateUrl:'views/design/DesignDetail.html',
            controller:'DesignDetailCtrl',
            data: {
                 displayName: 'Detail',
            }
    
        }).state('app.home.manage.page.upload', {
            url:'/upload',
            templateUrl:'views/design/DesignUpload.html',
            controller:'DesignCtrl',
             data: {
                 displayName: 'Upload',
            }
        });
	}]);
})(angular);