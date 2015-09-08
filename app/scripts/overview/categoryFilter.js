/**
*
**/
'use strict';
(function(angular){
angular.module('overview').filter('categoryFilter', function () {
    return function (items,category) {
        var filtered = [];
        _.each(items,function(value,key){
        	if(value.category.name == category)
        		filtered.push(value);

        });
        return filtered;
    };
});


})(angular);