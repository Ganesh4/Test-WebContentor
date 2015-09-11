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
	    		console.log('$sce.trustAsResourceUrl(url)', $sce.getTrustedHtml(url));
	        return $sce.trustAsResourceUrl(url);
	    	};
		}
	]
)})(angular);