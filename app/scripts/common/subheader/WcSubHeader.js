/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('microsite').directive('wcSubHeader',function()
        {


                return{

                    restrict:'AE',
                    templateUrl:'./views/commons/subheader/SubHeader.html',
                    controller:('SubHeaderCtrl',['$scope','$state'],function($scope,$state)
                            {
                                
                            })

                }
        })
     })(angular);