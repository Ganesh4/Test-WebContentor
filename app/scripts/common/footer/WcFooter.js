/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){

    angular.module('microsite').directive('wcFooter',function()
        {


                return{

                    restrict:'AE',
                    templateUrl:'./views/common/footer/footer.html',
                    controller:('FooterCtrl',['$scope','$state'],function($scope,$state)
                            {

                             




                            })


                }
        })
     })(angular);