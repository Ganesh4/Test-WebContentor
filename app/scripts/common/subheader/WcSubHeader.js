/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){
    angular.module('subheader').directive('wcSubHeader',function()
        {


                return{

                    restrict:'AE',
                    templateUrl:'./views/commons/subheader/SubHeader.html',
                    scope : false,
                    link : function(scope,elem,attrs){
                        console.log("Subheader scope ------------- ",scope);
                    }

                }
        })
     })(angular);