'use strict';

(function(angular){

angular.module('recipients').directive('wcEllipsisMenu',function(){
		return{
			restrict:'AE',
			templateUrl:'./views/assets/rowmenu.html',
			scope : {
				onClick : '@'
			},
			link : function(scope, element, attrs){
				//console.log('element ---------- ',element);
				function showSubMenu(){
					console.log("In SubMenu -------------");
				}
			}
		}
	});
})(angular);