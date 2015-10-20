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
            $scope.elements = $state.current.data.elements;
            $scope.formBtns = $state.current.data.formBtns;
            $scope.submitEvent = $state.current.data.submitEvent;


            //Update Recipient Functions
            $scope.$on(Global.EVENTS.UPDATE_RECIPIENT,function(){
                 var recipient = $scope.recipients;
                 console.log('Edit Recipient-----------',recipient);
                if(!_.isUndefined(recipient.country))
                    recipient.country = $scope.recipients.country.SecurityCountryID;
                if(!_.isUndefined(recipient.state))
                    recipient.state = $scope.recipients.state.SecurityStateID;
                 if(!_.isUndefined(recipient.list))
                    recipient.listId = $scope.recipients.list.listId;

                recipient = _.omit(recipient,'list');
             RecipientApiSrv.updateRecipient($scope.loggedInUser.securityUserID+'/recipients',recipients,function(){
                console.log('Updated data ------- ',data.plain());
                $scope.$emit(Global.EVENTS.RELOAD);
                $state.transitionTo('app.home.manage.recipients.list');
               });
            });      

        }
    ]);
})(angular);