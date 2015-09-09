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
	        return $sce.trustAsResourceUrl(url);
	    	};
		}
	]
)})(angular);