'use strict';
(function(angular){
	angular.module('recipients').controller('RecipientCtrl',
		[
		 '$scope',
		 '$state',
		 'Restangular',
		 'RecipientApiSrv',
         'Global',
		 function($scope,$state,Restangular,RecipientApiSrv,Global){
		   $scope.elements = $state.current.data.elements;
           $scope.formBtns = $state.current.data.formBtns;
           $scope.submitEvent = $state.current.data.submitEvent;
           $scope.recipients={};
           console.log('TEST',$scope.loggedInUser.securityUserID,'---------',$scope.loggedInUser.groupId);

            var param = {};
            //$scope.admin = "Ganesh";
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

            $scope.recipientsGridOptions = {
                columnDefs: [{
                    field: 'firstName', 
                    displayName: 'Name',
                    cellClass : 'darkgrey-color'
                },{
                    field:'email', 
                    displayName:'Email',
                    cellClass : 'green-color'
                },{
                    field:'ZIP', 
                    displayName:'Zip Code',
                    cellClass : 'green-color'
                }]
            } 


            RecipientApiSrv.getRecipientList($scope.loggedInUser.securityUserID+'/recipient/list', param,function(data){
                if(data){
                    $scope.gridOptions.data = data.plain();
                    $scope.RecipientList = data.plain();
                    console.log('$scope.RecipientList -------- ',$scope.RecipientList);
                }
            });

           //  RecipientApiSrv.getRecipient('/1/recipients',param,function(data){
             //   if(data){
             //       $scope.recipientsGridOptions.data = data.plain();
               //     $scope.Recipients = data.plain();
             //       console.log('$scope.Recipients -------- ',$scope.Recipients);
            //    }
          //  });

			   $scope.$on(Global.EVENTS.ADD_RECIPIENT,function(event, data){
                 
                 RecipientApiSrv.addRecipient($scope.loggedInUser.securityUserID+'/recipients',{},function(response){
                   console.log('ADD_RECIPIENT--------------',$scope.recipients,'-----data------------',data); 
                 });
               
              });
               $scope.$on(Global.EVENTS.GET_RECIPIENT_BY_LIST,function(event, data){
               // console.log('GET_RECIPIENT_BY_LIST',$scope.RecipientList);
                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var selectedList = $scope.gridRowSelectedData[0];
                    console.log('selectedListId------',selectedList);
                    var listId = selectedList.listId;
                }
                
                RecipientApiSrv.getRecipientByList($scope.loggedInUser.securityUserID+'/'+listId+'/recipient/list',{},function(data){
                    if(data){
                        $scope.recipientsGridOptions.data = data.plain();
                        $scope.Recipients = data.plain();
                    }
               });
           });
            


		}]);
})(angular);