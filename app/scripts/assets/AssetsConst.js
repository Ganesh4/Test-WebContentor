
'use strict';

(function(angular) {
    
    angular.module('assets').constant('AssetsConsts', (function () {
        var self = {};
        self.BTNS = {
             REFRESS: {
                display: gettext('Refress'),

                 },
                APPLY: {

                display: gettext('Apply'),

                 },
                PREVIEW : { 
                    display: gettext('Preview'),
                },
                EDIT :{
                    display: gettext('Edit'),
                 },
                VIEW : {
                    display: gettext('View'),
                 },
                 VIEW : {
                    display: gettext('Upload'),
                 },

            }


        return self;
    })());
})(angular);