


'use strict';

(function(angular){
angular.module('user').directive('gridCtrl',[
    '$state' 
    function(state) {
    return
    {
        restrict:'AE',
        templateUrl:'./views/commons/footer/FooterEditor.html',
        scope: {
            gridOptions : '=',
            data
        },
        link: function(scope, element, attr){
            
           
            $scope.gridOptions = { 
                columnDefs: [{field: 'name', displayName: 'Name'},
                             {field:'age', displayName:'Age', cellTemplate: 'cellTemplate.html'}]
            };

             $scope.gridOptions.data = [
                {name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34}
            ];
        }
    }
    
}]);
})(angular);
