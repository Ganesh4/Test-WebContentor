/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('microsite').directive('wcHeader',function()
        {


                return{

                    restrict:'AE',
                    templateUrl:'./views/commons/header/header.html',
                    controller:('HeaderCtrl',['$scope','$state'],function($scope,$state)
                            {

                                




                            })


                }
        })
     })(angular);