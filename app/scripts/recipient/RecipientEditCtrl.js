/*
*
*/
'use strict';
(function(angular){
angular.module('recipients').controller('RecipientEditCtrl',
    [
        '$scope',
        '$state',
        'ApiSrv',
        'CommonSrv',
        'RecipientApiSrv',
        'Global',
        function($scope ,$state, ApiSrv,CommonSrv,RecipientApiSrv,Global){

            console.log("$scope.contactData ----------------- ",$scope.contactData);
            //Update Recipient Functions
           $scope.$on(Global.EVENTS.UPDATE_CONTACT,function(){

                 var recipient = $scope.contactData;

                 console.log('Edit -----------',recipient);
                 recipient.securityState = recipient.state;
                 console.log('recipient.securityState',recipient.securityState);

                 recipient.securityState = recipient.state;
                 recipient = _.omit(recipient,'state');
                 recipient = _.omit(recipient,'country');

                 recipient.securityStateId =  recipient.securityState.securityStateId;
                 console.log('recipient.securityStateId---',recipient.securityStateId);
                  if(!_.isUndefined(recipient.list)){
                    console.log('recipient.list',recipient.list);
                    recipient.emailRecipientsList = [];
                    recipient.emailRecipientsList.push(recipient.list);
                   // console.log('recipient.emailRecipientsList.push($scope.emailRecipients.list)',recipient.emailRecipientsList.push($scope.emailRecipients));
                }
                recipient = _.omit(recipient,'list');
                RecipientApiSrv.updateRecipient($scope.loggedInUser.securityUserId+'/recipients',recipient,function(data){
                    alert('Recipients Updated Successfully');
                console.log('Updated data ------- ',data.plain());
                $state.transitionTo('app.home.manage.recipients.list');
               });
            });   

        }
    ]);
})(angular);