
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
		                         
           $scope.emailRecipients = {};
            var param = {};
           $scope.isInputDisable = true;
           $scope.gridOptions = {
                columnDefs: [{
                    field: 'name', 
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

            RecipientApiSrv.getRecipientList($scope.loggedInUser.securityUserId+'/email/list/', param,function(data){
                if(data){
                    $scope.gridOptions.data = data.plain();
                    $scope.RecipientList = data.plain();
                    console.log('$scope.RecipientList -------- ',$scope.RecipientList);
                }
            });
			$scope.$on(Global.EVENTS.ADD_RECIPIENT,function(event, data){ 
                console.log('Recipients ------------ ',$scope.emailRecipients);
                var recipient = $scope.emailRecipients;
                if(!_.isUndefined(recipient.country))
                    recipient.country = $scope.emailRecipients.country.securityCountryID;
                if(!_.isUndefined(recipient.state))
                    recipient.state = $scope.emailRecipients.state.securityStateID;
                 if(!_.isUndefined(recipient.list))
                    recipient.listId = $scope.emailRecipients.list.listId;

                recipient = _.omit(recipient,'list');
                RecipientApiSrv.addRecipient($scope.loggedInUser.securityUserId+'/recipients',recipient,function(response){
                    //console.log('Added Recipients ---------- ', data.plain());
                    if(response === true)
                        $state.go('app.home.manage.recipients.list');
                });
                
            });

            $scope.$on(Global.EVENTS.GET_RECIPIENT_BY_LIST,function(event, data){
                    if(!_.isEmpty($scope.gridRowSelectedData)){
                        var selectedList = $scope.gridRowSelectedData[0];
                        console.log('selectedListId------',selectedList);
                        var listId = selectedList.listId;
                    }
                            
            RecipientApiSrv.getRecipientByList($scope.loggedInUser.securityUserId+'/'+listId+'/recipients',{},function(data){
                    if(data){
                        $scope.recipientsGridOptions.data = data.plain();
                        $scope.Recipients = data.plain();
                    }

               });
            });

             //Delete Recipient Functionality..
             self.deleteRecipient = function(id){
            RecipientApiSrv.deleteRecipient($scope.loggedInUser.securityUserId+'/recipients/'+id, null, function(data){
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

            $scope.$on(Global.EVENTS.ADD_EMAIL_RECIPIENT_LIST,function(event,data){
                console.log('$scope.loggedInUser.securityUserId',$scope.loggedInUser.securityUserId);
                var list = {};
                list.name = $scope.name;
               RecipientApiSrv.addEmailList($scope.loggedInUser.securityUserId+'/email/list',list,function(response){
               $scope.isInputDisable = true;
               $scope.$emit(Global.EVENTS.RELOAD);
                 

               }); 
                
           }); 
            $scope.$on(Global.EVENTS.INPUT_BOX_ENABLED, function(event,data){
                $scope.isInputDisable = false;
                $scope.SAVE_BTN_DISABLE = true;
                console.log('$scope.isInputDisable ----------- ',$scope.isInputDisable);

            });
            //Delete Email List Functionality..
            $scope.$on(Global.EVENTS.DELETE_EMAIL_LIST,function(){

                if(!_.isEmpty($scope.gridRowSelectedData)){
                    var RecipientData = $scope.gridRowSelectedData[0];
                    console.log('Email List Data ------- ',RecipientData.listId);

                    self.deleteEmailList(RecipientData.listId);
                }
            });
             self.deleteEmailList = function(id){
            RecipientApiSrv.deleteRecipient($scope.loggedInUser.securityUserId+'/email/list/'+id, null, function(data){
                    alert('EmailList Delete Successfully');
                    $scope.$emit(Global.EVENTS.RELOAD);
                })
            }
            

           /* $scope.edit = false;
            $scope.data = {};
            $scope.editField = function() {
                $scope.edit = true;
            };
            $scope.cancelEdit = function() {
                $scope.edit = false;
            };
            $scope.updateList = function(field, name) { 
                console.log(field + ' + ' + name);


            };    */ 
	}]);

})(angular);