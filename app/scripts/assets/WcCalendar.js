'use strict';

(function(angular){

angular.module('assets').directive('wcCalendar',
	[
	'Global',
	function(Global){
		return{
			restrict:'AE',
			scope:{
				model : '=',
				formData : '=',
				format : '=',
				onChange : '='
			},
			templateUrl : './views/assets/calendar.html',
			link : function(scope, element, attrs){
				scope.calendar = {};
				scope.calendar.isCalendarOpen = false;
				//Opens the Calendar On Click.
	            scope.doOnClick = function($event){
	            	$event.preventDefault();
                    $event.stopPropagation();
	                scope.calendar.isCalendarOpen = true;
	                console.log(scope.calendar.isCalendarOpen);
	            }

				// grab today and inject into field
				scope.today = function() {
					scope.today = new Date();
				};
				scope.today();
				scope.tomorrow = function() {
					scope.campaign.endDate = new Date(scope.startDate.getTime() + 24 * 60 * 60 * 1000);
				};
			}
		}
	}]
)}(angular));