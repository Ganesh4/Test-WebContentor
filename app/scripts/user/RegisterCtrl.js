'use strict';

(function(angular) {
    
  angular.module('user').controller('RegisterCtrl', 
    [
      '$scope',
      'reCAPTCHA',
      'Global',
      'CommonSrv',
      '$state',
      '$rootScope',
      function($scope, reCAPTCHA, Global, CommonSrv, $state, $rootScope) {
  	 	
  	 	// or you can also set key here
          reCAPTCHA.setPublicKey('6LfyK-0SAAAAAAl6V9jBGQgPxemtrpIZ-SPDPd-n');
          //var captchaText = reCAPTCHA.response();
          // console.log('captchaText ------- ',captchaText);
          $scope.elements = $state.current.data.elements;
          $scope.formBtns = $state.current.data.formBtns;
          $scope.submitEvent = $state.current.data.submitEvent;
    			$scope.addUser = function() {
    				if ($scope.user) {
              console.log("User -----------",$scope.user);
    				  $scope.$emit(Global.EVENTS.USER_REGISTER);
    			  }
          };
         
      }]);
})(angular);