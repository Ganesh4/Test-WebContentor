/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('editor').directive('wcHeaderEditor',function()
        {


                return{

                    restrict:'AE',
                    templateUrl:'./views/commons/header/HeaderEditor.html',
                    controller:('HeaderEditCtrl',['$scope','$state'],function($scope,$state)
                            {

                            })


                }
        })
     })(angular);