
'use strict';
(function(angular){
	angular.module('recipients').controller('EmailListCtrl',
		[
		'$scope',
		'$state',
		'Restangular',
		'RecipientApiSrv',
		'Global',
		function($scope,$state,Restangular,RecipientApiSrv,Global){
			alert("Here");
			

		}]);

})(angular);