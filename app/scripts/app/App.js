'use strict';

(function(angular){

	angular.module('app').config([function(){ 


	}]).run([
       'validator',
       'foundation5ElementModifier',
       'defaultErrorMessageResolver',
       'ElementModifierSrv',
       function (validator, foundation5ElementModifier, defaultErrorMessageResolver, ElementModifierSrv) {
			validator.registerDomModifier(ElementModifierSrv.key, ElementModifierSrv);
            // passing a culture into getErrorMessages('fr-fr') will get the culture specific messages
	        // otherwise the current default culture is returned.
	        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
	          	errorMessages['firstNameRequired'] = 'First Name Required';
	            errorMessages['lastNameRequired'] = 'Last Name Required';
	          	errorMessages['emailisrequired'] = 'Email is required';	
	          	errorMessages['passwordisrequired'] = 'Password is required';
	          	errorMessages['anotherErrorMessage'] = 'An error message with the attribute value {0,1,2,3,4}';
	          	errorMessages['invalidMobile'] = 'Invalid Mobile Number';
	          	errorMessages['invalidPhoneNo'] = 'Invalid Phone Number';
	          	
	        });

       }]);

})(angular);