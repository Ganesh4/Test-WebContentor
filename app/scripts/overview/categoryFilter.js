/**
*
**/
'use strict';
(function(angular){
angular.module('overview').filter('categoryFilter', function () {
    return function (items,category) {
        var filtered = [];
        /*for (var i = 0; i < categories.length; i++) {
            var category = categories[i];
            if (category.name.substring(0, 1)) {
                filtered.push(item);
            }
        }
        console.log("Checking filter ------------- ",items,category);*/
        _.each(items,function(value,key){
        	if(value.category.name == category)
        		filtered.push(value);

        });
        return filtered;
    };
});


})(angular);