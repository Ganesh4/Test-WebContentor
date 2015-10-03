'use strict';

(function(angular) {
    
    angular.module('user').controller('RegisterCtrl', [
        '$scope',
        'reCAPTCHA',
        'Global',
        'CommonSrv',
        function($scope, reCAPTCHA, Global,CommonSrv) {
    	 	
    	 	// or you can also set key here
            reCAPTCHA.setPublicKey('6LfyK-0SAAAAAAl6V9jBGQgPxemtrpIZ-SPDPd-n');
            //var captchaText = reCAPTCHA.response();
            // console.log('captchaText ------- ',captchaText);

      			$scope.addUser = function() {
      				if ($scope.user) {
                console.log("User -----------",$scope.user);
      				  $scope.$emit(Global.EVENTS.USER_REGISTER);
      			  }
            };
       
            CommonSrv.getCountriesList(function(data){
              $scope.countries = data.plain();
              console.log('countries-------------',$scope.countries);
            });
            
           // console.log('Countries ------------ ',$scope.coun);
            $scope.updateCountry = function(){
              $scope.states = $scope.user.country.SecurityStates;
            }
          		
	}

          
    ]);

})(angular);