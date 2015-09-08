/**
 * Created by subhash on 16/7/15.
 */
'use strict';

(function(angular){

    angular.module('editor').directive('wcFooterEditor',function()
        {


                return{

                    restrict:'AE',
                    templateUrl:'./views/commons/footer/FooterEditor.html',
                    controller:('FooterEditorCtrl',['$scope','$state'],function($scope,$state)
                            {


                            })


                }
        })
     })(angular);