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
           /* $scope.$on(Global.EVENTS.UPDATE_CONTACT,function(){

                 var recipient = $scope.contactData;

                 console.log('Edit -----------',$scope.contactData);

                if(!_.isUndefined(recipient.country))
                    recipient.country = $scope.contactData.country.securityCountryID;
                if(!_.isUndefined(recipient.state))
                    recipient.state = $scope.contactData.state.securityStateID;
                 if(!_.isUndefined(recipient.list))
                    recipient.listId = $scope.contactData.list.listId;
                recipient = _.omit(recipient,'list');
             RecipientApiSrv.updateRecipient($scope.loggedInUser.securityUserId+'/recipients',contactData,function(){
                console.log('Updated data ------- ',data.plain());
                $state.transitionTo('app.home.manage.recipients.list');
               });
            }); */     

        }
    ]);
})(angular);