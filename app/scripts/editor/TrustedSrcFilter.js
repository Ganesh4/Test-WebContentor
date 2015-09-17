/**
*
**/
'use strict';
(function(angular){
angular.module('editor').filter('trusted', 
	[
		'$sce', 
		function ($sce) {
	    	return function(url) {
	    	//	console.log('$sce.trustAsResourceUrl(url)', $sce.getTrustedHtml(url));
	        return $sce.trustAsResourceUrl(url);
	    	};
		}
	]
).filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
})
})(angular);