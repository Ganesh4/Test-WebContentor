/**
 * 
 *
 *
 */
'use strict';

(function(angular){
	angular.module('editor').config(['$urlRouterProvider','$stateProvider',	function($urlProvider,$stateProvider){
	var route = 'app.editor';
   $stateProvider.state(route + '.add',{
                url:'/add',
                templateUrl:'views/editor/SubMenu.html',
                data:{
                    title : 'Add Content',
                    subMenu: [{
                        name : 'Images',
                        icon : '',
                        stateName  : route + ".add.images"
                    },{
                        name : 'Videos',
                        icon : '',
                        stateName  : route + ".add.video"
                    },{
                        name : 'Icons',
                        icon : '',
                        stateName  : route + ".add.icons"
                    },{
                        name : 'Text',
                        icon : '',
                        stateName  : route + ".add.text"
                    },{
                        name : 'Button',
                        icon : '',
                        stateName  : route + ".add.button"
                    },{
                        name : 'Graph',
                        icon : '',
                        stateName  : route + ".add.graph"
                    },{
                        name : 'Shapes',
                        icon : '',
                        stateName  : route + ".add.shapes"
                    },{
                        name : 'Site Navigation',
                        icon : '',
                        stateName  : route + ".add.sitenavigation"
                    },{
                        name : 'Slider',
                        icon : '',
                        stateName  : route + ".add.slider"
                    }]
                },
            }).state(route + '.section',{
                url:'/section',
                templateUrl:'views/editor/SubMenu.html',
                data:{
                    title : 'Section',
                    subMenu: [{
                        name : '',
                        icon : '',
                    },{
                        name : '',
                        icon : '',
                    },{
                        name : '',
                        icon : '',
                    }]
                },
            }).state(route + '.widgets',{
                url:'/widgets',
                templateUrl:'views/editor/SubMenu.html',
                data:{
                    title : 'Widgets',
                    subMenu: [{
                        name : 'Apps',
                        icon : '',
                    },{
                        name : 'Facebook',
                        icon : '',
                    },{
                        name : 'twitter',
                        icon : '',
                    },{
                        name : 'Linkedn',
                        icon : '',
                    },{
                        name : 'Google Plus',
                        icon : '',
                    }]
                },
            });

            var addRoute = 'app.editor.add';
            $stateProvider.state(addRoute + '.images',{
                url:'/images',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Images',
                    items : [{
                           icon : 'fa fa-picture-o',
                           name : 'Images' 
                        },
                        {
                        icon : 'fa fa-picture-o',
                        name : 'Images Gallarey'
                    }]
                },
            }).state(addRoute + '.video',{
                url:'/video',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Video',
                    items : [{
                           icon : '',
                           name : 'Video' 
                        },
                        {
                        icon : '',
                        name : 'Video Gallarey'
                    }]
                },
            }).state(addRoute + '.icons',{
                url:'/icons',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'icons',
                    items : [{
                           icon : '',
                           name : 'Icons' 
                        },
                        {
                        icon : '',
                        name : 'Icons Gallarey'
                    }]
                },
            }).state(addRoute + '.text',{
                url:'/text',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Text',
                    items : [{
                           icon : '',
                           name : 'Text' 
                        },
                        {
                        icon : '',
                        name : 'Text Gallarey'
                    }]
                },
            }).state(addRoute + '.button',{
                url:'/button',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Button',
                    items : [{
                           icon : '',
                           name : 'Button' 
                        },
                        {
                        icon : '',
                        name : 'Button Gallarey'
                    }]
                },
            }).state(addRoute + '.graph',{
                url:'/graph',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Graph',
                    items : [{
                           icon : '',
                           name : 'Graph' 
                        },
                        {
                        icon : '',
                        name : 'Graph Gallarey'
                    }]
                },
            }).state(addRoute + '.shapes',{
                url:'/shapes',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Shapes',
                    items : [{
                           icon : '',
                           name : 'Shapes' 
                        },
                        {
                        icon : '',
                        name : 'Shapes Gallarey'
                    }]
                },
            }).state(addRoute + '.sitenavigation',{
                url:'/sitenavigation',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Site Navigation',
                    items : [{
                           icon : '',
                           name : 'Site Navigation' 
                        },
                        {
                        icon : '',
                        name : 'Site Navigation Gallarey'
                    }]
                },
            }).state(addRoute + '.slider',{
                url:'/slider',
                templateUrl:'views/editor/SubMenuItem.html',
                data:{
                    subtitle : 'Slider',
                    items : [{
                           icon : '',
                           name : 'Slider' 
                        },
                        {
                        icon : '',
                        name : 'Slider Gallarey'
                    }]
                },
            });
           
   
}]);

})(angular);