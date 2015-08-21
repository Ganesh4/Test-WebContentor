/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){

    angular.module('microsite').directive('wcLeftNav',function()
        {
                return{

                    restrict:'AE',
                    templateUrl:'./views/commons/leftnav/leftnav.html',
                    controller:('LeftnavCtrl',['$scope','$state'],function($scope,$state)
                            {

                                



                            })


                }
        })
     })(angular);