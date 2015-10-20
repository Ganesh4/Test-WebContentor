
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
           $scope.recipients = {};
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
            },
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
                    field:'zip', 
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
			$scope.$on(Global.EVENTS.ADD_RECIPIENT,function(event, data){ 
                console.log('Recipients ------------ ',$scope.recipients);
                var recipient = $scope.recipients;
                if(!_.isUndefined(recipient.country))
                    recipient.country = $scope.recipients.country.securityCountryID;
                if(!_.isUndefined(recipient.state))
                    recipient.state = $scope.recipients.state.securityStateID;
                 if(!_.isUndefined(recipient.list))
                    recipient.listId = $scope.recipients.list.listId;

                recipient = _.omit(recipient,'list');
                RecipientApiSrv.addRecipient($scope.loggedInUser.securityUserID+'/recipients',recipient,function(response){
                    //console.log('Added Recipients ---------- ', data.plain());
                });
                $state.go('app.home.manage.recipients.list');
                 
            });

            $scope.$on(Global.EVENTS.GET_RECIPIENT_BY_LIST,function(event, data){
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
             //Delete Recipient Functionality..
             self.deleteRecipient = function(id){
            RecipientApiSrv.deleteRecipient($scope.loggedInUser.securityUserID+'/recipients/'+id, null, function(data){
                    alert('Recipients Delete Successfully');
                    $scope.$emit(Global.EVENTS.RELOAD);
                })
            }
            $scope.$on(Global.EVENTS.DELETE_RECIPIENT,function(){

                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var RecipientData = $scope.gridRowSelectedData[0];
                    console.log('RecipientApiSrv ------- ',RecipientData);
                    self.deleteRecipient(RecipientData.recipientId);
                }
              });            
	}]);

})(angular);