
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
                	onClick: '',
                }],
                actionBarBtn: [{
                    name : 'Refresh',
                    onClick : 'REFRESH',
                },{
                    name : "Export"
                },{
                    name : "Delete",
                    onClick : 'DELETE_USER',
                },{
                    name : "Properties"
                },{
                    name : "Add",
                    onClick : 'NAVIGATE',
                    state : 'app.home.manage.page.add'
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
    
        }).state('app.home.manage.page.add', {
            url:'/add',
            templateUrl:'views/design/DesignUpload.html',
            controller:'DesignCtrl',
             data: {
                 displayName: 'Upload New Promotional Page',
                 rowElement:[{
                    name:'name',
                    lable:'name',
                    type: 'TEXT',
                    required: false,
                    validate:'',
                    placeholder:'Description',
                    model : 'name'
                },{
                    name:'Keywords',
                    lable:'Keywords',
                    type: 'SELECT_TAGS',
                    required: false,
                    validate:'',
                    placeholder:'Keywords',
                    model : 'seo.keywords'
                },{
                    name: 'Category',
                    lable: 'Category',
                    type: 'DROP_DOWN',
                    placeholder: 'Category',
                    ngOptions: 'category.name for catagory in catagories',
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
            }
        });
	}]);
})(angular);