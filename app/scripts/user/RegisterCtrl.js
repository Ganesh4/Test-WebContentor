'use strict';

(function(angular) {
    
    angular.module('user').controller('RegisterCtrl', [
        '$scope',
        'reCAPTCHA',
        function($scope, reCAPTCHA) {
    	 	$scope.user = {};
    	 	// or you can also set key here
            reCAPTCHA.setPublicKey('6LfyK-0SAAAAAAl6V9jBGQgPxemtrpIZ-SPDPd-n');
            //var captchaText = reCAPTCHA.response();
            // console.log('captchaText ------- ',captchaText);

			$scope.addUser = function() {
				if ($scope.user) {
				console.log("New User --------- ",$scope.user);
			     }
            };
            var country0 = {
          						id : '1',
          						name : 'USA',
          						states : [{
          							id : '1',
          							name : 'California'
          							
          						},{
          							id : '2',
          							name : 'Washington'
          							
          						}]
          					};
          	var country1 = {
          						id : '2',
          						name : 'INDIA',
          						states : [{
          							id : '3',
          							name : 'Delhi'
          							
          						},{
          							id : '4',
          							name : 'Mumbai'
          							
          						}]
          					};
            var country2 = {
          						id : '3',
          						name : 'Australia',
          						states : [{
          							id : '5',
          							name : 'Victoria'
          							
          						},{
          							id : '6',
          							name : 'Queensland'
          							
          						}]
          					};


          	
           $scope.countries =[country0,country1,country2];
           $scope.updateCountry = function(){
          	console.log($scope.user.country);
          	$scope.states = $scope.user.country.states;
          }
          		
	}

          
    ]);

})(angular);