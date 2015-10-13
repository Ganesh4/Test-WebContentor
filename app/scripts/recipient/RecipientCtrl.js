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
                    field: 'listName', 
                    displayName: 'List Name',
                    cellClass : 'darkgrey-color'
                },{
                    field:'recipientCount', 
                    displayName:'List Count',
                    cellClass : 'green-color'
                }]
            } 

            RecipientApiSrv.getRecipient('1/recipient/list', param,function(data){
                if(data){
                    $scope.gridOptions.data = data.plain();
                    $scope.RecipientList = data.plain();
                    console.log('$scope.RecipientList -------- ',$scope.RecipientList);
                }
            });
			
		}]);
})(angular);