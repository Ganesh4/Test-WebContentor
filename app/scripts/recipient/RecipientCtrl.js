'use strict';
(function(angular){
	angular.module('recipients').controller('RecipientCtrl',
		[
		 '$scope',
		 '$state',
		 'Restangular',
		 'RecipientApiSrv',
		 function($scope,$state,Restangular,RecipientApiSrv){
		   $scope.elements = $state.current.data.elements;
           $scope.formBtns = $state.current.data.formBtns;
           $scope.submitEvent = $state.current.data.submitEvent;

            var param = {};
            $scope.gridOptions = {
                columnDefs: [{
                    field: 'Name', 
                    displayName: 'List Name',
                    cellClass : 'darkgrey-color'
                },{
                    field:'data.count', 
                    displayName:'List Count',
                    cellClass : 'green-color'
                }]
            } 

            RecipientApiSrv.getRecipient('list', param,function(data){
                 if(data)
                        $scope.gridOptions.data = data.plain();
                        $scope.RecipientList = data.plain();
            });
			
		}]);
})(angular);